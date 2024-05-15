import { Link } from "react-router-dom"

export default function WelcomePage() {
    return (
        <Link to={'/record'}>
            <h1>Gravar vídeo</h1>
        </Link>
    )
}