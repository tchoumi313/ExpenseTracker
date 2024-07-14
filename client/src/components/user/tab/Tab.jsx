import { Tabs, rem } from "@mantine/core";
 
import { IconActivity, IconCurrencyRupee } from "@tabler/icons-react";
import classes from "./Tab.module.css";

export default function Tab() {
  return (
    <Tabs variant="outline" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={
            <IconActivity style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Stats
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={
            <IconCurrencyRupee style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Expense
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
