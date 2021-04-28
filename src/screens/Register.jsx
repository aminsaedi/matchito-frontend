import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, Heading, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import AppFormInput from '../components/form/AppFormInput';

import authService from '../services/authService';
import userApi from '../api/user';

const Register = props => {
  const [loading, setLoading] = useState(false);
  const handleRegister = async ({
    firstName,
    lastName,
    mobile,
    password,
    meliCode,
  }) => {
    setLoading(true);
    const regResult =  await userApi.registerUser(firstName, lastName, mobile, password, meliCode);
    if(regResult.status !== 200) {
      setLoading(false);
      return alert(regResult.data.message)
    }
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
    firstName: Yup.string().required('اسم و فامیل اجباریه'),
    lastName: Yup.string().required('اسم و فامیل اجباریه'),
    mobile: Yup.string()
      .required('شماره موبایل رو وارد کن')
      .matches(regex, 'شماره مویابل رو صحیح وارد کن'),
    password: Yup.string().required('رمز عبور اجباریه'),
    meliCode: Yup.string().required('کد ملی اجباریه'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      meliCode: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleRegister,
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
        ثبت نام در مچیتو
      </Heading>
      <Text
        textAlign="center"
        pt="2rem"
        maxWidth="90%"
        mx="auto"
        fontSize={['1.5rem', '2rem']}
      >
        برای ثبت نام فقط کافیه شماره موبایل داشته باشی و کد ملیتو بدونی
      </Text>
      <Box
        width={['75%', '50%']}
        borderRadius="30px"
        mt="2%"
        height={['45%', '55%']}
        p="2rem"
        mx="auto"
        textAlign="center"
        boxShadow="dark-lg"
        overflowY="auto"
      >
        <form onSubmit={formik.handleSubmit}>
          <AppFormInput formik={formik} name="firstName" placeholder="اسم" />
          <AppFormInput formik={formik} name="lastName" placeholder="فامیل" />
          <AppFormInput
            formik={formik}
            name="mobile"
            placeholder="شماره مویابل"
          />
          <AppFormInput formik={formik} name="meliCode" placeholder="کد ملی" />
          <AppFormInput
            formik={formik}
            name="password"
            placeholder="کلمه ی عبور"
            type="password"
          />
          <Button
            fontSize={['1rem', '2rem']}
            colorScheme="blue"
            className="hoverable"
            height="4rem"
            display="block"
            width={['60%', '30%']}
            mx="auto"
            type="submit"
          >
            ثبت نام
          </Button>
        </form>
      </Box>
      <Text fontSize="1.5rem" mt="2rem" textAlign="center">
        اگه قبلا اینجا ثبت نام کردی میتونی <Link to="/login"> از اینجا</Link>{' '}
        وارد بشی
      </Text>
    </Box>
  );
};

export default Register;
