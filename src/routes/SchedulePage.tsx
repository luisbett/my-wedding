import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import styles from './SchedulePage.module.css'
import { useTranslation } from "react-i18next"

export default function SchedulePage() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('schedulePageTitle')}</h2>
            <p>{t('schedulePageItem1')}</p>
            <p>{t('schedulePageItem2')}</p>
            <p>{t('schedulePageItem3')}</p>
            <Button buttonTitle={t('goBackButton')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

