import React from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorMode,
} from '@chakra-ui/react';

export default function ContactUs() {
  const { colorMode } = useColorMode();
  const handleNumbers = (e) => {
    const x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xmkd70f',
        'template_contact_form',
        e.target,
        'user_yDEiAiMLkj4IOhDcHFLZS'
      )
      .then(
        (result) => {
          alert("Awesome! I'll get back to you soon!");
        },
        (error) => {
          console.error(error);
          alert('Oh no! something went wrong! Please try again!');
        }
      );
  }

  return (
    <Flex
      marginBottom='20px'
      position='absolute'
      top='-48px'
      maxW='400px'
      bgGradient={
        colorMode === 'dark'
          ? 'linear(to-br, gray.800, gray.700)'
          : 'linear(to-br, gray.100, gray.50)'
      }
      borderWidth='1px'
      borderRadius='md'
      boxShadow='lg'
      p={4}
    >
      <Flex direction='column'>
        <Box py={8}>
          <Heading>Ready to get started?</Heading>
          <Text>
            Tell me briefly what you are looking for, and how to contact you,
            and I will get back to you quickly!
          </Text>
        </Box>
        <form method='POST' action='/' name='contact' onSubmit={sendEmail}>
          <input type='hidden' value='contact' />
          <FormControl py={2}>
            <FormLabel htmlFor='name'>
              <span>Name</span>
            </FormLabel>
            <Input type='text' name='name' maxLength='24' required />
          </FormControl>
          <FormControl py={2}>
            <FormLabel htmlFor='email'>
              <span>Email</span>
            </FormLabel>
            <Input type='email' name='email' maxLength='30' required />
          </FormControl>
          <FormControl py={2}>
            <FormLabel htmlFor='phone'>
              <span>Phone</span>
            </FormLabel>
            <Input type='tel' name='phone' onChange={handleNumbers} required />
          </FormControl>
          <FormControl py={2}>
            <FormLabel htmlFor='message'>
              <span>Brief Message (50 characters or less)</span>
            </FormLabel>
            <Input type='textarea' name='message' maxLength='50' required />
          </FormControl>
          <Flex direction='row' w='100%' align='center' justify='flex-end'>
            <Button colorScheme='purple' my={2} type='submit' value='Send'>
              Send
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
