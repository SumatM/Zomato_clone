import { Box } from "@chakra-ui/react";
import { Footer } from "../../../component/Footer/Footer";
import { HomeFootertop } from "./HomeFootertop";

export const HomeFooter = () => {
  return (
    <Box>
      <HomeFootertop />
      {/* main footer  */}
      <Footer />
    </Box>
  );
};
