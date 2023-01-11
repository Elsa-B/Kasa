import Header from "../../components/Header/header";
import { Link } from "react-router-dom";

function Error(){
    return(
        <>
        <Header/> 
            <main>
                <div>
                    <p className="numero">404</p>
                    <p className="message">Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link className="return"to={`/`}>
                    <p className="line">Retourner sur la page d'accueil</p>
                </Link>
            </main>
        </>
    )
}

export default Error