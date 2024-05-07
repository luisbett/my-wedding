import React, { useState } from "react"
import { useReactMediaRecorder } from "react-media-recorder-2"
import { storage } from './firebase'
import { ref, uploadBytesResumable } from "firebase/storage"
import VideoPreview from "./VideoPreview"
import styles from './App.module.css'

function App() {

	//States
	const [isRecording, setIsRecording] = useState(false)
	const [counter, setCounter] = useState(0)
	const [percentage, setPercentage] = useState(0)

	//useMediaRecorder hook
	const { startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: true, askPermissionOnMount: true, onStop(_blobUrl, blob) {
		uploadVideo(blob)
	}, })

	//When the video stops and the blob is generated
	const uploadVideo = (blob: Blob) => {

		//Call API to send video
		const storageRef = ref(storage, 'test')
		const uploadTask = uploadBytesResumable(storageRef, blob)

		uploadTask.on("state_changed",
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
				setPercentage(progress)
			},
			(error) => {
				alert(error)
			}
		)
	}

	//Start recording
	const startRecord = () => {

		//Set state
		setIsRecording(true)

		//Start recording function
		startRecording()
		
		//Set timer counter
		const interval = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1)
		}, 1000)
		
		return interval
	};

	//Stop recording
	const stopRecord = (interval: NodeJS.Timeout) => {

		//Set state
		setIsRecording(false)

		//Stop recording function
		stopRecording()

		//Clear counter
		clearInterval(interval)

		//Reset counter
		setCounter(0)

	};

	//Toggle recording
	const toggleRecording = () => {

		if (isRecording) {
			// Stop recording
			stopRecord(intervalRef.current!)
		} else {
			// Start recording
			intervalRef.current = startRecord()
		}
	};

	//Set interval reference
	const intervalRef = React.useRef<NodeJS.Timeout>()

	return (
		<div className={styles.container}>
			{!mediaBlobUrl && <VideoPreview stream={previewStream} />}
			<div className={`${styles['recording-button']} ${isRecording ? styles.recording : ''}`} onClick={toggleRecording}>
				<div className={styles.inner}>
					{isRecording ? (
					<div className={styles.counter}>{counter}s</div>
					) : (
					<div className={styles.icon}></div>
					)}
				</div>
			</div>
			{ mediaBlobUrl && <>
				<p>Estamos enviando seu vídeo</p>
				<p>{percentage}%</p>
			</> }
		</div>
	);
};

export default App