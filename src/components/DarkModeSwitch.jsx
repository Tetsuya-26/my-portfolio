import React from 'react';
import { Switch, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack align='center' direction='row' className=" absolute top-6 right-7">
      <SunIcon color={useColorModeValue('yellow.500', 'gray.500')} />
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        size='md'
      />
      <MoonIcon color={useColorModeValue('gray.500', 'blue.400')} />
    </Stack>
  );
};

export default DarkModeSwitch;
