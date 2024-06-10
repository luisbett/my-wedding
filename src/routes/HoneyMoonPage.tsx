import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import toast from "react-hot-toast"

import Button from "../components/Button"

import styles from './HoneyMoonPage.module.css'

export default function HoneyMoonPage() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('honeyMoonPageTitle')}</h2>
            <p>{t('honeyMoonPageSentence1')}</p>
            <Button buttonTitle={t('honeyMoonPageButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigator.clipboard.writeText('07022422923'),toast.success(t('honeyMoonPageToast'))}} />
            <Button buttonTitle={t('goBackButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}