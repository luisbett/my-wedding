import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Button from "../components/Button"

import styles from './MenuPage.module.css'

export default function MenuPage() {

    //Navigation hook
    const navigate = useNavigate()

    //Translation hook
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('menuPageTitle')}</h2>
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
            <Button buttonTitle="Voltar" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

