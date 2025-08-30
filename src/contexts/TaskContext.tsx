import { createContext } from "react";
import type { TaskStateModel } from "../models/TaskStateModel";

// Definindo uma variável do tipo TaskStateModel para inputar um objeto com os tipos já inicializados e, consequentemente, inicializar o useState
const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTasks: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
}

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
    state: initialState,
    setState: () => {}
}

// O valor inicial do contexto, no caso, o objeto chave: '123', só será utilizado quando esse contexto for acessado por uma forma alternativa ao Provider (quase nunca ocorrerá)
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
    return <TaskContext.Provider value={initialContextValue}>{children}</TaskContext.Provider>
}