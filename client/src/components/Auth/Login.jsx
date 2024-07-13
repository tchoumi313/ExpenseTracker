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

export default function Login() {
  return (
    // flex vetically and horizontally center
    <Flex
      h="90vh"
      gap="xs"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      p={10}
    >
      <Paper radius="xl" p="xl" withBorder shadow="xl" w={400}>
        <Text size="xl" fw={600} mb={10} c="blue" ta={"center"}>
            Login
         
        </Text>
        <form>
          <Stack>
 
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

            </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor   type="button" c="dimmed" size="xs" component={Link} to= "/signup">
              Don&#39;t have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}
