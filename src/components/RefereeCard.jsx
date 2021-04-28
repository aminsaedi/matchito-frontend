import React from 'react';
import user from '../assets/user.jpg';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const RefereeCard = ({
  name = 'داور تست',
  image = user,
  regDate = '۱۴۰۰/۰۲/۰۴',
  history = '۰',
}) => {
  return (
    <Box
      borderRadius="30px"
      boxShadow="dark-lg"
      height="27rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="hoverable"
    >
      <Image
        src={image}
        boxShadow="2xl"
        boxSize="10rem"
        borderRadius="100%"
        mt="2rem"
        objectFit="cover"
        className="hoverable"
      />
      <Heading fontFamily="Vazir" as="h3" fontSize="4rem" mt="1rem">
        {name}
      </Heading>
      <Text fontSize="3rem">سابقه داوری {history} مسابقه</Text>
      <Text fontSize="2rem">از تاریخ {regDate}</Text>
    </Box>
  );
};

export default RefereeCard;
