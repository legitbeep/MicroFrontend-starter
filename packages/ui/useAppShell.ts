import createStore from "zustand/react";
import {persist} from "zustand/middleware";

type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amnt: number) => void;
}

export const useAppShell = createStore(
    persist<Store>(
        (set) => ({
            user: null,
            score: 0,
            setUser: (user) => set(() => ({user})),
            addToScore: (amnt) => set((state) => ({...state, score: state.score+amnt}))
        }),
        {
            name: "app-shell",
        }
    )
)