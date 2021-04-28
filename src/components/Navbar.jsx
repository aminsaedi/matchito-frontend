import React from 'react';
import { Box, List, ListItem, Divider, Image } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = ({ isOpen, setOpen, user }) => {
  return (
    <Box width="100%" height="10vh">
      <List
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize="2rem"
      >
        <ListItem>
          <Hamburger direction="right" toggle={setOpen} toggled={isOpen} />
        </ListItem>
        <ListItem className="hoverable"  >
          <Link to="/">
            <Image src={logo} alt="logo" />
          </Link>
        </ListItem>
        <ListItem>
          <Box ml="1rem" overflow="hidden">
            {!user && <Link to="/help">راهنما</Link>}
            {user && (
              <Link to="/account">
                {user.first_name + ' ' + user.last_name ||
                  user.username ||
                  user.mobile}
              </Link>
            )}
          </Box>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default Navbar;
