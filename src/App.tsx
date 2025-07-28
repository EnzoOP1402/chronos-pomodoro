import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'
import { Footer } from './components/Footer'
import { useState } from 'react'

export function App() {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(prevState => prevState + 1)
        console.log(num)
    }

    // Como em react somente um elemento pode ser retornado, sempre devemos "envelopar" o código que estamos retornando em um elemento, seja retornando uma div que contenha todos os trechos necessários, ou utilizando o React Fragment, que consiste em uma tag vazia que engloba tudo que será retornado em HtML
    return (
        <>
            <Heading>Número: {num}</Heading>
            <button onClick={handleClick}>Aumenta</button>

            <Container>
                <Logo/>
            </Container>

            <Container>
                <Menu/>
            </Container>

            <Container>
                <CountDown/>
            </Container>

            <Container>
                <form action="" className='form'>
                    <div className="formRow">
                        <DefaultInput labelText={num.toString()} id='input' type='text' placeholder='Digite algo'/>
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles/>
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                        {/* <DefaultButton icon={<StopCircleIcon/>} color='red'/> */}
                    </div>
                </form>
            </Container>

            <Container>
                <Footer/>
            </Container>
        </>
    )
}

// export default App -> Como sempre precisamos exportar nossos componentes, caso não coloquemos o export antes da definção da função, precisamos inserir esse export default nessa exata posição em que ele se encontra (criar componentes através do rafce já deixa a estrutura pronta e facilita a programação). Mudanças no tipo de exportação também afetam o tipo de importação, uma vez que a exportação realizada na declaração ou a inferior com chaves faz com que seja importar o componente com seu nome entre chaves, enquanto a exportação default flexibiliza a imoortação, permitindo até uma mudança de nome durante a importação