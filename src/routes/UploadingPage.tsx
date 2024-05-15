import { useEffect, useState } from "react"

import { Link, useLocation } from "react-router-dom"

import { ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../config/firebase"

import styles from './UploadingPage.module.css'

export default function UploadingPage() {

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
            { percentage !== 100 
			? <>
				<h1>Estamos enviando o seu vídeo</h1>
				<p>{percentage}%</p>
			</>
			: <>
				<h1>Seu vídeo foi enviado!</h1>
				<Link to={'/'}>
					<h2>Gravar outro vídeo</h2>
				</Link>
			</> }
			
        </div>
    )
}