import { Box, Text } from "@chakra-ui/react";
import BackgroundImg from "./BackgroundImg";
import HomveNav from "./homeNavBar";
import { MidInput } from "./MidInput";

const Home = () => {
  return (
    <Box>
      {/* Background Image  */}
      <Box pos="absolute" top={"0"} zIndex={"-1"}>
        <BackgroundImg />
      </Box>
      {/* navbar  */}
      <HomveNav/>
      {/* mid input  */}
      <MidInput/>
    </Box>
  );
};

export default Home;
