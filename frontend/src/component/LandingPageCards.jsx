import { Box, Image, Text } from "@chakra-ui/react"
import styles from './landingpagecard.module.css'

export const LandingPageCards = ({img,heading,line}) => {
  return (
    <Box className={styles.landingCard}>
      <Box borderRadius='10px' border='1px solid #616A6B' h='40vh'   overflow='hidden'background={"white"}>
        <Box h='60%'  >
            <Image w='100%' h='100%' align={'center'} fit='cover' src={img} alt="" loading="lazy"/>
        </Box>
        <Box p='1rem'>
            <Text mt='0' fontSize='0.9rem' fontWeight='500'>{heading}</Text>
            <Text fontSize='0.8rem'>{line}</Text>
        </Box>
    </Box>
    </Box>
  )
}
