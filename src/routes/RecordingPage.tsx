import { Link, useLocation, useNavigate } from "react-router-dom"

import { useReactMediaRecorder } from "react-media-recorder-2"

import VideoPreview from "../components/VideoPreview"
import RecordingButton from "../components/RecordingButton"

export default function RecordingPage() {

    //Navigation hook
	const navigate = useNavigate()

	//Get state from location
	const { state } = useLocation()

	//Get facing mode from state
	const { facing } = state

	//useMediaRecorder hook
	const { startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: { facingMode: { exact: facing } }, askPermissionOnMount: true, onStop(_blobUrl, blob) {
		navigate('/upload', { state: { videoBlob: blob } } )
	} })

    return (
        <>
			{!mediaBlobUrl && <VideoPreview stream={previewStream} />}
			<RecordingButton onStart={startRecording} onStop={stopRecording} duration={15} />
			<Link to={'/record'} state={{ facing: facing === 'user' ? 'environment' : 'user' }}>
				<h1>Change camera</h1>
			</Link>
		</>
    )
}