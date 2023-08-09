import { Box, Text } from "@chakra-ui/react";
import { ZomatoBox1 } from "./ZomatoBox1";
import { FooterBox2 } from "./FooterBox2";

export const Footer = () => {
  return (
    <Box bg="#F8F8F8" p='1rem'>
      {/* box 1 */}
      <ZomatoBox1 />
      {/* box 2 */}
      <FooterBox2 />
      {/* box 3 */}
      <Box
        pt="20px"
        mt="20px"
        borderTop="1px solid gray"
        fontSize="0.7rem"
        color="gray"
      >
        <Text>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Aroma™ Ltd. All
          rights reserved.
        </Text>
      </Box>
    </Box>
  );
};
