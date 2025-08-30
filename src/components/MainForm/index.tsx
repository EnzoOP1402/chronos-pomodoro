import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){

    return (
        <form action="" className='form'>
            <div className="formRow">
                <DefaultInput labelText='Task' id='input' type='text' placeholder='Digite algo'/>
            </div>
            <div className="formRow">
                <p>O próximo intervalo é de 25min</p>
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