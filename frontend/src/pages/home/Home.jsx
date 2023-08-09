import { Box, Text } from "@chakra-ui/react";
import BackgroundImg from "./BackgroundImg";
import HomveNav from "./homeNavBar";
import { MidInput } from "./MidInput";
import { landingCard } from "../../utils/landingPageCards";
import { LandingPageCards } from "../../component/LandingPageCards";
import { HomeFooter } from "./Footer/HomeFooter";
import { Collections } from "./Collections";

const Home = () => {
  return (
    <Box display="flex" flexDir="column" alignItems={"center"} pb="1.5rem">
      {/* Background Image  */}
      <Box pos="absolute" top={"0"} zIndex={"-1"}>
        <BackgroundImg />
      </Box>
      {/* navbar  */}
      <HomveNav />
      {/* mid input  */}
      <MidInput />
      {/* part 2  */}
      <Box p="15px" maxW="90vw" m='auto' mt='5rem'>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          mt="7rem"
          gap="25px"
        >
          {landingCard?.map((item, ind) => {
            return <LandingPageCards key={ind} {...item} />;
          })}
        </Box>
        <Collections/>
      {/* footer  */}
      <HomeFooter />
      </Box>
 
    </Box>
  );
};

export default Home;
