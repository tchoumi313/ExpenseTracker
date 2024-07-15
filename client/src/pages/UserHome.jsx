import { Box, Container } from "@mantine/core";
import LimitTracker from "../components/user/limitTracker/LimitTracker";
import Tab from "../components/user/tab/Tab";
import UserModal from "../components/modal/UserModal";


 

export default function UserHome() {
  return (
    <Box >
      <Box maw={500} mx="auto" mt="md" p="sm">
        <Tab />
      </Box>
      <Container mx="auto"   py="sm" size="md">
        <LimitTracker />
      </Container>
      <UserModal />
    </Box>
  );
}
