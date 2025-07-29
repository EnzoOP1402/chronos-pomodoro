import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvaiableThemes = 'dark' | 'light'; //Só recebe as strings 'dark' ou 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvaiableThemes>(() => {
        const storageItem = (localStorage.getItem('theme') as AvaiableThemes || 'dark');
        return storageItem;
        // return storageItem === 'light' ? 'light' : 'dark'
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não segue o link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
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
                {nextThemeIcon[theme]}
            </a>
        </div>
    )
}