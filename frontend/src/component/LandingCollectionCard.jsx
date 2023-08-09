import { Box, Image, Text } from "@chakra-ui/react";
import { BiSolidRightArrow } from "react-icons/bi";

export const LandingCollectionCard = ({ img, title, places }) => {
  return (
    <Box
      pos="relative"
      borderRadius="15px"
      overflow="hidden"
      background="linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
      _hover={{ cursor: "pointer" }}
    >
      <Box pos="relative" h="350px" zIndex="-1">
        <Image
          position={"absolute"}
          h="350px"
          objectFit="cover"
          src={img}
          alt={title}
        />
      </Box>
      <Box bottom="3" left="3" color="white" w="100%" pos="absolute">
        <Text>{title}</Text>
        <Box display="flex" alignItems="center">
          <Text mr="5px">{places} Places </Text>
          <BiSolidRightArrow size="0.7rem" />
        </Box>
      </Box>
    </Box>
  );
};
