import styles from './Heading.module.css'

export function Heading(props) {
    return <>
        {/* <h1 className={`${styles.heading} ${styles.cyan}`} >Olá, mundo!</h1> */}
        <h1 className={styles.heading}>{props.children}</h1> {/* props.children é utilizado para acessar tudo que o objeto props traz como atributos filhos (o conceito geral de children), mas, caso esses atributos fossem melhor especificados ou caso houvesse mais de um, eles seriam nomeados e seu acessoa se daria, por exemplo, da seguinte forma: props.name, props.age, etc. */}
        {/* O acesso a propriedades pode ser feito de inúmeras formas */}
    </>
}