import { useNavigate } from "react-router-dom"

import styles from './WelcomePage.module.css'
import Button from "../components/Button"

export default function WelcomePage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/wedding-sample.jpg" alt="Foto dos noivos" />
            </div>
            <div className={styles.button}>
                <h2>Leticia & Luis</h2>
                <p>Grave sua mensagem para os noivos!</p>
                <Button buttonTitle="Gravar vídeo" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/record', { state: { facing: 'user' } })}} />
            </div>
        </div>
    )
}