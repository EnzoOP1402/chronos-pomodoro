import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStatemodel';
import { Home } from './pages/Home'

import './styles/global.css'
import './styles/theme.css'

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

export function App() {
    const [state, setState] = useState(initialState); // Através do initialState, o React interpreta que esse useState já é do tipo TaskStateModel

    return (
        <>
            <Home state={state} setState={setState}/>
        </>
    )
}