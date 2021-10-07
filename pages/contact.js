import { Flex } from '@chakra-ui/layout';
import React from 'react';

import Email from '../components/Email';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <>
      <SEO title='Contact | Isaac Johnson, LLC' />
      <Hero
        title="Let's get started!"
        cta='Fill out the form below and we will see how we can best fit your needs!'
      />
      <Flex align='center' position='relative' justify='center' minH='55vh'>
        <Email />
      </Flex>
    </>
  );
};

export default contact;
