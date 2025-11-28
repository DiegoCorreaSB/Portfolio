import '../style/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    return (
        <>
            <article className="project-card">
                <h2>Calculadora</h2>
                <p>Projeto de uma calculadora simples utilizando React e CSS. A calculadora permite realizar operações básicas como adição, subtração, multiplicação e divisão.</p>
                <a href="#"> <FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>


            <article className="project-card">
                <h2>Links para Bio</h2>
                <p>Projeto de uma página de links para bio utilizando React e CSS. A página permite adicionar links personalizados para redes sociais, portfólio, entre outros.</p>
                <a href="#"> <FontAwesomeIcon className="icon" icon={faCode} /> </a>

            </article>

            <article className="project-card">
                <h2>Lista de Tarefas</h2>
                <p>Projeto de uma lista de tarefa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem obcaecati eaque aspernatur inventore ratione ullam totam et dolorum necessitatibus quia, iure laborum numquam id itaque iste veritatis omnis laudantium nihil?</p>
                <a href="#"> <FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>

             <article className="project-card">
                <h2>Lista de Tarefas</h2>
                <p>Projeto de uma lista de tarefa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem obcaecati eaque aspernatur inventore ratione ullam totam et dolorum necessitatibus quia, iure laborum numquam id itaque iste veritatis omnis laudantium nihil?</p>
                <a href="#"> <FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>
        </>
    )
}

export default Projects