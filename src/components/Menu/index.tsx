import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvaiableThemes = 'dark' | 'light'; //Só recebe as strings 'dark' ou 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvaiableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não segue o link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }

    // useEffect(() => {
    //     console.log('useEffect sem dependências', Date.now());
    // }) // Executado sempre que um componente renderiza na tela
    
    // useEffect(() => {
    //     console.log('useEffect com dependências vazias', Date.now());
    // }, []) // Executado somente quando o React monta o componente pela primeira vez 
    
    useEffect(() => {
        // console.log('useEffect com dependência', Date.now());
        document.documentElement.setAttribute('data-theme', theme)

        return () => {
            console.log('Olha, esse componente será atualizado') // O conteúdo da função pode ser atualizado conforme a necessidade do sistema
        } // Função de cleanup: serve para limpar qualquer resíduo de algum componente, como timers, event listeners, requisições ou inscrições em fontes de dados externos
    }, [theme]) // Executado sempre que a(s) dependência(s) tem seu valor alterado/é renderizada

    return (
        <div className={styles.menu}>
            <a href="#" className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon/>
            </a>
            <a href="#" className={styles.menuLink} aria-label='Ver histórico' title='Ver histórico'>
                <HistoryIcon/>
            </a>
            <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
                <SettingsIcon/>
            </a>
            <a href="#" className={styles.menuLink} aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}>
                <SunIcon/>
            </a>
        </div>
    )
}