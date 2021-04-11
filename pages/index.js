import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Hero from '../components/Hero';
import HomepageWork from '../components/work/HomepageWork';
import work from '../components/work/WorkData';

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Hero
        title="Design, Develop, Engage"
        cta="Taking your brand to new levels through the use of cutting edge
            technology, industry leading libraries, and a versitile knowledge
            base."
        ctaLink="/about"
        btnText="Find out how it works!"
      />
      <Flex align="center" justify="center" marginTop="-1rem">
        <HStack
          marginTop="-3rem"
          height={{ base: '420px', md: '260px' }}
          overflowX="auto"
          overflowY="hidden"
          px={{ base: 0, md: 6 }}
          spacing={4}
        >
          {work.map((el, i) => {
            return <HomepageWork key={`${el.id}:${i}`} work={el} />;
          })}
        </HStack>
      </Flex>
      <Flex my={8} direction="column" align="center" justify="flex-start">
        <Container my={8}>
          <Heading
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, purple.300, blue.500)'
                : 'linear(to-r, purple.600, blue.600)'
            }
            bgClip="text"
          >
            Full Stack JavaScript
          </Heading>
          <Text paddingTop={4} lineHeight={1.6}>
            JavaScript has quickly become the world leader of your online
            experience. Nearly every website currently uses it to improve your
            experience, in fact, this website was built using only JavaScript.
            The key factors that bring this incredible scripting language are
            its vesitility and strength. Most modern devices can use JavaScript,
            which gives us the ability to reach nearly everyone. Full Stack is
            the term used for apps like Facebook, and Amazon who use a front end
            (what you see), and a back end (what controls the application).
            Basically, if you can log in to the application, or change it in any
            way, it is considered "full stack". This is very useful if you need
            a client portal, staff portal, any sort of analytics, or ecommerce.
          </Text>
          <Text paddingTop={4} lineHeight={1.6}>
            In Modern business, applications and websites like this are
            important, and give you an edge on your competition wiht the
            opportunity to take payments, build custom client databases, and
            track your business performance.
          </Text>
          <Link href="/about">
            <Button colorScheme="purple" my={4}>
              Find out more!
            </Button>
          </Link>
        </Container>
        <Container my={8}>
          <Heading
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, purple.300, blue.500)'
                : 'linear(to-r, purple.600, blue.600)'
            }
            bgClip="text"
          >
            Native Mobile Apps
          </Heading>
          <Text paddingTop={4} lineHeight={1.6}>
            React Native is the name of a technology developed by Facebook to
            give developers the ability to make full mobile applications for
            both Android and Apple devices. The developers at Facebook used this
            technology to build the Facebook app, so you know it is extremely
            robust. We use this technology to provide you with an edge on the
            traditional websites you see today.
          </Text>
          <Text paddingTop={4} lineHeight={1.6}>
            Mobile apps are quite important, and give you an edge on your
            competition. Most people tend to go nowhere withouth their phones,
            this means your business is just a tap away from so many people at
            any hour of the day.
          </Text>
          <Link href="/about">
            <Button colorScheme="purple" my={4}>
              Find out more!
            </Button>
          </Link>
        </Container>
      </Flex>
    </>
  );
};

export default Home;
