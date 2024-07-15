import { Group, Button, Text, Box } from "@mantine/core";
import classes from "./Header.module.css";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@redux/auth/authSlice";

export default function Header() {
  const token = useSelector((store) => store.auth.token);
  console.log(token, "token");
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <Box pb={5}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text
            fz={{ base: "md", lg: "xl" }}
            fw={700}
            tt="uppercase"
            component={Link}
            to="/"
          >
            Expense Tracker
          </Text>
          <Group justify="space-end" h="100%">
            <ThemeSwitch />

            {token ? (
              <Button size="md" radius="xl" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button size="md" radius="xl" component={Link} to="/login">
                Login
              </Button>
            )}
          </Group>
        </Group>
      </header>
    </Box>
  );
}
