import { Box, Input, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import useGetCityName from "../../hooks/useGetCityName";
export const MidInput = () => {
  const { latitude, longitude, placeName, error, loading } = useGetCityName();



  return (
    <Box
      color="white"
      margin="auto"
      display="flex"
      flexDir={"column"}
      alignItems={"center"}
    >
      <Box textAlign={"center"}>
        <Text
          m="0"
          mt="3rem"
          letterSpacing="3px"
          fontSize={"4rem"}
          fontFamily={"REM"}
        >
          AROMA
        </Text>
        <Text fontSize="1.5rem">
          Discover the best food & drinks in function getlocation()
        </Text>
      </Box>
      <Box display="flex" alignItems="center" bg="white">
        {/* input location box  */}
        <Box display="flex">
          <Box>
            <MdLocationPin color="#FF7E8B" />
          </Box>
          <Box color="gray">location</Box>
          <Box>
            <AiOutlineCaretDown color="black" />
            <AiOutlineCaretUp color="gray" />
          </Box>
        </Box>
        <Box p=" 0.1rem 0.5rem">
          <CiSearch size="1.3rem" color="gray" />
        </Box>
        <Box>
          <Input
            placeholder=" Search for restaurant,cuisine or a dish"
            p="0.5rem"
            w="30vw"
          />
        </Box>
      </Box>
    </Box>
  );
};
