import Header from "../../components/Header/header";
import { Link } from "react-router-dom";

function Error(){
    return(
        <>
        <Header/> 
            <main>
                <section>
                    <p className="numero">404</p>
                    <p className="message">Oups! La page que <span className="send">vous demandez n'existe pas.</span> </p>
                </section>
                <section>
                    <Link className="return"to={`/`}>
                        <p className="messageReturn">Retourner sur la page d'accueil</p>
                    </Link>
                </section>
            </main>
        </>
    )
}

export default Error