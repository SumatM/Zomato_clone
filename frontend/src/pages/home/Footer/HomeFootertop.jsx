import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const HomeFootertop = () => {
  const [placeholderValue, setPlaceholderValue] = useState("Email");

  function isChecked(e) {
    const { checked, name } = e.target;
    if (name == "email") {
      setPlaceholderValue("Email");
    } else {
      setPlaceholderValue("Phone");
    }
  }

  return (
    <Box display="flex" flexDir={{base:'column',md:'row'}} mt="5rem" justifyContent="center"  bg="#F8F8F8"  p="2rem">
      <Box w={{base:'70vw',sm:'50vw',md:'25vw'}} textAlign="center"  m='auto'>
        <Image
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt="getApp"
        />
      </Box>
      <Box>
        <Box>
          <Heading size="xl" fontWeight="medium">
            Get the Aroma app
          </Heading>
          <Text mt="1.2rem" fontWeight="light" fontSize="1.1rem">
            We will send you a link, open it on your phone to download the app
          </Text>
        </Box>
        <Box display="flex" mt="1rem" p="10px" fontSize="1.1rem">
          <Box display="flex" alignItems="center">
            <input
              type="checkbox"
              checked={placeholderValue == "Email"}
              name="email"
              onChange={isChecked}
            />
            <Text p="0 5px">Email</Text>
          </Box>
          <Box ml="1.1rem" display="flex" alignItems="center">
            <input
              type="checkbox"
              checked={placeholderValue == "Phone"}
              name="phone"
              onChange={isChecked}
            />
            <Text p="0 5px">Phone</Text>
          </Box>
        </Box>
        <Box display="flex" alignItems={"center"} >
          <Input
            border="1px solid gray"
            w={{base:"100vw",sm:'80vw',md:"20vw"}}
            type="text"
            placeholder={placeholderValue}
            size="medium"
            fontSize="1.1rem"
            p={"0.4rem"}
          />
          <Button
            ml="1rem"
            padding='1.3rem'
            colorScheme="red"
            fontSize={{base:'70%',md:"1.1rem"}}
            fontWeight={"light"}
            size="sm"
            w={{base:'60vw',sm:"60vw",md:"auto"}}
          >
            Share App Link
          </Button>
        </Box>
        <Box mt="1.3rem">
          <Text fontSize="0.6rem" color="gray">
            Download app from{" "}
          </Text>
          <Box mt="1.2rem" display={"flex"}>
            <Box w={{base:'30vw',sm:"20vw",md:'10vw'}} _hover={{ cursor: "pointer" }}>
              <Image
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="appStore"
              />
            </Box>
            <Box w={{base:'30vw',sm:"20vw",md:'10vw'}} _hover={{ cursor: "pointer" }}  ml="1.2rem">
              <Image
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="playStore"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
