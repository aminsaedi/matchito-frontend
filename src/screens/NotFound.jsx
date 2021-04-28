import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

const NotFound = props => {
  return (
    <Box width="100vw" height="85vh">
      <Box
        borderRadius="30px"
        boxShadow="dark-lg"
        mx="auto"
        py="2rem"
        width={['90%', '50%']}
        height="25%"
        position="relative"
        top="10%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h1"
          fontFamily="Vazir"
          fontSize={['2rem', '3rem']}
          textAlign="center"
        >
          صفحه ای که دنبالشی رو نجستم
        </Heading>
      </Box>
    </Box>
  );
};

export default NotFound;
