import { Box, Flex, Text, IconButton, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../constants";

function Navbar({ scrollToSection }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      top={"0"}
    >
      <Flex
        minH={"60px"}
        top={"0"}
        width={"100%"}
        bgColor={"primary.bg"}
        justifyContent={"center"}
        textAlign={"center"}
        pt={"1rem"}
      >
        <Flex alignItems="center">
          <VStack>
            <Text
              color={"primary.main"}
              fontWeight={"bold"}
              fontSize={"3xl"}
              ml={{ base: "2rem", md: "none" }}
            >
              ryan wong
            </Text>
            <Flex
              ml={10}
              display={{ base: "none", md: "flex" }}
            >
              <DesktopNav scrollToSection={scrollToSection} />
            </Flex>
          </VStack>
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          mr={"3rem"}
          display={{ base: "flex", md: "none" }}
          justifyContent="flex-end"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon
                  w={3}
                  h={3}
                  color={"white"}
                />
              ) : (
                <HamburgerIcon
                  w={5}
                  h={5}
                  color={"white"}
                />
              )
            }
            _hover={{
              bgColor: "primary.main"
            }}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
      >
        <MobileNav scrollToSection={scrollToSection}/>
      </Collapse>
    </Box>
  );
}

export default Navbar;

const DesktopNav = ({ scrollToSection }) => {
  return (
    <Stack
      direction={"row"}
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
          >
            <PopoverTrigger>
              <Text
                cursor={"pointer"}
                fontSize={"xl"}
                fontWeight={"bold"}
                color={"white"}
                m={"3"}
                _hover={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
                onClick={() => scrollToSection(navItem.label)}
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ scrollToSection }) => {
  return (
    <Stack
      bg={"primary.bg"}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          scrollToSection={scrollToSection}
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ scrollToSection, label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={children && onToggle}
    >
      <Flex
        py={2}
        as={Link}
        // href={href ?? "#"}
        justify={"space-between"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={"white"}
          onClick={() => scrollToSection(label)}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
