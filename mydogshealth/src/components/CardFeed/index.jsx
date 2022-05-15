import { Box, Text, Button, Flex } from '@chakra-ui/react';

const CardFeed = ({ title, text }) => {
  return (
    <Flex
      backgroundColor="#AC5858"
      width="485px"
      color="#FFFFFF"
      borderRadius="8px"
      margin="10px 0"
      justifyContent="space-around"
      padding="0.5rem"
    >
      <Box display="flex" flexDirection="column">
        <Text
          fontFamily="Inter"
          textAlign="center"
          fontSize="13px"
          fontWeight="700"
        >
          {title}
        </Text>
        <Text fontFamily="Poppins" width="387px" fontSize="10px">
          {text}
        </Text>
      </Box>
      <Flex alignItems="flex-end">
        <Button
          backgroundColor="transparent"
          color="#fff"
          size="xs"
          onClick={() => console.log('ADICIONAR FUNCAO AQUI!')}
          borderRadius="1000px"
          padding="0"
          bottom="20px"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0C9.55338 0.0039013 6.24905 1.37479 3.81192 3.81192C1.37479 6.24905 0.0039013 9.55338 0 13C0.00586707 16.446 1.37739 19.7492 3.81409 22.1859C6.25079 24.6226 9.55399 25.9941 13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V0ZM5.5 15.0791C5.10444 15.0791 4.71776 14.9618 4.38886 14.742C4.05996 14.5223 3.80362 14.2099 3.65224 13.8445C3.50087 13.479 3.46126 13.0769 3.53843 12.6889C3.6156 12.301 3.80608 11.9446 4.08579 11.6649C4.36549 11.3852 4.72186 11.1947 5.10982 11.1175C5.49778 11.0404 5.89991 11.08 6.26537 11.2313C6.63082 11.3827 6.94318 11.6391 7.16294 11.968C7.3827 12.2969 7.5 12.6835 7.5 13.0791C7.5 13.6095 7.28929 14.1182 6.91421 14.4933C6.53914 14.8684 6.03043 15.0791 5.5 15.0791ZM13 15.0791C12.6044 15.0791 12.2178 14.9618 11.8889 14.742C11.56 14.5223 11.3036 14.2099 11.1522 13.8445C11.0009 13.479 10.9613 13.0769 11.0384 12.6889C11.1156 12.301 11.3061 11.9446 11.5858 11.6649C11.8655 11.3852 12.2219 11.1947 12.6098 11.1175C12.9978 11.0404 13.3999 11.08 13.7654 11.2313C14.1308 11.3827 14.4432 11.6391 14.6629 11.968C14.8827 12.2969 15 12.6835 15 13.0791C15 13.6095 14.7893 14.1182 14.4142 14.4933C14.0391 14.8684 13.5304 15.0791 13 15.0791ZM20.5 15.0791C20.1044 15.0791 19.7178 14.9618 19.3889 14.742C19.06 14.5223 18.8036 14.2099 18.6522 13.8445C18.5009 13.479 18.4613 13.0769 18.5384 12.6889C18.6156 12.301 18.8061 11.9446 19.0858 11.6649C19.3655 11.3852 19.7219 11.1947 20.1098 11.1175C20.4978 11.0404 20.8999 11.08 21.2654 11.2313C21.6308 11.3827 21.9432 11.6391 22.1629 11.968C22.3827 12.2969 22.5 12.6835 22.5 13.0791C22.5 13.6095 22.2893 14.1182 21.9142 14.4933C21.5391 14.8684 21.0304 15.0791 20.5 15.0791Z"
              fill="#492E2E"
            />
          </svg>
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardFeed;
