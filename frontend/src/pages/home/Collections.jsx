import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {BiSolidRightArrow} from 'react-icons/bi'
import { landingCollection } from "../../utils/landingPageCollection";
import { LandingCollectionCard } from "../../component/LandingCollectionCard";

export const Collections = () => {
    const currPlace = useSelector((s) => s.locationReducer).city;
  return (
    <Box >
      <Box w='100%' textAlign="left" mt = '35px'>
        <Box>
          <Heading fontWeight='500'>Collections</Heading>
          <Box display='flex' justifyContent={'space-between'}  mt='20px' fontSize='1.1rem'>
            <Text>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              {currPlace}, based on trends
            </Text>
            <Box display='flex' alignItems={'center'} color={'red'}>
            <Text mr='5px' _hover={{cursor:'pointer'}}>
                All Collection in {currPlace} 
            </Text>
            <BiSolidRightArrow/>
            </Box>
          </Box>
        </Box>
        {/* box 2  */}
        <Box display={'grid'} gridTemplateColumns={'repeat(4,1fr)'} gridGap='2rem' mt='2rem'>
            {landingCollection?.map((item)=>{
                return <LandingCollectionCard {...item}/>
            })}
        </Box>
      </Box>
    </Box>
  );
};
