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
import { Link } from "react-router-dom";
import ThemeSwitch from "../../theme/ThemeSwitch";

export default function UserHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

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

            <Button radius="xl" display={{ base: "none", sm: "block" }}>
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
            <Button radius="xl">Log out</Button>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
