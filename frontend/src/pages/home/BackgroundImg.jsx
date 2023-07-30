import { Box } from '@chakra-ui/react'
import backgroundImg from '/homeBackground.avif'
    
    const BackgroundImg = () => {
      return (
        <Box >
            <img style={{width:'100vw',height:'75vh',objectFit:'cover'}} src={backgroundImg} alt="homeCoverImage"/>
        </Box>
      )
    }
    
    export default BackgroundImg