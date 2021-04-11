import { Box, Flex, Grid, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

import Hero from '../../components/Hero';
import work from '../../components/work/WorkData';

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Hero
        title='Industry Leading Technology'
        cta='Cutting through the noise with advanced technology, keeps your brand a step ahead.'
        btnText='Get in touch'
        ctaLink='/contact'
      />
      <Flex direction='column' align='center'>
        {work.map((el) => {
          const WorkCard = styled(Flex)`
            padding-top: 200px;
            background-image: url('/${el.image}.jpg');
            background-position: top;
            background-size: cover;
            margin: 16px;
            max-width: 1100px;
          `;
          return (
            <WorkCard key={el.id} direction='column' borderRadius='md'>
              <Box
                padding={16}
                bg={colorMode === 'dark' ? 'blackAlpha.800' : 'whiteAlpha.800'}
                justify='flex-end'
                align='flex-start'
                height='100%'
                width='100%'
              >
                <Heading>{el.title}</Heading>
                <Text>{el.description}</Text>
              </Box>
            </WorkCard>
          );
        })}
      </Flex>
    </>
  );
};

export default Projects;
