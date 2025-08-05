import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({state, setState}: HomeProps){
    function handelClick() {
        setState(prevState => {
            return {
                ...prevState,
                config: {
                    ...prevState.config,
                    workTime: 34
                },
                formattedSecondsRemaining: '22:18'
            }
        })
    }

    return (
        <form action="" className='form'>
            <div>
                <button type="button" onClick={handelClick}>Clicar</button>
            </div>
            <div className="formRow">
                <DefaultInput labelText='Task' id='input' type='text' placeholder='Digite algo'/>
            </div>
            <div className="formRow">
                <p>O próximo intervalo é de {state.config.workTime}min</p>
            </div>

            <div className="formRow">
                <Cycles/>
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                {/* <DefaultButton icon={<StopCircleIcon/>} color='red'/> */}
            </div>
        </form>
    );
}