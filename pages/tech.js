import {
  Circle,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';
import Webflow from '../public/webflow.svg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';

const TechDescription = ({ icon, heading, text }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex align="flex-start" justify="center" maxW="700px" my={8}>
        <Circle
          size={10}
          mx={{ base: 0, md: 8 }}
          bg={colorMode === 'dark' ? 'purple.200' : 'purple.500'}
          color={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'}
        >
          <Icon
            fill={colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900'}
            boxSize="1.5rem"
            as={icon}
          />
        </Circle>
        <Container>
          <Heading
            width="225px"
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, purple.300, blue.500)'
                : 'linear(to-r, purple.600, blue.600)'
            }
            bgClip="text"
          >
            {heading}
          </Heading>
          <Text>{text}</Text>
        </Container>
      </Flex>
    </>
  );
};

const Technology = () => {
  return (
    <>
      <Hero
        title="The latest technology, at the tips of your fingers"
        cta="Developing a beautiful experience for you and your clients via the latest tech developed by Facebook and Google"
        ctaLink="/contact"
        btnText="Schedule a meeting now!"
      />
      <Flex align="center" justify="center">
        <SimpleGrid
          spacing="36px"
          columns={{ base: 1, '2xl': 2 }}
          align="flex-start"
          justify="center"
          p={2}
        >
          <TechDescription
            icon={FaReact}
            heading="React js"
            text="React is a javascript library developed by Facebook in order to
          simplify the process of building full scale web apps. It combines
          the three main elements of web development, ie. HTML, CSS, and JavaScript
          to create a fully scaleable, quick to build, and highly responsive
          website."
          />
          <TechDescription
            icon={FaReact}
            heading="React Native"
            text="Alongside React js, React Native is built for the mobile world. Using this highly advanced technology, we can build both native IOS and android apps. This platform allows flexibility, and control over the entire app build process. We test the apps on real devices, not simulated ones, so that you can be absolutely sure that your app will look right, and more importantly, be fully functional on nearly every screen."
          />
          <TechDescription
            icon={IoLogoFirebase}
            heading="Firebase"
            text="Google's Firebase is an absolute necessity in modern day web and mobile apps. Not only does it provide you a way to securely log clients in to their accounts, it allows you to track their activity, and fully connects to Google Analytics so you can see what is working, and what isn't. This platform is easy to use, and with it being Google, can be accessed from anywhere. The best part is that it is fully scaleable!"
          />
          <TechDescription
            icon={DiMongodb}
            heading="Mongo DB"
            text="Mongo DB is the top Data storage server on the web. They are versatile, fast, and easy to use. They scale with your app, so there is no downtime, and the data transfer is so fast that you wouldn't even guess that you are pulling it from a different server. Whether companies are using their own servers, or the Mongo DB servers, the build is the same, which means that if you scale to the point you need your own servers, your app doesn't need to be completely rebuilt."
          />
          <TechDescription
            icon={FaNodeJs}
            heading="Node JS"
            text="Node JS is beginning to gain traction, with each new update to the JS language, Node becomes more powerful, it is used to build the backend (login page, ecommerce, tracking, analytics, etc.) of webapps. This streamlined framework is fast, easy to use, and maintains the useability of a full scale web app."
          />
          <TechDescription
            icon={Webflow}
            heading="Webflow"
            text="Think of Webflow like Squarespace, Wix, or Wordpress, but built for developers. It is a tool that you can use to design layouts, color schemes, and other branding features, and then add your own scripts to make it work as you need it to. Wordpress can be slow and fragile, meaning there is so much downtime, and your site has to be repaired constantly. SquareSpace and Wix have very limited functionality, and struggle to keep up with your brand's growth. But with webflow, all you are doing is building a layout, and adding what you need later, which makes it the best tool for building static sites. It's even used by companies like Zendesk, Dell, and Upwork!"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Technology;
