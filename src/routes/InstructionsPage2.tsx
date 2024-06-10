import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Button from "../components/Button"

import styles from './InstructionsPage2.module.css'

export default function InstructionsPage2() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('instructions2PageTitle')}</h2>
            <p>{t('instructions2PageSentence1')}</p>
            <p>{t('instructions2PageSentence2')}</p>
            <Button buttonTitle={t('instructions2PageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/record', { state: { facing: 'user' } })}} />
            <Button buttonTitle={t('goBackButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions1')}} />
        </div>
    )
}

