import { Group, Button, Text, Box } from "@mantine/core";
//   import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Header.module.css";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box pb={5}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text fz={{ base: "md", lg: "xl" }} fw={700} tt="uppercase" component={Link} to="/">
            Expense Tracker
          </Text>
          <Group justify="space-end" h="100%">
            <ThemeSwitch />
            <Button size="md" radius="xl" component={Link} to="/login">
               Login
            </Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
