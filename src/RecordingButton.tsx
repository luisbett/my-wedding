import React, { useState } from 'react';
import styles from './RecordingButton.module.css'; // Import CSS module

interface RecordingButtonProps {
  duration: number; // Duration of recording in seconds
}

const RecordingButton: React.FC<RecordingButtonProps> = ({ duration }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [counter, setCounter] = useState(0);

  const startRecording = () => {
    setIsRecording(true);
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
    return interval;
  };

  const stopRecording = (interval: NodeJS.Timeout) => {
    setIsRecording(false);
    clearInterval(interval);
    setCounter(0);
  };

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      stopRecording(intervalRef.current!);
    } else {
      // Start recording
      intervalRef.current = startRecording();
    }
  };

  const intervalRef = React.useRef<NodeJS.Timeout>();

  return (
    <div className={`${styles['recording-button']} ${isRecording ? styles.recording : ''}`} onClick={toggleRecording}>
      <div className={styles.inner}>
        {isRecording ? (
          <div className={styles.counter}>{counter}s</div>
        ) : (
          <div className={styles.icon}></div>
        )}
      </div>
    </div>
  );
};

export default RecordingButton;
