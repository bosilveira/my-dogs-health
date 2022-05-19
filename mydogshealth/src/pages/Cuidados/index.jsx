import { Flex, Box } from '@chakra-ui/react';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import MenuDashboard from '../../components/MenuDashboard';
import TableDog from '../../components/TableDog';

const Cuidados = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100vh">
      <Box>
        <HeaderDashBoard />
      </Box>

      <Box display="flex" flexDir="row" width="80%" margin="0 auto">
        <TableDog />
      </Box>
    </Flex>
  );
};
export default Cuidados;
