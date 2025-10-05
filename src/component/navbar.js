import {
  Box,
  Button,
  Spacer,
  MenuButton,
  Flex,
  Menu,
  MenuList,
  IconButton,
  Heading,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../component/logo.png";
const NavBar = () => {
  //"#b4816b"
  return (
    <Box
      bg={"RGBA(0, 0, 0, 0.64)"}
      position="absolute"
      color="white"
      width="100%"
    >
      <Box pl={6} pr={6} pt={5} pb={7}>
        <Flex>
          <Link to="/">
            <Image h="80px" w="100px" src={logo} />
          </Link>

          <Spacer />
          <Box display={["none", "none", "flex", "flex"]} mt="10px">
            <Flex>
              <Lister name="Service" link="#service" />
              <Lister name="Contact" link="#contact" />
              <Lister name="Book Consulation" link="#book" />
              <Lister name="Our Team" link="#profile" />
              <Lister name="Testimony" link="#testimony" />
            </Flex>
          </Box>
          <Box display={["flex", "flex", "none", "none"]} mt="10px">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />

              <MenuList bg="black" zIndex="999999" display="grid">
                <Lister name="Service" link="#service" />
                <Lister name="Contact" link="#contact" />
                <Lister name="Book Consulation" link="#book" />
                <Lister name="Our Team" link="#profile" />{" "}
                <Lister name="Testimony" link="#testimony" />
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;

export const Lister = ({ name, fw, link }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Link to={link} scroll={(el) => scrollWithOffset(el, -150)}>
      <Button
        bg="transparent"
        _hover={{ color: "#b4816b" }}
        _active={{ color: "#b4816b" }}
        _focus={{ color: "#b4816b" }}
        fontWeight={fw}
      >
        {name}
      </Button>
    </Link>
  );
};
