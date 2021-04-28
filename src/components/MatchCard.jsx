import React, { useContext, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import AuthContext from '../services/authContext';
import participantsApi from '../api/participant';

import { toast } from 'react-toastify';

const MatchCard = ({ match, onClick, disabled = false, bgColor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleStartMatch = async () => {
    onClose();
    if (!user) {
      return toast.error('ابتدا وارد حساب خود شوید');
    }
    const regResult = await participantsApi.registerUserToMatch(
      user.user_id,
      match.match_id
    );
    if (regResult.status === 201) toast.success('ثبت نام انجام شد');
    if (regResult.data.status === 423) toast.info('قبلا ثبت نام کردی');
    return toast('در حال هدایت به صفحه مسابقه');
  };
  return (
    <Box
      borderRadius="30px"
      boxShadow="dark-lg"
      height="100%"
      textAlign="center"
      className="hoverable"
      backgroundColor={match.primary_background}
    >
      <Heading
        fontFamily="Vazir"
        mt="2rem"
        fontSize="4rem"
        as="h3"
        color={match.primary_text}
      >
        {match.title}
      </Heading>
      <Text my="3rem" color={match.secondary_text} fontSize="2rem">
        تعداد شرکت کنندگان : {100} نفر
      </Text>
      <Text my="3rem" color={match.secondary_text} fontSize="2rem">
        داور مسابقه : {match.referee_name}
      </Text>
      <Text my="3rem" color={match.secondary_text} fontSize="2rem">
        پایان : {match.end_date.toPersianDigits()}
      </Text>
      <Button
        onClick={onOpen}
        fontSize="2rem"
        p="3rem"
        mb="2rem"
        className="hoverable"
        disabled={disabled}
        backgroundColor={match.secondary_background}
        color={match.primary_text}
        colorScheme={match.secondary_background}
      >
        شرکت در مسابقه
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width="50%">
          <ModalHeader>تایید ثبت نام</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="2rem">
              مطمعنی میخوایی توی مسابقه شرکت کنی؟ <br /> این کار غیرقابل برگشته
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              fontSize="1.5rem"
              p="2rem"
              colorScheme="pink"
              ml={3}
              onClick={onClose}
            >
              بیخیال
            </Button>
            <Button
              fontSize="1.5rem"
              p="2rem"
              colorScheme="blue"
              onClick={handleStartMatch}
            >
              تایید و ادامه
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>{error.title}</AlertTitle>
          <AlertDescription>{error.description}</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
    </Box>
  );
};

export default MatchCard;
