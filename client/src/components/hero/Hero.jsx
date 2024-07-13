import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "/hero.svg";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={`${classes.title}`}>
            Welcome to <span style={{ color: "#00b5ff" }}>Expense Tracker</span>
          </Title>
          <Text c="dimmed" mt="md">
            Keep your finances in check with our comprehensive expense tracker.
            Add your expenses, set monthly limits, and receive alerts when you
            approach your limit. All your data is securely stored and easily
            accessible.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Track Expenses</b> – Easily add and categorize your expenses to
              monitor your spending habits.
            </List.Item>
            <List.Item>
              <b>Set Monthly Limits</b> – Define a monthly budget and get
              notified when you're close to reaching it.
            </List.Item>
            <List.Item>
              <b>Secure Authentication</b> – Sign in securely and ensure your
              data is protected.
            </List.Item>
            <List.Item>
              <b>User-Friendly Interface</b> – Enjoy a smooth and intuitive
              experience.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get Started
            </Button>
          </Group>
        </div>
        <Image
          src={image}
          alt="Expense Tracker"
          display={{ base: "none", md: "block" }}
          h={376}
          w={376}
        />
      </div>
    </Container>
  );
}
