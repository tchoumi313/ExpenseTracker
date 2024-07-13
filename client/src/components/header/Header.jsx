import {
    Group,
    Button,
    Text,
    Box,
    useMantineTheme,

} from '@mantine/core';
//   import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import ThemeSwitch from '../theme/ThemeSwitch';


export default function Header() {
    const theme = useMantineTheme();
    return (
        <Box pb={5} >
            <header className={classes.header}>
                <Group justify="space-between" h="100%" >
                    <Text fz={{ base: 'md', lg: 'xl' }} fw={700} tt="uppercase"> Expense Tracker</Text>
                    <Group justify="space-end" h="100%">
                        <ThemeSwitch />
                        <Button size='md' >Log in</Button>
                    </Group>
                </Group>
            </header>
        </Box>
    );
}
