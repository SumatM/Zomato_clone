import { Box, Input, Text } from "@chakra-ui/react";
import { current } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import {useSelector} from 'react-redux'

export const InputBox = ({ value }) => {
  const [inputflag, setinputflag] = useState(true);
  const cityName = useSelector((s)=> s.locationReducer).city;

  return (
    <Box>
      <Box display="flex" justifyItems='center' alignItems='center'>
        <Box color='black'>
          <Input
            size='xs'
            onFocus={() => {
              setinputflag(false);
            }}
            onBlur={() => {
              setinputflag(true);
            }}
            outline="none"
            border="none"
            style={{ width: "100%" }}
            placeholder={cityName || 'Find Location'}
          />
        </Box>
        <Box color='black'>{inputflag ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}</Box>
      </Box>
      {!inputflag ?    <Box
        pos="absolute"
        bg="white"
        mt="0.8rem"
        borderRadius={"8px"}
        p="0.8rem"
        display="flex"
        _hover={{cursor:'pointer'}}
      >
        <Box p="0" pr="0.4rem">
          <BiCurrentLocation color="#EF4F5F" />
        </Box>
        <Box>
          <Text m="0" fontSize="0.8rem" color="#EF4F5F">
            Detect current location
          </Text>
          <Text m="0" fontSize="0.5rem" color="gray">
            Using GPS
          </Text>
        </Box>
      </Box> : null}
    </Box>
  );
};
