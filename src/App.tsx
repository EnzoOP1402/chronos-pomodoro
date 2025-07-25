import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'

export function App() {
    // Como em react somente um elemento pode ser retornado, sempre devemos "envelopar" o código que estamos retornando em um elemento, seja retornando uma div que contenha todos os trechos necessários, ou utilizando o React Fragment, que consiste em uma tag vazia que engloba tudo que será retornado em HtML
    return (
        <>
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>
            <Container>
                <Heading>FORM</Heading>
            </Container>
            <Container>
                <Heading>FOOTER</Heading>
            </Container>
        </>
    )
}

// export default App -> Como sempre precisamos exportar nossos componentes, caso não coloquemos o export antes da definção da função, precisamos inserir esse export default nessa exata posição em que ele se encontra (criar componentes através do rafce já deixa a estrutura pronta e facilita a programação). Mudanças no tipo de exportação também afetam o tipo de importação, uma vez que a exportação realizada na declaração ou a inferior com chaves faz com que seja importar o componente com seu nome entre chaves, enquanto a exportação default flexibiliza a imoortação, permitindo até uma mudança de nome durante a importação