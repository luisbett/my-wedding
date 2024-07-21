import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { BsFillClockFill } from "react-icons/bs"
import GoBackButton from "../components/GoBackButton"
import styles from './SchedulePage.module.css'

export default function SchedulePage() {

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
                    <BsFillClockFill fill="#EF2B7C" size="27px" />
                    <h2>{t('schedulePageTitle')}</h2>
                </div>
                <p>{t('schedulePageItem1')}</p>
                <p>{t('schedulePageItem2')}</p>
                <p>{t('schedulePageItem3')}</p>
                <p>{t('schedulePageItem4')}</p>
                <p>{t('schedulePageItem6')}</p>
                <p>{t('schedulePageItem7')}</p>
                <p>{t('schedulePageItem8')}</p>
                <p>{t('schedulePageItem9')}</p>
                <p>{t('schedulePageItem10')}</p>
                <p>{t('schedulePageItem11')}</p>
                <p>{t('schedulePageItem12')}</p>
                <p>{t('schedulePageItem13')}</p>
                <p>{t('schedulePageItem14')}</p>
                <p>{t('schedulePageItem15')}</p>
            </div>
        </motion.div>
    )
}

