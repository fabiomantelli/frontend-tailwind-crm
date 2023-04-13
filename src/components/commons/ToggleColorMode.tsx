import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Open Menu"
      size="xl"
      bg="none"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={() => toggleColorMode()}
      colorScheme="#F9F5EE"
      color="color.600"
    />
  );
};

export default ToggleColorMode;
