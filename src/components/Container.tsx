import styles from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
}

// Colocar children entre {} faz com que seja definido que os elementos children do parâmetro especificado serão do tipo desejado, evitando que seja necessário digitar props: ConteinerProps e depois acessar via props.children
export function Container({children}: ContainerProps) {
    return (
        // Como tudo está envolto em uma div, <></> é desnecssário, mas não afeta a execução do código
        <> 
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}