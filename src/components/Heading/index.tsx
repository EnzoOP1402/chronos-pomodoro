import styles from './Heading.module.css'

// Definindo um tipo para atribuir à propriedade -> padroniza, é uma boa prática de programação e garante que as propriedades desse elemento serão apenas do tipo string
type HeadingProps = {
    children: React.ReactNode; // React.ReactNode é um tipo que engloba todos os tipos que React e Node aceitam como propriedades
    // Se desejado, podemos adicionar outras especificações para outros atributos que essa propriedade tenha, por exemplo: nome: string; idade: number;
}

export function Heading(props: HeadingProps) {
    return <>
        {/* <h1 className={`${styles.heading} ${styles.cyan}`} >Olá, mundo!</h1> */}
        <h1 className={styles.heading}>{props.children}</h1> {/* props.children é utilizado para acessar tudo que o objeto props traz como atributos filhos (o conceito geral de children), mas, caso esses atributos fossem melhor especificados ou caso houvesse mais de um, eles seriam nomeados e seu acessoa se daria, por exemplo, da seguinte forma: props.name, props.age, etc. */}
        {/* O acesso a propriedades pode ser feito de inúmeras formas */}
    </>
}