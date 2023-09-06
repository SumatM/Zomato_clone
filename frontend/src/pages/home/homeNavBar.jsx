import { Box, Text } from "@chakra-ui/react";
import {TbDeviceMobile} from 'react-icons/tb'

const HomveNav = () => {
  return (
    <Box color="white" p='0.6rem 4rem' width='100vw' fontSize='1.1rem' display={{base:'none',md:'block'}}>
    <Box display={'flex'}  justifyContent="space-between" alignContent='center' >
      <Box display={'flex'} alignItems='center' _hover={{cursor:'pointer'}}>
      <Box>
      <TbDeviceMobile size="20px"/>
      </Box>
        <Box>
        <Text >Get th App</Text>
        </Box>
      </Box>

      <Box display={'flex'} w='50%' justifyContent={'space-between'}  >
        <Text _hover={{cursor:'pointer'}}>Investor Relations</Text>
        <Text _hover={{cursor:'pointer'}}>Add Restaurant</Text>
        <Text _hover={{cursor:'pointer'}}>Log in</Text>
        <Text _hover={{cursor:'pointer'}}>Sign up</Text>
      </Box>
    </Box>
  </Box>
  )
}

export default HomveNav