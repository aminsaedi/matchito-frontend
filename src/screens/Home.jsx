import React, { useEffect, useState } from 'react';

import { Heading, Box, Text, SimpleGrid } from '@chakra-ui/react';

import matches from '../api/matches';
import userApi from '../api/user';
import UserCard from '../components/UserCard';
import MatchCard from '../components/MatchCard';

const Home = props => {
  const [error, setError] = useState();
  const [activeMatches, setMatches] = useState();
  const [topUsers, setTopUsers] = useState();

  const getMatches = async () => {
    const result = await matches.getActiveMatches();
    if (result.status !== 200) {
      return setError(result.data);
    } else if (result.status === 200) return setMatches(result.data);
    else return setError({ message: 'Server side error', status: 131 });
  };

  const getTopUsers = async () => {
    const result = await userApi.allSortedUsers();
    if (result.status !== 200) {
      return setError(result.data);
    } else if (result.status === 200)
      return setTopUsers(result.data.slice(0, 3));
    else return setError({ message: 'Server side error', status: 131 });
  };

  useEffect(() => {
    getMatches();
    getTopUsers();
  }, []);

  if (!matches || !topUsers) return null;
  return (
    <Box>
      <Heading
        fontFamily="Vazir"
        textAlign="center"
        fontSize="5rem"
        as="h1"
        pt="5rem"
      >
        آنلاین مسابقه بده <br /> آنلاین جایزه بگیر
      </Heading>
      <Text textAlign="center" fontSize="3rem" mt="3rem" mb="3rem">
        با مچیتو میتونی توی مسابقه های ما شرکت کنی برنده بشی و جایزتو تحویل
        بگیری
      </Text>
      <Heading
        fontFamily="Vazir"
        textAlign="center"
        fontSize="3rem"
        as="h2"
        mb="2rem"
      >
        مسابقه های فعال
      </Heading>
      <Box width="80%" mx="auto">
        <SimpleGrid spacing="4rem" columns={{ sm: 1, md: 3 }}>
          {activeMatches &&
            activeMatches.map(match => (
              <MatchCard key={match.match_id} match={match} />
            ))}
        </SimpleGrid>
      </Box>
      <Heading
        fontFamily="Vazir"
        textAlign="center"
        fontSize="3rem"
        as="h2"
        mt="5rem"
        mb="2rem"
      >
        برترین شرکت کنندگان
      </Heading>
      <Box width="80%" mx="auto">
        <SimpleGrid spacing="4rem" columns={{ sm: 1, md: 3 }}>
          {topUsers.map(user => (
            <UserCard name={user.first_name + ' ' + user.last_name}  score={user.score} />
          ))}
        </SimpleGrid>
      </Box>
      <Box w="80%" mx="auto" mt="5rem" mb="1rem">
        <Heading
          as="h2"
          fontFamily="Vazir"
          fontSize="3rem"
          textAlign="center"
          id="#about"
        >
          درباره مچیتو
        </Heading>
        <Heading fontSize="2rem" fontFamily="Vazir" pr="2rem" my="2rem">
          هدف سایت
        </Heading>
        <Text fontSize="2rem" pr="5rem">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <Heading fontSize="2rem" fontFamily="Vazir" pr="2rem" my="2rem">
          جوایز ما
        </Heading>
        <Text fontSize="2rem" pr="5rem">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <Heading fontSize="2rem" fontFamily="Vazir" pr="2rem" my="2rem">
          داوران مسابقات
        </Heading>
        <Text fontSize="2rem" pr="5rem">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
