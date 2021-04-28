import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
const AppFormInput = ({
  name,
  formik,
  textAlign = 'center',
  placeholder,
  width = ['90%', '60%'],
  type,
}) => {
  return (
    <Box textAlign="center" width={width} mx="auto" my="1rem">
      <Input
        {...formik.getFieldProps(name)}
        name={name}
        className="hoverable"
        fontSize={['2rem', '3rem']}
        height="4rem"
        width="100%"
        textAlign={textAlign}
        placeholder={placeholder}
        isInvalid={formik.touched[name] && formik.errors[name]}
        type={type}
      ></Input>
      {formik.touched[name] && formik.errors[name] && (
        <Text
          textAlign="center"
          color="red"
          display="block"
          mt="0.5rem"
          fontSize={['1rem', '2rem']}
        >
          {formik.errors[name]}
        </Text>
      )}
    </Box>
  );
};

export default AppFormInput;
