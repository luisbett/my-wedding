import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { IoRestaurant } from "react-icons/io5"
import { RiBeerFill } from "react-icons/ri"
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
                    <h2>{t('menuPage1Title')}</h2>
                </div>
                <h3>{t('menuPage1SubTitle1')}</h3>
                <p>{t('menuPage1SubTitle1Item1')}</p>
                <p>{t('menuPage1SubTitle1Item2')}</p>
                <p>{t('menuPage1SubTitle1Item3')}</p>
                <p>{t('menuPage1SubTitle1Item4')}</p>
                <p>{t('menuPage1SubTitle1Item5')}</p>
                <p>{t('menuPage1SubTitle1Item6')}</p>
                <p>{t('menuPage1SubTitle1Item7')}</p>
                <p>{t('menuPage1SubTitle1Item8')}</p>
                <h3>{t('menuPage1SubTitle2')}</h3>
                <p>{t('menuPage1SubTitle2Item1')}</p>
                <p>{t('menuPage1SubTitle2Item2')}</p>
                <p>{t('menuPage1SubTitle2Item3')}</p>
                <h3>{t('menuPage1SubTitle3')}</h3>
                <p>{t('menuPage1SubTitle3Item1')}</p>
                <p>{t('menuPage1SubTitle3Item2')}</p>
                <p>{t('menuPage1SubTitle3Item3')}</p>
                <p>{t('menuPage1SubTitle3Item4')}</p>
                <h3>{t('menuPage1SubTitle4')}</h3>
                <p>{t('menuPage1SubTitle4Item1')}</p>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <RiBeerFill fill="#EF2B7C" size="30px" />
                    <h2>{t('menuPage2Title')}</h2>
                </div>
                <h3>{t('menuPage2SubTitle1')}</h3>
                <p>{t('menuPage2SubTitle1Item1')}</p>
                <p>{t('menuPage2SubTitle1Item2')}</p>
                <p>{t('menuPage2SubTitle1Item3')}</p>
                <p>{t('menuPage2SubTitle1Item4')}</p>
                <h3>{t('menuPage2SubTitle2')}</h3>
                <p>{t('menuPage2SubTitle2Item1')}</p>
                <p>{t('menuPage2SubTitle2Item2')}</p>
                <p>{t('menuPage2SubTitle2Item3')}</p>
                <p>{t('menuPage2SubTitle2Item4')}</p>
                <p>{t('menuPage2SubTitle2Item5')}</p>
                <p>{t('menuPage2SubTitle2Item6')}</p>
                <p>{t('menuPage2SubTitle2Item7')}</p>
                <p>{t('menuPage2SubTitle2Item8')}</p>
                <p>{t('menuPage2SubTitle2Item9')}</p>
            </div>
        </motion.div>
    )
}

