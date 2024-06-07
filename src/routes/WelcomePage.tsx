import { useNavigate } from "react-router-dom"

import styles from './WelcomePage.module.css'
import Button from "../components/Button"

export default function WelcomePage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.button}>
                <h2>👰🏻‍♀️ Leticia & Luis 🤵🏼</h2>
                <p>Bem vindos ao nosso website!</p>
                <Button buttonTitle="🍯 Operação Lua de Mel" buttonStyle="fuchsia" buttonOnClick={() => {window.open('https://www.google.com', '_blank')}} />
                <Button buttonTitle="🤳🏼 Filtro do Instagram" buttonStyle="fuchsia" buttonOnClick={() => {window.open('https://www.google.com', '_blank')}} />
                <Button buttonTitle="🎥 Gravar vídeo" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions')}} />
            </div>
        </div>
    )
}