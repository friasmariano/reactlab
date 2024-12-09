import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack background="white" 
            width="40vw"
            borderRadius="xl" 
            align="left">
      <Image 
            src={imageSrc} 
            borderRadius="xl" />

      <Heading fontSize="xl"
               align="left" 
               color="black" 
               size="md" 
               padding="20px 0px 0px 20px"> 
      { 
        title 
      }
      </Heading>

      <Text color="gray.500" 
            textStyle="3xl" 
            paddingLeft="20px">
        {
          description
        }
      </Text>

      <HStack padding="20px 0px 20px 30px" color="black">
        <Text fontSize="md">
          See more
        </Text>

        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      
    </VStack>
  )
};

export default Card;
