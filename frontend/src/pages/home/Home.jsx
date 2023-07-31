import { Box, Text } from "@chakra-ui/react";
import BackgroundImg from "./BackgroundImg";
import HomveNav from "./homeNavBar";
import { MidInput } from "./MidInput";
import { landingCard } from "../../utils/landingPageCards";
import { LandingPageCards } from "../../component/LandingPageCards";


const Home = () => {
  return (
    <Box display='flex' flexDir='column'  alignItems={'center'} pb='10rem'>
      {/* Background Image  */}
      <Box pos="absolute" top={"0"} zIndex={"-1"}>
        <BackgroundImg />
      </Box>
      {/* navbar  */}
      <HomveNav />
      {/* mid input  */}
      <MidInput />
      {/* cards  */}
      <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} mt='7rem' gap='25px' w='80vw' >
      {landingCard?.map((item,ind) => {
        return <LandingPageCards key={ind} {...item} />;
      })}
      </Box>
    
    </Box>
  );
};

export default Home;
