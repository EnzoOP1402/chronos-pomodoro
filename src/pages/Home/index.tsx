import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStatemodel";
import { MainTemplate } from "../../templates/MainTemplate";

export type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}
export function Home(props: HomeProps){
    // const {state, setState} = props;
    
    return (
        <MainTemplate>
            <Container>
                {/* <CountDown formattedSecondsRemaining={state.formattedSecondsRemaining}/> */}
                <CountDown {...props}/>
                {/* Como props recebe um objeto já com os valores de state e setState, ao invés de colocarmos <CountDown state={state} setState={setState}>, podemos simplesmente colocar uma desestruturação do objeto props, passando assim seus atributos diretamente */}
            </Container>

            <Container>
                <MainForm {...props}/>
            </Container>
        </MainTemplate>
    );
}