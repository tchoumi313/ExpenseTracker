import {
  Button,
  Text,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Stack,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitch from "../../theme/ThemeSwitch";
import toast from "react-hot-toast";
import axiosInstance from "../../../config/axios";

export default function UserHeader() {
  const navigate = useNavigate();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const handleLogout =  async() => {
    try {
      const response = await axiosInstance.post("/api/auth/logout"," " ,{withCredentials:true})
    toast.success(response.data.message)
    navigate("/", { replace: true })
    } catch (error) {
      console.log(error.message)
      toast.error(error.response.data.message)
    }
  }

  return (
    <Box>
      <header className={classes.header}>
        <Flex justify="space-between" align="center" gap="sm">
          <Text
            fz={{ base: "md", lg: "xl" }}
            fw={700}
            tt="uppercase"
            component={Link}
            to="/home"
          >
            Expense Tracker
          </Text>
          <Flex justify="space-end" h="100%" gap="md" align={"center"}>
            <ThemeSwitch />

            <Button radius="xl"  onClick={handleLogout} display={{ base: "none", sm: "block" }}>
              Logout
            </Button>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Flex>
        </Flex>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Expense Tracker"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          {/* <Divider my="sm" /> */}

          <Stack justify="center" pb="xl" px="md">
            <Button radius="xl" onClick={handleLogout}>Log out</Button>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
