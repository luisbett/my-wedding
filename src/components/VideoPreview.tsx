import { useEffect, useRef } from "react"

import { VideoProps } from "../types/video"

import styles from './VideoPreview.module.css'

export default function VideoPreview({ stream, facing }: VideoProps) {

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current && stream) {
			videoRef.current.srcObject = stream;
		}
	}, [stream]);

	if (!stream) {
		return null;
	}

	return <video className={`${styles['video']} ${facing === 'user' ? styles.flip : ''}`} ref={videoRef} autoPlay playsInline />;
};