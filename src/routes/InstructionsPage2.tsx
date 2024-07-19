import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FaBookOpen } from "react-icons/fa"
import GoBackButton from "../components/GoBackButton"
import Button from "../components/Button"
import styles from './InstructionsPage2.module.css'

export default function InstructionsPage2() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { i18n, t } = useTranslation()

    return (
        <motion.div
            className={styles.container}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 70 }}>
            <GoBackButton buttonOnClick={() => {navigate('/instructions1', { state: { prevComponent: 'instructions2' } })}} />
            <div className={styles.card}>
                <div className={styles.title}>
                    <FaBookOpen fill="#EF2B7C" size="27px"/>
                    <h2>{t('instructions2PageTitle')}</h2>
                </div>
                <p>{t('instructions2PageSentence1')}</p>
                <p>{t('instructions2PageSentence2')}</p>
                <Button buttonTitle={t('instructions2PageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/record', { state: { facing: 'user', currentLang: i18n.language } })}} />
            </div>
        </motion.div>
    )
}

