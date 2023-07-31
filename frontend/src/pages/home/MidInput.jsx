import { Box, Input, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";

import useGetCityName from "../../hooks/useGetCityName";
import { useEffect, useState } from "react";
import { InputBox } from "../../component/InputLocationBox";
import { useDispatch, useSelector } from "react-redux";
import { setCityName } from "../../redux/locationReducer";

export const MidInput = () => {
  const { latitude, longitude, placeName, error, loading } = useGetCityName();

  const currPlace = useSelector((s) => s.locationReducer).city;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCityName(placeName?.split(",")[2].split("-")[0]));
  }, [latitude]);

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
          mt="2rem"
          letterSpacing="0.2rem"
          fontSize={"4rem"}
          fontFamily={"REM"}
        >
          AROMA
        </Text>
        <Text fontSize="1.5rem" mt="-1rem" letterSpacing="2px">
          Discover the best food & drinks in{" "}
          <Text fontSize="2rem" m="0" display="inline">
            {currPlace || "Your Locality"}
          </Text>
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        bg="white"
        p="0.5rem"
        borderRadius="8px"
        w='55vw'
      >
        {/* input location box  */}
        <Box display="flex" alignItems="center">
          <Box>
            <MdLocationPin color="#FF7E8B" />
          </Box>
          {/* input box  */}
          <InputBox />
        </Box>

        <Box bg="white" display="flex" ml="1rem" w='55vw'>
          <Box p="0.1rem 0.5rem">
            <CiSearch size="1.3rem" color="gray" />
          </Box>
          <Input
            size="xs"
            border="none"
            outline="none"
            placeholder=" Search for restaurant,cuisine or a dish"
            p="0.5rem"
            fontSize="0.7rem"
            letterSpacing="0.1rem"
          />
        </Box>
      </Box>
    </Box>
  );
};
