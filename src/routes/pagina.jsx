import { Link } from "react-router-dom"


export default function Obrigado() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1>
                Obrigado!
            </h1>
            <h1>Em breve entraremos em contato</h1>
            <Link to="/">Home</Link>
        </div>
    )
}