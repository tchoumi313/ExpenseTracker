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
  name: yup.string().required("Enter your name"),
  email: yup.string().required("Enter your email").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm, "Enter a valid email"),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export default function SignUp() {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              radius="xl"
              {...register("name")}
              error={errors.name && errors.name.message}
            />

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
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              radius="xl"
              {...register("confirmPassword")}
              error={errors.confirmPassword && errors.confirmPassword.message}
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
