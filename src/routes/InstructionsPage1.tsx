import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import styles from './InstructionsPage1.module.css'

export default function InstructionsPage1() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Gravar vídeo</h2>
            <p>Fique a vontade para gravar sua mensagem para os noivos e também para gravar momentos dessa noite que será muito especial!</p>
            <p>Ao finalizar a gravação do vídeo, ele será enviado automaticamente para os noivos.</p>
            <Button buttonTitle="Gravar vídeo" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/instructions2')}} />
            <Button buttonTitle="Voltar" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

