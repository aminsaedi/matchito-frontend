import React, { useContext, useEffect, useState } from 'react';

import {
  Box,
  Image,
  Text,
  Heading,
  ButtonGroup,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react';
import { IoIosExit, IoIosInformationCircleOutline } from 'react-icons/io';

import userLogo from '../assets/user.jpg';
import AppTable from '../components/Table';
import AuthContext from '../services/authContext';
import userApi from '../api/user';
import MatchCard from '../components/MatchCard';

const UserAccount = props => {
  const [userMatches, setUserMatches] = useState();
  const { user, setUser } = useContext(AuthContext);
  const getUserMatches = async () => {
    const result = await userApi.userMatches();
    if (result.status === 200) return setUserMatches(result.data);
  };
  useEffect(() => getUserMatches(), []);
  const actions = (
    <ButtonGroup>
      <IconButton
        aria-label="ورود به مسابقه"
        width="2.5rem"
        height="2.5rem"
        colorScheme="blue"
        icon={<IoIosExit size={20} />}
      />
      <IconButton
        aria-label="اطلاعات بیشتر"
        width="2.5rem"
        height="2.5rem"
        colorScheme="blue"
        icon={<IoIosInformationCircleOutline size={20} />}
      />
    </ButtonGroup>
  );
  if (!user || !userMatches) return null;
  console.log(userMatches);
  return (
    <Box height="85vh" width="100vw" overflowY="auto" >
      <Box
        width={['95%', '85%']}
        height="20%"
        maxHeight="15rem"
        mx="auto"
        display="flex"
        alignItems="center"
        py="2rem"
      >
        <Image
          src={userLogo}
          height="100%"
          objectFit="contain"
          borderRadius="full"
        />
        <Box mr="2rem" flexGrow={1}>
          <Text fontSize={['2rem', '3rem']} textAlign="right">
            {user.first_name + ' ' + user.last_name}
          </Text>
          <Text fontSize={['2rem', '3rem']} textAlign="left">
            {user.mobile.toPersianDigits()}
          </Text>
        </Box>
      </Box>
      <Heading
        textAlign="center"
        mt="3rem"
        as="h1"
        fontSize={['3rem', '4rem']}
        fontFamily="Vazir"
      >
        فعالیت های من
      </Heading>

      <Heading
        fontSize={['2rem', '3rem']}
        textAlign="center"
        fontFamily="Vazir"
        mt="2rem"
        as="h2"
      >
        مسابقه های من
      </Heading>
      <Box width="95vw" overflowY="auto" p="2rem" py="4rem" mx="auto">
        <SimpleGrid spacing="4rem" columns={{ sm: 2, md: 4 }}>
          {userMatches.map(match => <MatchCard match={match} />)}
        </SimpleGrid>
      </Box>
      <Heading
        fontSize={['2rem', '3rem']}
        textAlign="center"
        fontFamily="Vazir"
        mt="2rem"
        as="h2"
      >
        امتیاز من
      </Heading>
      <Text fontSize={['1.5rem', '2rem']} mr="2rem">
        مجموع امتیاز :{' '}
        <Text display="inline" fontWeight="bold" fontSize={['2rem', '2.5rem']}>
          {user.score.toString().toPersianDigits()}
        </Text>
      </Text>
      <Text fontSize={['1.5rem', '2rem']} mr="2rem" mt="2rem">
        رتبه میان کاربران :‌ ۱
      </Text>
    </Box>
  );
};

export default UserAccount;
