import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Button from "../components/Button"

import styles from './InstructionsPage1.module.css'

export default function InstructionsPage1() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('instructions1PageTitle')}</h2>
            <p>{t('instructions1PageSentence1')}</p>
            <p>{t('instructions1PageSentence2')}</p>
            <Button buttonTitle={t('instructions1PageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions2')}} />
            <Button buttonTitle={t('goBackButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

