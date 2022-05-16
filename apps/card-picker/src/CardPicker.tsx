import React, { useState } from 'react';
import { Box, Paper, Text, Button, Title } from '@mantine/core';
import { shuffle } from 'lodash';

import { useAppShell } from 'ui';

const OPTIONS = [10,5,2,-8,-7];

export const CardPicker = () => {
    const [cards, setCards] = useState<number[]>(shuffle(OPTIONS));
    const [played, setPlayed] = useState<number | null>();

    const { user, addToScore } = useAppShell();
    const handleReset = () => {
        setPlayed(null);
        setCards(shuffle(OPTIONS));
    }

    if (!user)
        return null;

    return (
        <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
            <Title>Card Picker 👌</Title>
            <Box
                sx={{
                    display:"grid",
                    gridTemplateColumns:"repeat(5,1fr)",
                    gridGap: "1rem",
                    marginTop: "20px"
                }}
            >
                {cards.map((card, idx) => (
                    <Box 
                        p={5}
                        sx={{
                            borderRadius:"10px",
                            height:200,
                            border:"2px solid black",
                            boxShadow: "0px 8px black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background:
                                played != null
                                ? idx === played
                                    ? "#ccc"
                                    : "white"
                                : "black"
                        }}
                        key={idx}
                        onClick={() => {
                            if (played == null){
                                addToScore(card)
                                setPlayed(idx)
                            }
                        }}
                    >
                        { played != null && <Text sx={{fontSize:"40pt"}} >{card}</Text>}
                    </Box>
                ))}
            </Box>
            {played != null && (
                <Button 
                    sx={{color:"white", width:"100%", marginTop:"20px"}}
                    onClick={handleReset}
                >
                    Reset
                </Button>
            )}
        </Paper>
    )
}