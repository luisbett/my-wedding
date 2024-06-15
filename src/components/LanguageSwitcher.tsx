import { useTranslation } from 'react-i18next'

import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher () {

    //Translation hook
    const { i18n } = useTranslation()

    //Handle click function
    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
    }

    return(
        <div className={styles.language} onClick={handleClick}>
            { i18n.language === 'pt' 
            ? <img src='/us.png' />
            : <img src='/br.png' /> }
        </div>
    )
}