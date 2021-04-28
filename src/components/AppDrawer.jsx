import React, { useCallback } from 'react';
import { IoMdExit, IoIosCloudyNight, IoIosSearch } from 'react-icons/io';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  IconButton,
  Box,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import authService from '../services/authService';

const AppDrawer = ({ isOpen, onClose, onClick, user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();
  // const handleLoginPage = useCallback(() => history.push('/login'), [history]);
  const handleLoginPage = () => {
    if (!user) {
      window.location = '/login';
    } else if (user) {
      authService.logoutUser();
      window.location = '/';
    }
  };
  return (
    <Drawer placement="right" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            textAlign="center"
            fontSize="2rem"
          >
            منو
          </DrawerHeader>
          <DrawerBody>
            <List
              fontSize="2rem"
              fontWeight="bold"
              textAlign="center"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              height="90%"
            >
              <ListItem>
                <Link onClick={onClick} to="/">
                  صفحه اصلی
                </Link>
              </ListItem>
              {user && (
                <ListItem>
                  <Link onClick={onClick} to="/account">
                    فعالیت های من
                  </Link>
                </ListItem>
              )}
              {!user && (
                <ListItem>
                  <Link onClick={onClick} to="/login">
                    ورود
                  </Link>
                </ListItem>
              )}
              <ListItem>
                <Link onClick={onClick} to="/matches">
                  مسابقه ها
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={onClick} to="/topUsers">
                  شرکت کنندگان برتر
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={onClick} to="/referees">
                  داوران
                </Link>
              </ListItem>
            </List>
            <Box display="flex" justifyContent="center">
              <Tooltip
                placement="auto"
                label="ورود/خروج"
                fontSize="2rem"
                hasArrow
              >
                <IconButton
                  aria-label="logout / login"
                  width="4rem"
                  height="4rem"
                  colorScheme="blue"
                  className="hoverable"
                  icon={<IoMdExit size={30} />}
                  mx="1rem"
                  onClick={handleLoginPage}
                />
              </Tooltip>
              <Tooltip
                placement="auto"
                label="حالت شب/روز"
                fontSize="2rem"
                hasArrow
              >
                <IconButton
                  aria-label="Search database"
                  width="4rem"
                  height="4rem"
                  colorScheme="blue"
                  className="hoverable"
                  onClick={toggleColorMode}
                  icon={<IoIosCloudyNight size={30} />}
                  mx="1rem"
                />
              </Tooltip>
              <Tooltip placement="auto" label="جستجو" fontSize="2rem" hasArrow>
                <IconButton
                  aria-label="Search database"
                  width="4rem"
                  height="4rem"
                  colorScheme="blue"
                  className="hoverable"
                  icon={<IoIosSearch size={30} />}
                  mx="1rem"
                />
              </Tooltip>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default AppDrawer;
