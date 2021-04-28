import React, { useEffect, useState, useContext } from 'react';

import { Box, SimpleGrid } from '@chakra-ui/react';
import MatchCard from '../components/MatchCard';
import matchesApi from '../api/matches';

const Matches = props => {
  const [matches, setMatches] = useState();
  const [error, setError] = useState();
  const getMatches = async () => {
    const result = await matchesApi.getAllMatches();
    if (result.status !== 200) {
      return setError(result.data);
    } else if (result.status === 200) return setMatches(result.data);
    else return setError({ message: 'Server side error', status: 131 });
  };

  useEffect(() => {
    getMatches();
  }, []);
  return (
    <Box height="85vh" width="100vw" overflowY="auto" p="2rem">
      <SimpleGrid spacing="4rem" columns={{ sm: 2, md: 4 }}>
        {matches && matches.map(match => <MatchCard match={match} />)}
      </SimpleGrid>
    </Box>
  );
};

export default Matches;
