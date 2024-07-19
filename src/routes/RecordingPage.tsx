import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useReactMediaRecorder } from "react-media-recorder-2"
import { IoIosReverseCamera } from "react-icons/io"
import VideoPreview from "../components/VideoPreview"
import RecordingButton from "../components/RecordingButton"
import styles from './RecordingPage.module.css'

export default function RecordingPage() {

    //Navigation hook
	const navigate = useNavigate()

	//Translation hook
    const { i18n } = useTranslation()

	//Get state from location
	const { state } = useLocation()

	//Get facing mode from state
	const { facing, currentLang } = state

	//Effect to change language
	useEffect(() => {

		//Set language from state
		i18n.changeLanguage(currentLang)

	},[currentLang])

	//useMediaRecorder hook
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: { facingMode: { exact: facing } }, askPermissionOnMount: true, onStop(_blobUrl, blob) {
		navigate('/upload', { state: { videoBlob: blob } } )
	} })

    return (
        <div className={styles.container}>
			{!mediaBlobUrl && <VideoPreview stream={previewStream} facing={facing} />}
			<RecordingButton onStart={startRecording} onStop={stopRecording} duration={30} />
			{ status !== 'recording' &&
			<div className={styles.camera}>
				<Link to={'/record'} state={{ facing: facing === 'user' ? 'environment' : 'user', currentLang: i18n.language }} onClick={() => { window.location.reload() }} >
					<IoIosReverseCamera fill="#FFFFFF" size="35px" />
				</Link>
			</div> }
		</div>
    )
}