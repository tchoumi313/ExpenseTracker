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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder=" Your email"
              radius="xl"
              {...register("email")}
              error={errors.email && errors.email.message}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              radius="xl"
              {...register("password")}
              error={errors.password && errors.password.message}
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              type="button"
              c="dimmed"
              size="xs"
              component={Link}
              to="/signup"
            >
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
