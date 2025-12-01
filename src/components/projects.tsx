import '../style/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    return (
        <>
            <article className="project-card">
                <h2>Calculadora</h2>
                <p>Projeto de uma calculadora simples utilizando React e CSS. A calculadora permite realizar operações básicas como adição, subtração, multiplicação e divisão.</p>
                <a href="https://diegocorreasb.github.io/Calculator/" target='_blank'>ver mais<FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>


            <article className="project-card">
                <h2>Links para Bio</h2>
                <p>Projeto de uma página de links para bio utilizando React e CSS. A página permite adicionar links personalizados para redes sociais, portfólio, entre outros.</p>
                <a href="https://diegocorreasb.github.io/Bio-Links/" target='_blank' >ver mais<FontAwesomeIcon className="icon" icon={faCode} /> </a>

            </article>

            <article className="project-card">
                <h2>Lista de Tarefas</h2>
                <p>Projeto de uma aplicação de lista de tarefas desenvolvida em React com estilização em CSS.
                    A página permite adicionar, editar, marcar como concluídas e excluir tarefas de forma simples e intuitiva.
                    O layout segue um estilo moderno, inspirado em páginas de links para bio, com elementos centralizados, cartões translúcidos e efeitos suaves de transição. </p>
                <a href="#">ver mais<FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>

            <article className="project-card">
                <h2>Lista de Tarefas</h2>
                <p>Projeto de uma lista de tarefa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem obcaecati eaque aspernatur inventore ratione ullam totam et dolorum necessitatibus quia, iure laborum numquam id itaque iste veritatis omnis laudantium nihil?</p>
                <a href="#">ver mais<FontAwesomeIcon className="icon" icon={faCode} /> </a>
            </article>
        </>
    )
}

export default Projects