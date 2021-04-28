import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AppFormInput from '../components/form/AppFormInput';
import authService from '../services/authService';

const Login = props => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async ({ mobile, password }) => {
    setLoading(true);
    const result = await authService.loginUserWithPassword(mobile, password);
    if (result !== true) {
      setLoading(false);
      return alert(result.message);
    }
    setLoading(false);
    window.location = '/';
  };
  var regex = /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required('شماره موبایل رو وارد کن')
      .matches(regex, 'شماره مویابل رو صحیح وارد کن'),
    password: Yup.string().required('رمز عبور اجباریه'),
  });
  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <Box height="85vh" my={0}>
      <Heading
        pt="2rem"
        fontFamily="Vazir"
        fontSize={['3rem', '5rem']}
        textAlign="center"
        as="h1"
      >
        ورود به مچیتو
      </Heading>
      <Text
        textAlign="center"
        pt="2rem"
        maxWidth="90%"
        mx="auto"
        fontSize={['1.5rem', '2rem']}
      >
        برای ورود میتونی از کد یکبار مصرف یا رمز عبورت استفاده کنی
      </Text>
      <Box
        width={['75%', '50%']}
        borderRadius="30px"
        mt="2%"
        // height="30%"
        maxHeight="50%"
        p="2rem"
        mx="auto"
        textAlign="center"
        boxShadow="dark-lg"
        overflowY="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <form onSubmit={formik.handleSubmit}>
          <AppFormInput
            formik={formik}
            name="mobile"
            placeholder="شماره مویابل"
          />
          <AppFormInput
            formik={formik}
            name="password"
            placeholder="رمز عبور"
            type="password"
          />
          <Button
            type="submit"
            fontSize={['2rem', '2.5rem']}
            colorScheme="blue"
            className="hoverable"
            height="4rem"
            display="inline"
            width={['45%', '40%']}
            mx="auto"
            isLoading={loading}
          >
            ورود
          </Button>
        </form>

        <Text mt="1rem" fontSize={['1rem', '2rem']}>
          ورود با کد یک بار مصرف
        </Text>
      </Box>
      <Text fontSize="1.5rem" mt="2rem" textAlign="center">
        اگه هنوز توی مچیتو ثبت نام نکردی میتونی{' '}
        <Link to="/register">از اینجا</Link> شروع کنی :)
      </Text>
    </Box>
  );
};

export default Login;
