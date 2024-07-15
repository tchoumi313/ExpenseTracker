import { Box, Button, Paper, Stack, Text, TextInput } from "@mantine/core";

export default function FloatingForm() {
  // w={{ md: 400 }}
  return (
    // <Paper radius="xl" p="xl" withBorder shadow="xl"  m={"md"}>
    <Box   m={"md"}>
      <Text size="xl" fw={600} mb={10} c="blue" ta={"center"}>
        current text
      </Text>
      <form>
        <Stack>
          <TextInput label="title" placeholder=" title" radius="xl" mb="sm" />
          <TextInput label="amount" placeholder=" amount" radius="xl" mb="sm" />
          <TextInput label="limit" placeholder=" limit" radius="xl" mb="sm" />
        </Stack>
        <Button mt="md" radius="xl">
          Add
        </Button>
      </form>
    </Box>
    // </Paper>
  );
}
