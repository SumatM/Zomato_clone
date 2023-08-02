import { Box, Grid, Text, Link, Image } from "@chakra-ui/react";
import styles from "./FooterBox2.module.css";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoFacebookSquare,
} from "react-icons/bi";

export const FooterBox2 = () => {
  return (
    <Box mt="25px">
      <Grid className={styles.container}>
        {/* about zomato  */}
        <Box className={styles.footerSections} fontSize="0.7rem" color="gray">
          <Text letterSpacing="1px" fontWeight="500" color="black">
            ABOUT ZOMATO
          </Text>
          <Text _hover={{ cursor: "pointer" }}>Who We Are</Text>
          <Text _hover={{ cursor: "pointer" }}>Blog</Text>
          <Text _hover={{ cursor: "pointer" }}>Work With Us</Text>
          <Text _hover={{ cursor: "pointer" }}>Investor Relations</Text>
          <Text _hover={{ cursor: "pointer" }}>Report Fraud</Text>
          <Text _hover={{ cursor: "pointer" }}>Contact Us</Text>
        </Box>
        {/* zomaverse  */}
        <Box className={styles.footerSections} fontSize="0.7rem" color="gray">
          <Text fontWeight="500" letterSpacing="1px" color="black">
            ZOMVERSE
          </Text>
          <Text _hover={{ cursor: "pointer" }}>Zomato</Text>
          <Text _hover={{ cursor: "pointer" }}>Blinkit</Text>
          <Text _hover={{ cursor: "pointer" }}>Feeding India</Text>
          <Text _hover={{ cursor: "pointer" }}>Hyperpure</Text>
          <Text _hover={{ cursor: "pointer" }}>Zomaland</Text>
        </Box>
        {/* for restaurant and enterprises  */}
        <Box className={styles.footerSections} fontSize="0.7rem" color="gray">
          <Text fontWeight="500" letterSpacing="1px" color="black">
            FOR RESTAURANTS
          </Text>
          <Text _hover={{ cursor: "pointer" }}>Partner With Us</Text>
          <Text _hover={{ cursor: "pointer" }}>Apps For You</Text>
          <Text
            className={styles.footerSection3}
            fontWeight="500"
            letterSpacing="1px"
            color="black"
          >
            FOR ENTERPRISES
          </Text>
          <Text _hover={{ cursor: "pointer" }}>Zomato For Enterprise</Text>
        </Box>
        {/* learn more  */}

        <Box className={styles.footerSections} fontSize="0.7rem" color="gray">
          <Text fontWeight="500" letterSpacing="1px" color="black">
            LEARN MORE
          </Text>
          <Text _hover={{ cursor: "pointer" }}>Privacy</Text>
          <Text _hover={{ cursor: "pointer" }}>Security</Text>
          <Text _hover={{ cursor: "pointer" }}>Terms</Text>
          <Text _hover={{ cursor: "pointer" }}>Sitemap</Text>
        </Box>
        {/* social links  */}

        <Box className={styles.footerSections} fontSize="0.7rem" color="gray">
          <Text fontWeight="500" letterSpacing="1px" color="black">
            LEARN MORE
          </Text>
          <Box display="flex" className={styles.socialIcons}>
            <Box>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/sumat-mallick-65b966227/"
              >
                <BiLogoLinkedinSquare />
              </Link>
            </Box>
            <Box>
              <BiLogoInstagramAlt />
            </Box>
            <Box>
              <BiLogoTwitter />
            </Box>
            <Box>
              <BiLogoYoutube />
            </Box>
            <Box>
              <BiLogoFacebookSquare />
            </Box>
          </Box>
          <Box className={styles.downloadOption}>
            {/* app store  */}
            <Box w="10vw" _hover={{ cursor: "pointer" }}>
              <Image
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="appStore"
              />
            </Box>
            {/* playStore */}
            <Box w="10vw" _hover={{ cursor: "pointer" }}>
              <Image
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="playStore"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
