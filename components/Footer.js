import {
  Container,
  Flex,
  useColorMode,
  Stack,
  Text,
  Spacer,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';

import Logo from '../public/ijlogo.svg';

const Footer = () => {
  const { colorMode } = useColorMode();
  const LogoCover = styled(Logo)`
    height: 140px;
    width: 140px;
    padding: 12px;
    fill: rgba(255, 255, 255, 0.82);
  `;

  return (
    <>
      <Flex
        borderTopWidth={1}
        bg="purple.900"
        align="center"
        justify="center"
        direction="column"
        p={{ base: 0, md: 4 }}
      >
        <Flex
          align="center"
          justify="space-evenly"
          w={{ base: '100vw', md: '600px' }}
        >
          <Link passHref href="/">
            <LogoCover />
          </Link>
          <Stack
            my={2}
            spacing={2}
            fontSize="sm"
            direction="column"
            display={{ base: 'none', md: 'flex' }}
            color="whiteAlpha.900"
          >
            <Link passHref href="/">
              <a>Home</a>
            </Link>
            <Link passHref href="/contact">
              <a>Contact</a>
            </Link>
            <Link passHref href="/tech">
              <a>Technology</a>
            </Link>
            <Link passHref href="/about/projects">
              <a>Projects</a>
            </Link>
          </Stack>
          <Flex direction="column">
            <Link passHref href="mailto:hello@isaacjohnson.dev">
              <Text color="whiteAlpha.900" as="a">
                hello@isaacjohnson.dev
              </Text>
            </Link>

            <Text fontSize="sm" color="whiteAlpha.900">
              &copy; Isaac Johnson, LLC. 2021
            </Text>
            <HStack>
              <Link href="https://github.com/FindingHomeHere">
                <IconButton
                  colorScheme="purple"
                  isRound
                  size="sm"
                  m={2}
                  icon={<AiFillGithub />}
                />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
