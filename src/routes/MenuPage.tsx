import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { IoRestaurant } from "react-icons/io5"
import GoBackButton from "../components/GoBackButton"
import styles from './MenuPage.module.css'

export default function MenuPage() {

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
                    <IoRestaurant fill="#EF2B7C" size="27px" />
                    <h2>{t('menuPageTitle')}</h2>
                </div>
                <p><strong>{t('menuPageSubTitle1')}</strong></p>
                <p>{t('menuPageSubTitle1Item1')}</p>
                <p>{t('menuPageSubTitle1Item2')}</p>
                <p>{t('menuPageSubTitle1Item3')}</p>
                <p><strong>{t('menuPageSubTitle2')}</strong></p>
                <p>{t('menuPageSubTitle2Item1')}</p>
                <p>{t('menuPageSubTitle2Item2')}</p>
                <p>{t('menuPageSubTitle2Item3')}</p>
                <p><strong>{t('menuPageSubTitle3')}</strong></p>
                <p>{t('menuPageSubTitle3Item1')}</p>
                <p>{t('menuPageSubTitle3Item2')}</p>
                <p>{t('menuPageSubTitle3Item3')}</p>
            </div>
        </motion.div>
    )
}

