import { Box, Divider, Flex, Spacer, Stack } from "@chakra-ui/react";
import * as React from "react";
import {
  FaPlus,
  FaRegBell,
  FaRegChartBar,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegQuestionCircle,
  FaUser,
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

  return (
    <Flex>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Flex
        height="100vh"
        width={{
          base: "full",
          sm: "xs",
        }}
        direction="column"
        borderRightWidth="1px"
        px={6}
        py={8}
      >
        <Box mb={8}>
          <Logo color="blue.600" />
        </Box>
        {/* <SearchField mb={6} /> */}
        <Stack spacing={6}>
          <Stack>
            <NavLink
              isActive={router.pathname === "/profile"}
              label="My Voks"
              icon={FaUser}
              page="/profile"
            />
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
        <UserProfile
          name="Francis"
          image="francis"
          email="francis@example.com"
        />
      </Flex>
      <Box p={8}>{children}</Box>
    </Flex>
  );
};

export default Layout;
