import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import LanguageSwitcher from "../components/LanguageSwitcher"
import Button from "../components/Button"
import styles from './WelcomePage.module.css'

export default function WelcomePage() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <motion.div className={styles.container}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 70 }}>
            <div className={styles.image}></div>
            <div className={styles.button}>
                <LanguageSwitcher />
                <h2>👰🏻‍♀️ Leticia & Luis 🤵🏼</h2>
                <p>{t('welcomePageTitle')}</p>
                <Button buttonTitle={t('welcomePageBtn1')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/schedule')}} />
                <Button buttonTitle={t('welcomePageBtn2')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/menu')}} />
                <Button buttonTitle={t('welcomePageBtn3')} buttonStyle="fuchsia" buttonOnClick={() => {window.open('https://noivos.casar.com/leticia-luis-10-08-24#/presentes', '_blank')}} />
                <Button buttonTitle={t('welcomePageBtn4')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/honey-moon')}} />
                <Button buttonTitle={t('welcomePageBtn5')} buttonStyle="fuchsia" buttonOnClick={() => {window.open('https://www.instagram.com/ar/788040303474966/', '_blank')}} />
                <Button buttonTitle={t('welcomePageBtn6')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions1', { state: { prevComponent: 'welcome' } })}} />
            </div>
        </motion.div>
    )
}