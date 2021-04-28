import React, { useState, useContext, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { FilePicker } from 'react-file-picker';
import { toast } from 'react-toastify';
import AuthContext from '../services/authContext';
import participantsApi from '../api/participant';
const Doing = props => {
  const { user, setUser } = useContext(AuthContext);
  const getMatch = async (user_id, match_id) => {};
  useEffect(() => toast('dsdf'), [user]);
  return (
    <Box height="85vh" width="100vw" overflowX="auto">
      <Heading
        fontFamily="Vazir"
        textAlign="center"
        fontSize={['3rem', '4rem']}
        as="h1"
        pt="1rem"
      >
        شرکت در مسابقه {props.match.params.id} {user.first_name}
      </Heading>
      <Box width="20rem" mx="auto" mt="3rem">
        <Heading
          fontFamily="Vazir"
          textAlign="center"
          fontSize={['2rem', '3rem']}
          as="h2"
          mb="1rem"
        >
          پیشرفت
        </Heading>
        <CircularProgressbar value={66} text={`66%`} />
      </Box>
      <Box>
        <Heading
          fontFamily="Vazir"
          textAlign="center"
          mt="2rem"
          fontSize={['2rem', '3rem']}
          as="h2"
        >
          وظیفه فعلی
        </Heading>
        <Text fontSize={['1.5rem', '2rem']} px="2rem">
          آیتم تست
        </Text>
        <Text fontSize={['1.5rem', '2rem']} px="2rem">
          توضیحات: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ک
        </Text>
      </Box>
      <Box textAlign="center">
        <Heading
          fontFamily="Vazir"
          textAlign="center"
          mt="2rem"
          fontSize={['2rem', '3rem']}
          as="h2"
        >
          آپلود فایل
        </Heading>
        <FilePicker
          extensions={['zip', 'rar']}
          onChange={FileObject => console.log('Ok')}
          onError={errMsg => console.log(errMsg)}
        >
          <Button colorScheme="blue" p="2rem" fontSize="2rem" my="2rem">
            فایل را انتخاب کنید
          </Button>
        </FilePicker>
      </Box>
    </Box>
  );
};

export default Doing;
