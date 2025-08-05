import type { HomeProps } from '../../pages/Home'
import styles from './styles.module.css'
// type CountDownProps = {
//     formattedSecondsRemaining: string;
// } -> Como usaremos as mesmas propriedades que a Home usa, ao invés de definirmos novas props, podemos reutilizar as HomeProps, bastando exportá-las na página onde é declarada
// Outra alternativa é declarar propriedades específicas pro CountDown e somá-las com as da Home através do operador &

export function CountDown({state}: HomeProps) {
    return (
        <div className={styles.container}>
            {state.formattedSecondsRemaining}
        </div>
    )
}