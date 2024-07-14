import { Box, Container } from "@mantine/core";
import LimitTracker from "../components/user/limitTracker/LimitTracker";
import Tab from "../components/user/tab/Tab";

 

export default function UserHome() {
  return (
    <Box >
      <Box maw={500} mx="auto" mt="md" p="sm">
        <Tab />
      </Box>
      <Container mx="auto" maxWidth="lg" py="sm" size="md">
        <LimitTracker />
      </Container>
    </Box>
  );
}
