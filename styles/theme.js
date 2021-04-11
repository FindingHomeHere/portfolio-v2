import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { ArrowForwardIcon } from '@chakra-ui/icons';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'gray.900')(props),
    },
  }),
  components: {
    Heading: {
      variants: {
        grad: (props) => ({
          bgGradient: mode(
            'linear(to-r, purple.600, blue.600)',
            'linear(to-r, purple.300, blue.500)'
          )(props),
          bgClip: 'text',
        }),
      },
    },
    Button: {
      variants: {
        arrow: {
          px: '1.5rem',
          '&::after': {
            iconRight: <ArrowForwardIcon />,
          },
        },
      },
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
