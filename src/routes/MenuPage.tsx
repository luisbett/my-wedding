import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import styles from './MenuPage.module.css'

export default function MenuPage() {

    //Navigation hook
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h2>Cardápio</h2>
            <p><strong>Pratos quentes</strong></p>
            <p>Filé mignon com molho madeira</p>
            <p>Frango ao molho tal</p>
            <p>Lasanha a bolonhesa</p>
            <p><strong>Saladas</strong></p>
            <p>Filé mignon com molho madeira</p>
            <p>Frango ao molho tal</p>
            <p>Lasanha a bolonhesa</p>
            <p><strong>Sobremesas</strong></p>
            <p>Filé mignon com molho madeira</p>
            <p>Frango ao molho tal</p>
            <p>Lasanha a bolonhesa</p>
            <Button buttonTitle="Voltar" buttonStyle="fuchsia" buttonOnClick={() => {navigate('/')}} />
        </div>
    )
}

