import { Flex } from '@chakra-ui/layout';
import React from 'react';

import Email from '../components/Email';
import Hero from '../components/Hero';

const contact = () => {
  return (
    <>
      <Hero
        title="Let's get started!"
        cta='Fill out the form below and we will see how we can best fit your needs!'
      />
      <Flex align='center' justify='center'>
        <Email />
      </Flex>
    </>
  );
};

export default contact;