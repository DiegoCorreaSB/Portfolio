import perfil from '../assets/profile-diego.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../style/profile.css'


const Profile = () => {
    return (
        <>
            <article id='image-profile'>
                <img src={perfil} alt="Foto do Diego Corrêa" />
            </article>

            <article id="description">
                <article id="description-profile">
                    <h1>Olá, seja Bem Vindo!</h1>
                    <p>Olá! Sou Diego Corrêa, tenho 21 anos e atualmente curso Banco de Dados na Universidade Estácio de Sá.
                        Possuo experiência em design digital, trabalhando com Photoshop, Adobe Illustrator e conhecimentos básicos em After Effects. Também atuo na área de desenvolvimento, com habilidades em HTML, CSS, JavaScript, C++ e React.
                        Busco constantemente aprimorar minhas competências e desenvolver soluções criativas, unindo tecnologia e design para entregar experiências eficientes e visualmente atraentes..</p>
                </article>

                <article id="description-icons">
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faLinkedinIn} /> </a>
                    <a href="https://www.instagram.com/dgcorrea__/" target="_blank"> <FontAwesomeIcon className="icon" icon={faInstagram} /> </a>
                    <a href="/curriculo.pdf" download> <FontAwesomeIcon className="icon" icon={faDownload} /> </a>
                </article>
            </article>
        </>
    )
}

export default Profile