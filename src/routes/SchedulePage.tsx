import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import styles from './SchedulePage.module.css'

export default function SchedulePage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Programação</h2>
            <p>18:30 - Recepção na Casa Suíça</p>
            <p>20:30 - Abertura do buffet</p>
            <Button buttonTitle="Voltar" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

