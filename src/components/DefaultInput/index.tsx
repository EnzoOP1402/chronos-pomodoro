import styles from './styles.module.css'

// Definir o tipo de uma propriedade é necessário quando trabalhamos com TypeScript
type DefaultInputProps = {
    id: string;
    // labelText?: string; -> Adicionar uma interrogação ao nome da propriedade indica para o componente que ela é *opcional*
    labelText: string;
} & React.ComponentProps<'input'> // Cria uma interseção entre a definição do atributo id e a união de todos os tipos possíveis que a tag input carrega como opção

export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
    return (
        <>
            {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''} -> esse tipo de instrução é usado quando temos duas opções possíveis para uma condição, sendo a primeira a condição verdadeira e a segunda, após o :, a falsa*/}
            {/* {labelText && <label htmlFor={id}>{labelText}</label>} -> esse tipo de instrução é utilizado apenas quando temos uma opção possível para uma condição, sem nos preocuparmos com um else*/}
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} {...rest} className={styles.input}/> {/* ...rest representa qualquer um dos outros atributos que esse componente pode receber, como required, disabled, etc., e que já se encontram listados no ComponentProps<'input'>*/}
        </>
    );
}