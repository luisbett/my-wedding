import { useNavigate } from "react-router-dom"

import { useReactMediaRecorder } from "react-media-recorder-2"

import VideoPreview from "../components/VideoPreview"
import RecordingButton from "../components/RecordingButton"

export default function RecordingPage() {

    //Navigation hook
	const navigate = useNavigate()

	//useMediaRecorder hook
	const { startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: true, askPermissionOnMount: true, onStop(_blobUrl, blob) {
		navigate('/upload', { state: { videoBlob: blob } } )
	}, })

	//{!mediaBlobUrl && <VideoPreview stream={previewStream} />}

    return (
        <>
			<RecordingButton onStart={startRecording} onStop={stopRecording} duration={15} />
		</>
    )
}