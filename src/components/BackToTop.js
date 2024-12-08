import { useState, useEffect } from "react";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function BackToTop () {
    const [isVisible, setIsVisible] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (anchor) => (e) => {
        e.preventDefault();

        const id = `${anchor}`;
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }
    }

    useEffect(() => {
        const landingSection = document.getElementById('landing-section');
        const landingSecPosition = landingSection.getBoundingClientRect();

        if (landingSecPosition.top >= scrollPosition) {
            setIsVisible(true)
        } else setIsVisible(false)

    }, [window.scrollY])

    useEffect(() => {
        const handleScrollYPosition = () => {
            setScrollPosition(window.scrollY)
        };

        window.addEventListener("scroll", handleScrollYPosition);

        return () => {
            window.removeEventListener("scroll", handleScrollYPosition);
        };

    }, [window.scrollY])

    return(
        <Box 
            background="rgba(255, 255, 255, 0)" 
            color="rgba(0, 0, 0, 0.5)" 
            width="80px"
            top="50vh"
            right="0"
            borderRadius="20%"
            padding="5px"
            position="fixed"
            marginRight="5px"
            zIndex={30}>
            <Flex align="center" 
                  justifyContent="center" 
                  flexDirection="column" 
                  alignItems="center">
                { !isVisible 
                    &&
                    <Tooltip label="Back To Top">
                        <a href="#landing-section"
                        onClick={
                            handleScroll('landing-section')
                            }>
                            <FontAwesomeIcon className="backToTop" icon={faArrowUpFromBracket} size="3x" />
                        </a>
                    </Tooltip>
                }
                
            </Flex>
        </Box>
    );
}

export default BackToTop;