import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  FaPlus,
  FaRegBell,
  FaRegChartBar,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegQuestionCircle,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { SearchField } from "@/components/SearchField";
import { UserProfile } from "@/components/UserProfile";
import Head from "next/head";

import { useRouter } from "next/router";

const Layout = ({
  children,
  title = "VokApp",
  description = "A simple app to add vocabuarlies",
  keywords = "korean, english",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any | null>();

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Flex
        height="100vh"
        width={{
          base: "100vw",
          sm: "300px",
        }}
        direction="column"
        borderRightWidth="1px"
        px={6}
        py={8}
        display={{ base: "none", md: "flex" }}
        position="fixed"
        top="0"
        left="0"
        zIndex="docked"
      >
        <Box mb={8}>
          <Logo color="blue.600" />
        </Box>
        {/* <SearchField mb={6} /> */}
        <Stack spacing={6}>
          <Stack>
            {/* <NavLink
              isActive={router.pathname === "/profile"}
              label="My Voks"
              icon={FaUser}
              page="/profile"
            /> */}
            <NavLink
              isActive={router.pathname === "/create"}
              label="Add new Vok"
              icon={FaPlus}
              page="/create"
            />
            {/* <NavLink label="Workflow" icon={FaRegPaperPlane} /> */}
            {/* <NavLink label="Statistics" icon={FaRegChartBar} /> */}
          </Stack>
          {/* <Divider />
        <Stack>
          <NavLink label="Notifications" icon={FaRegBell} />
          <NavLink label="Help Center" icon={FaRegQuestionCircle} />
        </Stack> */}
        </Stack>
        <Spacer />
        {/* <UserProfile
          name="Francis"
          image="francis"
          email="francis@example.com"
        /> */}
      </Flex>
      {/* mobile view */}
      <Flex px={6} pt={8} display={{ base: "flex", md: "none" }}>
        <Box>
          <Logo color="blue.600" />
        </Box>
        <Spacer />
        <IconButton
          aria-label="bars"
          icon={<FaBars />}
          variant="ghost"
          colorScheme="blue"
          fontSize="20px"
          ref={btnRef}
          onClick={onOpen}
        ></IconButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Flex height="88vh" direction="column">
                {/* <NavLink
                  isActive={router.pathname === "/profile"}
                  label="My Voks"
                  icon={FaUser}
                  page="/profile"
                /> */}
                <NavLink
                  isActive={router.pathname === "/create"}
                  label="Add new Vok"
                  icon={FaPlus}
                  page="/create"
                />
                <Spacer />
                {/* <UserProfile
                  name="Francis"
                  image="francis"
                  email="francis@example.com"
                /> */}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Box ml={{ base: "0", md: "300px" }} p={8}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
