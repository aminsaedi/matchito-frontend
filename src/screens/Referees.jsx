import React, { useState, useEffect } from 'react';

import { Box, SimpleGrid } from '@chakra-ui/react';
import RefereeCard from '../components/RefereeCard';
import refereesApi from '../api/referee';

const Referees = props => {
  const [referees, setReferees] = useState();
  const [error, setError] = useState();

  const getReferees = async () => {
    const result = await refereesApi.getAllReferees();
    console.log(result.data);
    if (result.status !== 200) {
      return setError(result.data);
    } else if (result.status === 200)
      return setReferees(result.data.slice(0, 3));
    else return setError({ message: 'Server side error', status: 131 });
  };
  useEffect(() => getReferees(), []);

  if (!referees) return null;
  return (
    <Box height="85vh" width="100vw" overflowY="auto" p="2rem">
      <SimpleGrid spacing="4rem" columns={{ sm: 2, md: 4 }}>
        {referees.map(referee => (
          <RefereeCard name={referee.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Referees;
