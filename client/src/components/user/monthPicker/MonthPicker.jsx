import { useState } from "react";
import { Group, Button, Text } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthPicker() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  return (
    <Group position="center" align="center">
      <Button variant="subtle" onClick={handlePrevMonth}>
        <IconChevronLeft size={18} />
      </Button>
      <Text size="md" weight={500}>
        {months[monthIndex]}, {year}
      </Text>
      <Button variant="subtle" onClick={handleNextMonth}>
        <IconChevronRight size={18} />
      </Button>
    </Group>
  );
}

export default MonthPicker;
