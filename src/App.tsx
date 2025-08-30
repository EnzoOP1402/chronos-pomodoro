import type { TaskStateModel } from './models/TaskStateModel';
import { Home } from './pages/Home'

import './styles/global.css'
import './styles/theme.css'
import { TaskContextProvider } from './contexts/TaskContext';
import { useState } from 'react';

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

export function App() {

    const [state, setState] = useState(initialState);

    return (
        <>
        {/* O Provider é responsável por passar seu valor a TODOS OS COMPONENTES QUE ESTÃO DENTRO DELE, ou seja, tanto o Home quanto seus filhos receberão o outro: '321'*/}
            <TaskContextProvider>
                <Home/>
            </TaskContextProvider>
        </>
    )
}