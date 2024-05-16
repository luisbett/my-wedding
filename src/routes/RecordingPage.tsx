import { useNavigate } from "react-router-dom"

import { useReactMediaRecorder } from "react-media-recorder-2"

import VideoPreview from "../components/VideoPreview"
import RecordingButton from "../components/RecordingButton"
import { useState } from "react"

export default function RecordingPage() {

    //Navigation hook
	const navigate = useNavigate()

	//State for contronlling facing mode
	const [ facing, setFacing ] = useState('user')

	//useMediaRecorder hook
	const { startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: { facingMode: { exact: facing } }, askPermissionOnMount: true, onStop(_blobUrl, blob) {
		navigate('/upload', { state: { videoBlob: blob } } )
	} })

	//Toggle camera facing mode
	const toggleCamera = () => {
		if(facing === 'user') {
			setFacing('environment')
		} else {
			setFacing('user')
		}
	}

    return (
        <>
			{!mediaBlobUrl && <VideoPreview stream={previewStream} />}
			<RecordingButton onStart={startRecording} onStop={stopRecording} duration={15} />
			<button onClick={toggleCamera}>Test</button>
		</>
    )
}