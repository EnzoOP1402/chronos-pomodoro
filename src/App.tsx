import { Heading } from './assets/Heading'
import './styles/global.css'
import './styles/theme.css'

export function App() {
    // Como em react somente um elemento pode ser retornado, sempre devemos "envelopar" o código que estamos retornando em um elemento, seja retornando uma div que contenha todos os trechos necessários, ou utilizando o React Fragment, que consiste em uma tag vazia que engloba tudo que será retornado em HtML
    return (
        <>
            <Heading/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum eum et, optio nostrum ipsam cumque! Nam libero tempora sunt quia aut eos necessitatibus impedit, eveniet cupiditate expedita accusamus nemo neque magnam alias itaque rerum, praesentium earum doloremque. Veritatis veniam minus pariatur accusantium quia impedit exercitationem quisquam ipsum dolorum, doloribus est animi quibusdam nisi dolor, maxime ea libero blanditiis nam repudiandae provident soluta sapiente temporibus, enim assumenda! Quas, saepe obcaecati dignissimos blanditiis, tempore eaque similique libero, vero facilis magni aut voluptate mollitia hic recusandae natus itaque assumenda harum pariatur eligendi porro maiores deserunt reprehenderit! Minima illum tempora nemo beatae ab.</p>
        </>
    )
}

// export default App -> Como sempre precisamos exportar nossos componentes, caso não coloquemos o export antes da definção da função, precisamos inserir esse export default nessa exata posição em que ele se encontra (criar componentes através do rafce já deixa a estrutura pronta e facilita a programação). Mudanças no tipo de exportação também afetam o tipo de importação, uma vez que a exportação realizada na declaração ou a inferior com chaves faz com que seja importar o componente com seu nome entre chaves, enquanto a exportação default flexibiliza a imoortação, permitindo até uma mudança de nome durante a importação