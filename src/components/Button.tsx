import { ButtonProps } from '../types/button'

import styles from './Button.module.css'

export default function Button({ buttonStyle, buttonTitle, buttonOnClick }: ButtonProps) {
    return (
        <button className={`${styles[buttonStyle]}`} onClick={buttonOnClick}>
            <span>{buttonTitle}</span>
        </button>
    )
}