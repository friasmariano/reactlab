import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const handleClick = (anchor) => (e) => {
  e.preventDefault();

  const id = `${anchor}`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [translateYPos, setTranslateYPos] = useState("");
  const [isDescending, setIsDescending] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollPos(window.scrollY);

      setTimeout(() => {
        setCurrentScrollPos(window.scrollY);
      }, 250);
      
      if (currentScrollPos < prevScrollPos) {
        setTranslateYPos('-200px');
        setIsDescending(false);
      } else {
        setTranslateYPos('0px');
        setIsDescending(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    
  }, [window.scrollY])

  return (
    <Box
      position="fixed"
      top={0}
      
      left={0}
      right={0}
      // translate="auto"
      // translateY="-10"
      // transitionProperty="transform"
      // transitionDuration=".3s"
      // transitionTimingFunction="ease-in-out"
      bgGradient='linear(#292929, #252525)'
      zIndex={20}
      className={isDescending ? 'slideDown': 'fadeOut' }
      style={
        {
          translate: `0px ${translateYPos}`,
          
        }
      }
      >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((socialLink) => {
              return (
                <a key={socialLink.id} href={socialLink.url} target="_blank">
                  <FontAwesomeIcon icon={socialLink.icon} size="2x" style={ {marginRight: "20px"} } />
                </a>
              )
            })
              
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contact-me"
                 onClick={
                  handleClick('contact-me')
                }>Contact Me</a>
              <a href="#projects" 
                 onClick={ 
                  handleClick('projects') 
                }>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
