import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import Button from "../components/Button"

import styles from './HoneyMoonPage.module.css'

export default function HoneyMoonPage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Operação Lua de Mel</h2>
            <p>Caso queira ajudar com a operação lua de mel, copie a chave pix abaixo:</p>
            <Button buttonTitle="Copiar chave pix" buttonStyle="fuchsia" buttonOnClick={() => {navigator.clipboard.writeText('07022422923'),toast.success('Copiado com sucesso!')}} />
            <Button buttonTitle="Voltar" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}