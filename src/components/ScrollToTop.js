import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <Box
          position={"fixed"}
          bottom={"2rem"}
          right={"2rem"}
          cursor={"pointer"}
          _hover={{
            color: "primary.main",
            transition: "all 0.4s ease"
          }}
        >
          <ChevronUpIcon
            boxSize={{ base: "4rem", md: "6rem" }}
            onClick={scrollTop}
          />
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;
