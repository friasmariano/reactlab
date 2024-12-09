import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack background="white" 
            width="40vw"
            borderRadius="10" 
            align="left">
      <Image src={imageSrc} borderRadius="10" />

      <Heading align="left" 
               color="black" 
               size="md" 
               padding="20px 0px 0px 30px"> 
      { 
        title 
      }
      </Heading>

      <Text color="gray" 
            textStyle="3xl" 
            padding="10px 10px 0px 30px">
        {
          description
        }
      </Text>

      <HStack color="black" 
              padding="20px 0px 20px 30px">
        <Text fontSize="md" fontWeight="normal">
          See more
        </Text>

        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
      
    </VStack>
  )
};

export default Card;
