import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { BsChevronCompactDown, BsGlobe } from "react-icons/bs";
import IndianFlag from "../../assets/india.svg";

export const ZomatoBox1 = () => {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      mt="25px"
      alignItems="center"
      p=" 0 10px"
    >
      <Box>
        <Text
          m="0"
          letterSpacing="0.2rem"
          fontSize={"2rem"}
          fontFamily={"REM"}
          fontWeight="bolder"
        >
          AROMA
        </Text>
      </Box>

      <Box
        display="flex"
        alignItems={"center"}
        mt={{ base: "1rem", sm: "0" }}
        p={{ base: "10px", sm: "0" }}
      >
        <Box
          display="flex"
          bg="white"
          p="5px"
          border="1px solid gray"
          borderRadius="4px"
          _hover={{ cursor: "pointer" }}
        >
          <Image w="1.5rem" src={IndianFlag} alt="indianFlag" />
          <Box m="0 3px">
            <Text fontSize="0.8rem">India</Text>
          </Box>
          <BsChevronCompactDown />
        </Box>
        <Box
          display="flex"
          bg="white"
          p="5px"
          border="1px solid gray"
          borderRadius="4px"
          alignItems={"center"}
          ml="15px"
          _hover={{ cursor: "pointer" }}
        >
          <BsGlobe />
          <Box m="0 3px">
            <Text fontSize="0.8rem">English</Text>
          </Box>
          <BsChevronCompactDown />
        </Box>
      </Box>
    </Box>
  );
};
