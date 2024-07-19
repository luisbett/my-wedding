import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { BiSolidVideoRecording } from "react-icons/bi"
import GoBackButton from "../components/GoBackButton"
import Button from "../components/Button"
import styles from './InstructionsPage1.module.css'

export default function InstructionsPage1() {

    //Navigation hook
    const navigate = useNavigate()
    
    //Get state from location
	const { state } = useLocation()

	//Get facing mode from state
	const { prevComponent } = state

    //Translation hook
    const { t } = useTranslation()

    const effect = prevComponent === 'welcome'
    ? { initial: { x: '100vw' }, animate: { x: 0 } }
    : { initial: { x: '-100vw' }, animate: { x: 0 } };

    return (
        <motion.div
            className={styles.container}
            { ...effect }
            transition={{ type: 'spring', stiffness: 70 }}>
            <GoBackButton buttonOnClick={() => {navigate('/')}} />
            <div className={styles.card}>
                <div className={styles.title}>
                    <BiSolidVideoRecording fill="#EF2B7C" size="27px"/>
                    <h2>{t('instructions1PageTitle')}</h2>
                </div>
                <p>{t('instructions1PageSentence1')}</p>
                <p>{t('instructions1PageSentence2')}</p>
                <Button buttonTitle={t('instructions1PageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions2')}} />
            </div>
        </motion.div>
    )
}

