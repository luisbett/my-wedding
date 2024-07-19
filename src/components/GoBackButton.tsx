import { GoBackButtonProps } from '../types/goBackButton'
import { IoIosArrowBack } from 'react-icons/io'

import styles from './GoBackButton.module.css'

export default function GoBackButton({ buttonOnClick }: GoBackButtonProps) {
    return (
        <button className={styles.button} onClick={buttonOnClick}>
            <IoIosArrowBack fill="#FFFFFF" size="35px" />
        </button>
    )
}