import React, { useState } from 'react';
import Link from 'next/link';
import {
  Flex,
  Heading,
  useColorMode,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { useTrail, animated as Anim } from 'react-spring';
import styled from '@emotion/styled';
import { CloseIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';
import { withUserAgent } from 'next-useragent';

import ColorMode from './ColorMode';

const navItems = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/tech', title: 'Technology' },
  { link: '/contact', title: 'Contact' },
];
const config = { mass: 1, tension: 2500, friction: 250 };

const Navbar = (props) => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const trail = useTrail(navItems.length, {
    config,
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 60,
    height: isOpen ? 80 : 0,
    from: { opacity: 0, x: 50, height: 0 },
  });
  const { ua } = props;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const MenuButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    right: 16px;
    transform: rotate(${isOpen ? '0' : '-45deg'});
  `;

  const SocialButton = styled(IconButton)`
    position: absolute;
    top: 128px;
    right: 16px;
  `;

  const FirefoxColor = () => {
    if (ua) {
      if (ua.browser === 'Firefox') {
        return `${
          ua.browser === 'Firefox' &&
          `background-color: ${colorMode === 'dark' ? '#171923;' : '#EDF2F7'}`
        }`;
      }
    }
  };

  const NavFloat = styled(Flex)`
    position: fixed;
    top: 0;
    flex-direction: column;
    width: 100%;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    height: ${isOpen ? '400px' : '80px'};
    z-index: 100;
    box-sizing: border-box;
    ${isOpen && 'border-bottom: 1px solid #4299E1;'}
    ${ua && FirefoxColor}
  `;

  const MenuContainer = styled(Flex)`
    padding-top: 24px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  `;

  const MenuBackground = styled(Flex)`
    height: 100vh;
    width: 100vw;
    z-index: 98;
    position: fixed;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    display: block;
    cursor: pointer;
  `;

  const NavItems = styled(Text)`
    text-decoration: none;
    line-height: 2;
    font-size: 2rem;
    &:hover: {
      text-decoration: none;
      // &:after: {
      // }
    }
  `;

  return (
    <Flex mx="auto" width="100vw">
      <NavFloat p={4}>
        <Link href="/">
          <Heading
            w="15.2rem"
            _hover={{
              bgGradient: `${
                colorMode === 'dark'
                  ? 'linear(to-r, purple.300, blue.500)'
                  : 'linear(to-r, purple.600, blue.600)'
              }`,
              bgClip: 'text',
              cursor: 'pointer',
              transition: 'all 0.45s ease',
            }}
          >
            Isaac Johnson
          </Heading>
        </Link>
        <MenuButton
          isRound
          _active={{
            transition: 'all 0.45s ease',
            transform: 'rotate(-45deg)',
          }}
          colorScheme="purple"
          onClick={handleMenuClick}
          icon={<CloseIcon />}
        />
        {isOpen && (
          <>
            <MenuContainer>
              {trail.map(({ x, height, ...rest }, i) => (
                <Anim.div
                  key={`${navItems[i]}:${i}`}
                  style={{
                    ...rest,

                    transform: x.to((x) => `translate3d(${16 * x}px, 0, 0)`),
                  }}
                >
                  <Link href={navItems[i].link} passHref>
                    <NavItems
                      onClick={handleMenuClick}
                      _hover={{
                        bgGradient: `${
                          colorMode === 'dark'
                            ? 'linear(to-r, purple.300, blue.500)'
                            : 'linear(to-r, purple.600, blue.600)'
                        }`,
                        bgClip: 'text',
                        cursor: 'pointer',
                        transform: 'translateY(-10px)',
                        transition: 'all 0.45s ease',
                      }}
                    >
                      {navItems[i].title}
                    </NavItems>
                  </Link>
                </Anim.div>
              ))}
              <ColorMode top={72} right={16} />
              <Link href="https://github.com/FindingHomeHere">
                <SocialButton
                  colorScheme="purple"
                  isRound
                  icon={<AiFillGithub />}
                />
              </Link>
            </MenuContainer>
          </>
        )}
      </NavFloat>
      {isOpen && <MenuBackground onClick={handleMenuClick} />}
    </Flex>
  );
};

export async function getStaticProps(ctx) {
  console.log(`context: ${ctx}`);
  return {
    props: {
      ua: ctx.ua,
    },
  };
}

export default withUserAgent(Navbar);
