import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { GiHoneypot } from "react-icons/gi"
import toast from "react-hot-toast"
import GoBackButton from "../components/GoBackButton"
import Button from "../components/Button"
import styles from './HoneyMoonPage.module.css'

export default function HoneyMoonPage() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <motion.div 
            className={styles.container}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 70 }}>
            <GoBackButton buttonOnClick={() => {navigate('/')}} />
            <div className={styles.card}>
                <div className={styles.title}>
                    <GiHoneypot fill="#EF2B7C" size="33px"/>
                    <h2>{t('honeyMoonPageTitle')}</h2>
                </div>
                <p>{t('honeyMoonPageSentence1')}</p>
                <Button buttonTitle={t('honeyMoonPageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigator.clipboard.writeText('07022422923'),toast.success(t('honeyMoonPageToast'))}} />
            </div>
        </motion.div>
    )
}