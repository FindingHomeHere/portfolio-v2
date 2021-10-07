import {
  Box,
  Flex,
  SimpleGrid,
  Heading,
  useColorMode,
  Circle,
  Text,
  Icon,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import { DiJavascript1 } from 'react-icons/di';
import { MdWeb } from 'react-icons/md';
import { IoSearch, IoBuildSharp } from 'react-icons/io5';
import { BsPencilSquare, BsCloudUpload, BsCone } from 'react-icons/bs';
import { AiOutlineMobile } from 'react-icons/ai';

import Hero from '../../components/Hero';
import Link from 'next/link';
import SEO from '../../components/SEO';

const ServiceItem = ({ title, icon, description, price = '' }) => {
  const { colorMode } = useColorMode();

  const ServiceBox = styled(Flex)`
    padding: 24px;
    flex-direction: row;
  `;
  return (
    <ServiceBox
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
      <Circle
        bg={colorMode === 'dark' ? 'purple.200' : 'purple.500'}
        color={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'}
        size={10}
        mx={6}
      >
        <Icon
          as={icon}
          boxSize='1.2rem'
          fill={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'}
        />
      </Circle>
      <Box>
        <Heading size='md'>{title}</Heading>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </Box>
    </ServiceBox>
  );
};

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <SEO title='About | Isaac Johnson, LLC' />
      <Hero
        title='Industry Leading Technology'
        cta='Cutting through the noise with advanced technology, keeps your brand a step ahead.'
        btnText='Get in touch'
        ctaLink='/contact'
      />
      <Flex py={16} direction='column' align='center'>
        <Box w={{ base: '100%', lg: '900px' }}>
          <Heading
            mb={8}
            mx={4}
            width='250px'
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, purple.300, blue.500)'
                : 'linear(to-r, purple.600, blue.600)'
            }
            bgClip='text'
          >
            How it works
          </Heading>
          <SimpleGrid spacing='32px' p={2} columns={{ base: 1, lg: 2 }}>
            <ServiceItem
              title='Step 1: Research'
              icon={IoSearch}
              description='I research your business (branding, needs,
                etc) and competition to gain perspective on
                best practices, design influence, and common
                functionality. I then meet with stakeholders
                to discuss functional needs, as well as
                aesthetics of the site.'
            />
            <ServiceItem
              title='Step 2: Collect'
              icon={BsPencilSquare}
              description='After the research, I assemble the data that
                was collected, plan the approach, and build
                an initial draft, as well as any assets you may order.'
            />
            <ServiceItem
              title='Step 3: Build'
              icon={IoBuildSharp}
              description='Upon approval of the design, the build
                stage begins. Implementing each part of a
                website varies in time, and a timeline will
                be drafted during the discover process.'
            />
            <ServiceItem
              title='Step 4: Release'
              icon={BsCloudUpload}
              description='This is the fun part! You get to see your
                site in its (nearly) final form. Any
                problems will be addressed and fixed, and
                after you are happy with it, the site will
                be deployed online.'
            />
          </SimpleGrid>
          <Flex align='center' justify='flex-end' py={8} px={2}>
            <Link href='/about/projects'>
              <Button colorScheme='purple' mx={4}>
                See some examples!
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box w={{ base: '100%', lg: '900px' }}>
          <Heading
            mb={8}
            mx={4}
            width='200px'
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, purple.300, blue.500)'
                : 'linear(to-r, purple.600, blue.600)'
            }
            bgClip='text'
          >
            Pricing
          </Heading>
          <SimpleGrid spacing='16px' p={2} columns={1}>
            <ServiceItem
              title='General JavaScript work'
              icon={DiJavascript1}
              description='This is the rate for any work done using JavaScript. This includes anything from large, enterprise web apps, to mobile apps.'
              price='Starting at $80 /hr'
            />
            <ServiceItem
              title='Mobile App'
              icon={AiOutlineMobile}
              description='Building Mobile apps is much more complex than websites/webapps. With that complexity, you will also see so much more reward. The majority of people browse the internet on their mobile devices, and even more would prefer an app specifically designed for their device to a website, which is usually designed for all devices at the same time. Reach your audience in a more meaningful way with a new mobile app.'
              price='Starting at $100 /hr'
            />
            <ServiceItem
              title='Static websites'
              icon={MdWeb}
              description='Static websites, like photography portfolios, landing pages, etc. generally take less time than a full web app, or mobile app. These simple sites can make a tremendous difference for the visibility of your brand.'
              price='Starting at $2000'
            />
          </SimpleGrid>
          <Flex align='center' justify='flex-end' py={8} px={2}>
            <Link href='/contact'>
              <Button colorScheme='purple' mx={4}>
                Ready to get Started?
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default About;
