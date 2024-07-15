import classes from "./LimitTracker.module.css";
import MonthPicker from "../monthPicker/MonthPicker";
import {
  Progress,
  Box,
  Text,
  Group,
  Paper,
  SimpleGrid,
  Button,
  Modal,
} from "@mantine/core";
import FloatingForm from "../../floatingForm/FloatingForm";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { setName } from  "@redux/edit/editSlice";

const data = [
  { label: "Spent", count: "5600", part: 59, color: "#47d6ab" },
  { label: "Limit", count: "12000", part: 35, color: "#03141a" },
  { label: "Balance", count: "4300", part: 6, color: "#4fcdf7" },
];

export default function LimitTracker() {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();

  const segments = data.map((segment) => (
    <Progress.Section
      value={segment.part}
      color={segment.color}
      key={segment.color}
    >
      {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
    </Progress.Section>
  ));

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      style={{ borderBottomColor: stat.color }}
      className={classes.stat}
    >
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {stat.label}
      </Text>

      <Group justify="space-between" align="flex-end" gap={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  const handleLimit = () => {
    dispatch(setName("limit"));
    open();
  };

  return (
    <Paper withBorder p="md" radius="md">
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <MonthPicker />
      </div>
      <Progress.Root
        size={34}
        classNames={{ label: classes.progressLabel }}
        mt={40}
      >
        {segments}
      </Progress.Root>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
        {descriptions}
      </SimpleGrid>
      {/* edit button */}
      <Button
        mt="xl"
        variant="outline"
        radius="md"
        size="md"
        w={{ base: "100%", md: "auto" }}
        onClick={handleLimit}
      >
        Edit Limit
      </Button>

      <Modal opened={opened} onClose={close} centered radius="xl">
        <FloatingForm />
      </Modal>
    </Paper>
  );
}
