import React from 'react';
import user from '../assets/user.jpg';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const UserCard = ({
  name = 'کاربر تست',
  image = user,
  score = '۱۰۰',
  participatedMatches = '۵',
  regDate = '۱۴۰۰/۰۲/۰۴',
}) => {
  return (
    <Box
      borderRadius="30px"
      boxShadow="dark-lg"
      height="30rem"
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
      <Text fontSize="3rem">امتیاز : {score.toString().toPersianDigits()}</Text>
      <Text fontSize="2rem">مسابقه های شرکت شده : {participatedMatches}</Text>
      <Text fontSize="2rem">تاریخ عضویت : {regDate}</Text>
    </Box>
  );
};

export default UserCard;
