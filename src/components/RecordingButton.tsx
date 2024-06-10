import React, { useState } from 'react'

import { RecordingButtonProps } from '../types/recordingButton'

import { MdFiberManualRecord } from 'react-icons/md'

import styles from './RecordingButton.module.css'

export default function RecordingButton({ onStart, onStop, duration }: RecordingButtonProps) {

	//States
	const [isRecording, setIsRecording] = useState(false)
	const [counter, setCounter] = useState(0)

	//Start recording
	const startRecord = () => {

		//Set state
		setIsRecording(true)

		//Start recording function
		onStart()
		
		//Set timer counter
		const interval = setInterval(() => {
			setCounter(prevCounter => {
				if (prevCounter >= duration) {
					// If counter exceeds duration, stop the recording
					stopRecord(interval)
					return prevCounter
				}
				return prevCounter + 1
			})
		}, 1000)

		return interval
	};

	//Stop recording
	const stopRecord = (interval: NodeJS.Timeout) => {

		//Set state
		setIsRecording(false)

		//Stop recording function
		onStop()

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

	const intervalRef = React.useRef<NodeJS.Timeout>();

	return (
		<div className={styles.container}>
			<div className={`${styles['timer']} ${isRecording ? styles.recording : ''}`}>
				<MdFiberManualRecord />
				{counter}s
			</div>
			<div className={`${styles['recording-button']} ${isRecording ? styles.recording : ''}`} onClick={toggleRecording}>
				<div className={styles.inner}></div>
			</div>
		</div>
	);
};
