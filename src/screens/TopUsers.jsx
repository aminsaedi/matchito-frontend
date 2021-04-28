import React, { useState, useEffect } from 'react';

import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import UserCard from '../components/UserCard';

import userApi from '../api/user';

const TopUsers = props => {
  const [topUsers, setTopUsers] = useState();
  const [error, setError] = useState();
  const getTopUsers = async () => {
    const result = await userApi.allSortedUsers();
    if (result.status !== 200) {
      return setError(result.data);
    } else if (result.status === 200) return setTopUsers(result.data);
    else return setError({ message: 'Server side error', status: 131 });
  };
  useEffect(() => getTopUsers(), []);
  if (!topUsers) return null;
  return (
    <Box height="85vh" width="100vw" overflowY="auto" p="2rem">
      <Heading
        fontFamily="Vazir"
        fontSize={['3rem', '4rem']}
        py="1rem"
        textAlign="center"
      >
        شرکت کنندگان برتر
      </Heading>
      <SimpleGrid spacing="4rem" columns={{ sm: 2, md: 3 }}>
        {topUsers.map(user => (
          <UserCard name={user.first_name + ' ' + user.last_name} score={user.score} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TopUsers;
