import { IconPlus, IconX } from "@tabler/icons-react";
import { ActionIcon, Affix} from "@mantine/core";

export default function FloatingButton() {
  return (
    <>
      <Affix position={{ bottom: 40, right: 40 }}>
        <ActionIcon color="green" radius="xl" size={60}>
          <IconPlus stroke={1.5} size={30} />
          <IconX stroke={1.5} size={30} />
        </ActionIcon>
      </Affix>
    </>
  );
}
