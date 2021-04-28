import React from 'react';
import { Box, List, ListItem, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <Box w="100%" height="5vh">
      <Box height="100%">
        <Divider />
        <List
          display="flex"
          justifyContent="space-around"
          pt="0.5rem"
          fontSize="1.5rem"
        >
          <ListItem>
            <Link to="/about">درباره مچیتو</Link>
          </ListItem>
          <ListItem>
            <Link to="/support">پشتیبانی</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">ارتباط با ما</Link>
          </ListItem>
          <ListItem>
            <Link to="/report">گزارش مشکل</Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
