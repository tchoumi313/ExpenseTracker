import { IconPlus, IconX } from "@tabler/icons-react";
import { ActionIcon, Affix } from "@mantine/core";
import { Modal } from "@mantine/core";
import FloatingForm from "../../floatingForm/FloatingForm"
import { useDisclosure } from "@mantine/hooks";

 

export default function FloatingButton() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Affix position={{ bottom: 40, right: 40 }}>
      <ActionIcon color="green" radius="xl" size={60}  onClick={open}>
       { opened ? 
         <IconX size={30} />
       :
         <IconPlus size={30} />
       }
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <FloatingForm />
      </Modal>
    </Affix>
  );
}
