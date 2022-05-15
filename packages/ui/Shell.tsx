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
                        : theme.colors.gray[0]
                }
            }}
            header={
                <Header
                    height={80}
                    style={{
                        display: "flex",
                        background: theme.colors.blue[5],
                        alignItems: "center",
                        padding: "0 20px"
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
                                sx={{
                                    color:"white",
                                    fontSize: "24px"
                                }}
                                >{user} ({score})</Title>
                                <Button variant="light" onClick={() => setUser(null)}>Logout</Button>
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