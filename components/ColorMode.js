import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

function ColorMode({ top, right }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const ColorModeIcon = styled(IconButton)`
    position: absolute;
    right: ${right}px;
    top: ${top}px;
  `;

  return (
    <ColorModeIcon
      onClick={toggleColorMode}
      colorScheme='purple'
      isRound
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}

export default ColorMode;
