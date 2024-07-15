import { Box, Button, Paper, Stack, Text, TextInput } from "@mantine/core";
import { useSelector } from "react-redux";

export default function FloatingForm() {
  const option = useSelector((store) => store.edit.name);
 
  // w={{ md: 400 }}
  return (
     <Box m={"md"}>
      <Text size="xl" fw={600} mb={10} c="blue" ta={"center"}>
        {option === "limit" ? "Edit Limit" : " Expense"}
      </Text>
      <form>
        <Stack>
          {option === "limit" ? (
            <>
              <TextInput
                label="limit"
                placeholder=" limit"
                radius="xl"
                mb="sm"
              />
            </>
          ) : (
            <>
              <TextInput
                label="title"
                placeholder=" title"
                radius="xl"
                mb="sm"
              />
              <TextInput
                label="amount"
                placeholder=" amount"
                radius="xl"
                mb="sm"
              />
            </>
          )}
        </Stack>
        <Button mt="md" radius="xl">
          Add
        </Button>
      </form>
    </Box>
    // </Paper>
  );
}
