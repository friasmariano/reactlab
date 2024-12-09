import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    bgGradient='linear(#1a3478, #0c142e)'
    w="100%"
    id="landing-section"
  >
    <VStack>
      <Avatar 
              size="xl" 
              src="https://i.pravatar.cc/150?img=7" 
              name="Pete photo"/>
      <Heading size="md">
        { greeting }
      </Heading>

      <div style={
        {
          width: '100px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          margin: '20px 0px 30px 0px'
        }
      }>

      </div>

      <Heading size="2xl">
        {
          bio1
        }
      </Heading>

      <Heading size="3xl">
        {
          bio2
        }
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
