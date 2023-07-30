import { Box, Text } from "@chakra-ui/react";
import {TbDeviceMobile} from 'react-icons/tb'

const HomveNav = () => {
  return (
    <Box color="white" p='0.6rem 4rem' maxW='100%' fontSize='0.8rem' fontFamily={"Roboto"}>
    <Box display={'flex'} justifyContent="space-between" alignContent='center'>
      <Box display={'flex'} alignItems='center'>
      <Box>
      <TbDeviceMobile size="10px"/>
      </Box>
        <Box>
        <Text >Get th App</Text>
        </Box>
      </Box>

      <Box display={'flex'} w='50%' justifyContent={'space-between'}  >
        <p>Investor Relations</p>
        <p>Add Restaurant</p>
        <p>Log in</p>
        <p>Sign up</p>
      </Box>
    </Box>
  </Box>
  )
}

export default HomveNav