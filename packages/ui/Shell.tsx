import React from "react";
import {
    AppShell,
    Header,
    Title,
    Box,
    Button,
    useMantineTheme
} from "@mantine/core";

import {useAppShell} from './index'

export const Shell: React.FC<{title: string}> = ({ title, children }) => {
    const { user, score, setUser } = useAppShell();
    const theme = useMantineTheme();

    return(
        <AppShell 
            padding="md"
            styles={{
                main: {
                    background: theme.colorScheme == "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.grey[0]
                }
            }}
            header={
                <Header
                    height={60}
                    p="xs"
                    style={{
                        background: theme.colors.blue[5]
                    }}
                 >
                     <Title 
                        style={{color:"white"}}
                     >{title}</Title>
                     <Box sx={{ flexGrow: 1 }} />
                     {(user && (
                         <Box sx={{ display:"flex" }}>
                             <Title
                                mr="md"
                                sx={{color:"white"}}
                                >{user}-{score}</Title>
                         </Box>
                     ))}
                     {(!user && (
                         <Button variant="light" onClick={() => setUser("Beep")}>Login</Button>
                     ))}
                 </Header>
            }
            children={children}
        />
    )
}