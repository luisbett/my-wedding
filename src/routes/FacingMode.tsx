import { Link } from "react-router-dom"

import styles from './FacingMode.module.css'

export default function FacingMode() {
    return (
        <div className={styles.container}>
            <Link to={'/record'} state={{ facing: 'user' }}>
                <h1>Camera frontal</h1>
            </Link>
            <Link to={'/record'} state={{ facing: 'environment' }}>
                <h1>Camera traseira</h1>
            </Link>
        </div>
    )
}