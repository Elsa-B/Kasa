import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import ErrorCss from "../Error/error.css";

function Error(){
    return(
        <>
        <Header/> 
            <main>
                <div>
                    <p className={ErrorCss.numero}>404</p>
                    <p className={ErrorCss.message}>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link className={ErrorCss.return}to={`/`}>
                    <p className={ErrorCss.line}>Retourner sur la page d'accueil</p>
                </Link>
            </main>
        </>
    )
}

export default Error