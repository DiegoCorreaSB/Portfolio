import perfil from '../assets/profile-diego.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../style/profile.css'


const Profile = () => {
    return (
        <>

            <section id="container-profile">
                <div id='image-profile'>
                    <img
                        src={perfil}
                        alt="Foto do Diego Corrêa"
                        className="profile-img"
                    />
                </div>

                <div id="description">
                    <div id="description-profile">
                        <h1>Olá, seja Bem Vindo!</h1>
                        <p>Olá! Sou Diego Corrêa, tenho 21 anos e atualmente curso Banco de Dados na Universidade Estácio de Sá.
                            Possuo experiência em design digital, trabalhando com Photoshop, Adobe Illustrator e conhecimentos básicos em After Effects. Também atuo na área de desenvolvimento, com habilidades em HTML, CSS, JavaScript, C++ e React.
                            Busco constantemente aprimorar minhas competências e desenvolver soluções criativas, unindo tecnologia e design para entregar experiências eficientes e visualmente atraentes..</p>
                    </div>

                    <div id="description-icons">
                        <a href="https://github.com/DiegoCorreaSB" title='Meu GitHub' target='_blank'> <FontAwesomeIcon className="icon" icon={faGithub} /> </a>
                        <a href="https://www.linkedin.com/in/diego-berto-7622902b2/" title='Linkedin' target='_blank'> <FontAwesomeIcon className="icon" icon={faLinkedinIn} /> </a>
                        <a href="https://www.instagram.com/dgcorrea__/" target="_blank" title='Instagram'> <FontAwesomeIcon className="icon" icon={faInstagram} /> </a>
                        <a href="https://w.app/olpegu" target="_blank" title='WhatsApp'> <FontAwesomeIcon className="icon" icon={faWhatsapp} /> </a>
                        <a href="/curriculo.pdf" download title='Meu Currículo'> <FontAwesomeIcon className="icon" icon={faDownload} /> </a>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Profile