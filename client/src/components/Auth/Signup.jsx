import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
  Flex,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Flex
      gap="xs"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      p={10}
      style={{
        minHeight: "90svh",
      }}
    >
      <Paper radius="xl" p="xl" withBorder shadow="xl" w={400}>
        <Text size="xl" fw={600} mb={10} c="blue" ta={"center"}>
          Sign Up
        </Text>
        <form>
          <Stack>
            <TextInput label="Name" placeholder="Your name" radius="xl" />

            <TextInput
              required
              label="Email"
              placeholder=" Your email"
              radius="xl"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="xl"
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm your password"
              radius="xl"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              type="button"
              c="dimmed"
              size="xs"
              component={Link}
              to="/login"
            >
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Sign Up
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}
