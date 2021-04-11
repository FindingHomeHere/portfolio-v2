import {
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

const HomepageWork = (work) => {
  const { colorMode } = useColorMode();
  const { title, description, link, image } = work.work;

  const WorkImg = styled(Flex)`
    background-image: url('/${image}.jpg');
    background-position: top;
    background-size: cover;
  `;

  const WorkTitle = styled(GridItem)`
    font-weight: bold;
  `;

  const WorkDescription = styled(GridItem)`
    font-size: 14px;
  `;

  return (
    <>
      <Flex
        minW={{ base: '82vw', md: '600px' }}
        maxW='700px'
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
        <Grid
          h={{ base: '350px', md: '200px' }}
          w='100%'
          templateRows='repeat(8, 1fr)'
          templateColumns='repeat(16, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={{ base: 4, md: 8 }} colSpan={{ base: 16, md: 8 }}>
            <Link href={link}>
              <WorkImg cursor='pointer' height='100%' width='100%' />
            </Link>
          </GridItem>
          <WorkTitle rowSpan={1} colSpan={{ base: 16, md: 8 }}>
            <Link href={link}>
              <Heading size='md' cursor='pointer'>
                {title}
              </Heading>
            </Link>
          </WorkTitle>
          <WorkDescription
            rowSpan={{ base: 3, md: 7 }}
            overflowY='auto'
            colSpan={{ base: 16, md: 8 }}
          >
            <Text>{description}</Text>
          </WorkDescription>
        </Grid>
      </Flex>
    </>
  );
};

export default HomepageWork;
