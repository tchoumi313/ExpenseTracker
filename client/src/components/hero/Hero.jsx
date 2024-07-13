import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '/hero.png';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Welcome to <span className={classes.highlight}>Expense Tracker</span>
          </Title>
          <Text c="dimmed" mt="md">
            Manage your expenses efficiently with our modern expense tracker. Add products and amounts, set monthly limits, and get alerts when you approach your limit. Securely store your data in MongoDB using the MERN stack.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Add Products and Amounts</b> – Easily add your expenses and keep track of your spending.
            </List.Item>
            <List.Item>
              <b>Set Monthly Limits</b> – Set a spending limit for the month and get alerts when you approach it.
            </List.Item>
            <List.Item>
              <b>Secure Sign-In</b> – Sign in securely and store your data in MongoDB.
            </List.Item>
            <List.Item>
              <b>Built with MERN Stack</b> – Leverage the power of MongoDB, Express, React, and Node.js.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get Started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source Code
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} alt="hero image" display={{ base: 'none', md: 'block' }} />
      </div>
    </Container>
  );
}
