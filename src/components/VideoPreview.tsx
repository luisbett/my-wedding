import { useEffect, useRef } from "react"

import styles from './VideoPreview.module.css'

export default function VideoPreview({ stream }: { stream: MediaStream | null }) {

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current && stream) {
			videoRef.current.srcObject = stream;
		}
	}, [stream]);

	if (!stream) {
		return null;
	}

	return <video className={styles.video} ref={videoRef} autoPlay />;
};