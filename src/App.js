import React, { useState, useEffect } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppDrawer from './components/AppDrawer';
import Footer from './components/Footer';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Register from './screens/Register';
import Matches from './screens/Matches';
import Help from './screens/Help';
import UserAccount from './screens/UserAccount';
import Referees from './screens/Referees';
import TopUsers from './screens/TopUsers';
import NotFound from './screens/NotFound';
import Doing from './screens/Doing';
import authService from './services/authService';
import AuthContext from './services/authContext';
import ProtectedRoute from './components/protectedRoute';

const theme = extendTheme({
  direction: 'rtl',
});

createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

String.prototype.toPersianDigits = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(authService.getCureentUser);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Navbar isOpen={isOpen} setOpen={setIsOpen} user={user} />
        <AppDrawer
          isOpen={isOpen}
          onClose={setIsOpen}
          onClick={() => setIsOpen(!isOpen)}
          user={user}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/matches" component={Matches} />
          <Route path="/referees" component={Referees} />
          <Route path="/topUsers" component={TopUsers} />
          <ProtectedRoute path="/doing/:id" component={Doing} />
          <Route path="/help" component={Help} />
          <Route path="/account" component={UserAccount} />
          <Route path="/notFound" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/notFound" />
        </Switch>
        <ToastContainer position="bottom-center" rtl />
        <Footer />
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default App;
