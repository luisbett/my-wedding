import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import styles from './InstructionsPage.module.css'

export default function InstructionsPage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Instruções</h2>
            <p>1. Na próxima tela, clique em "Permitir" para que seja possível a gravação do vídeo no seu celular.</p>
            <p>2. Cada vídeo pode ter uma duração máxima de 30 segundos. No entanto, você pode gravar quantos vídeos desejar. 😀</p>
            <Button buttonTitle="Entendi!" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/record', { state: { facing: 'user' } })}} />
        </div>
    )
}

