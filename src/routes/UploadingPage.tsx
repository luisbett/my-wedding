import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../config/firebase"

import { Hearts } from "react-loading-icons"
import { FaCheck } from "react-icons/fa"

import Button from "../components/Button"

import styles from './UploadingPage.module.css'

export default function UploadingPage() {

	//Navigation hook
	const navigate = useNavigate()

	//Translation hook
    const { i18n, t } = useTranslation()

	//Get state from location
	const { state } = useLocation()

	//Get blob object from state
	const { videoBlob } = state

	//File name
	const dateNow = new Date()
	const fileName = dateNow.toString()

	//States
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {

		//Call API to send video
		const storageRef = ref(storage, fileName)
		const uploadTask = uploadBytesResumable(storageRef, videoBlob)

		uploadTask.on("state_changed",
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
				setPercentage(progress)
			},
			(error) => {
				alert(error)
			}
		)
	},[])

    return (
        <div className={styles.container}>
            { percentage !== 100 ?
			<>
				<Hearts fill="#EF2B7C" />
				<h2>{t('uploadingPageSentence1')}</h2>
				<p>{t('uploadingPageSentence2')}</p>
				<p>{percentage}%</p>
			</> :
			<>
				<FaCheck fill="#EF2B7C" size="35px"/>
				<h2>{t('uploadingPageSentence3')}</h2>
				<Button buttonTitle={t('uploadingPageButton1')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/record', { state: { facing: 'user', currentLang: i18n.language } })}} />
				<Button buttonTitle={t('uploadingPageButton2')} buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
			</> }
        </div>
    )
}