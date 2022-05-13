import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../src/theme/index';
import Routes from './routes';
// import DashBoard from './components/Contatos';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="100%"
        justifyContent="center"
        height="100%"
        backgroundColor="#FED7D7"
      >
        <Routes />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
