import perfil from './assets/profile-diego.jpeg'
import './style/app.css'

function App() {

  return (
    <>
      <main>

        <section id='container-profile'>
          <article id='image-profile'>
            <img src={perfil} alt="Foto do Diego Corrêa" />
            <h2>Diego Corrêa Sales Berto</h2>
          </article>

          <article id="description-profile">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, maxime repellat cupiditate dignissimos ratione pariatur eius, fuga illo voluptas atque, commodi maiores inventore rem cumque illum optio eum quas neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iste quo dolorum necessitatibus alias, architecto, rerum officia sit in totam porro fugiat animi ratione veritatis quos rem magni, qui error.</p>
          </article>
        </section>

        <section id="container-formations">
            <h1>Certificados</h1>

            <section className="certificates">
              <h2>INFORMÁTICA BÁSICA  </h2>
              <p> <a href="https://www.prepara.com.br/" target='_blank'>Prepara Cursos</a> - 96  horas - Concluído em agosto/2020</p>
            </section>
            
            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 00: PRIMEIROS PASSOS</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em janeiro/2024</p>
            </section>
            
            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 01: PRIMEIROS COMANDOS</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em janeiro/2024</p>
            </section>

            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 02: CONDICIONAIS</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em janeiro/2024</p>
            </section>

            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 03: REPETIÇÕES</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em fevereiro/2024</p>
            </section>

            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 04: VARIÁVEIS COMPOSTAS</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em fevereiro/2024</p>
            </section>

            <section className="certificates">
              <h2>PROGRAMAÇÃO BÁSICA - MÓDULO 05: ROTINAS</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  - 20 horas - Concluído em fevereiro/2024</p>
            </section>

            <section className="certificates">
              <h2>Desenvolvimento Web 2020 (HTML5 + CSS3) – Módulo 1 de 5 </h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  – 40 horas – Concluído em março/2024</p>
            </section>

            <section className="certificates">
              <h2>DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 2 DE 5 </h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  – 40 horas – Concluído em março/2024</p>
            </section>

            <section className="certificates">
              <h2>DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 3 DE 5</h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  – 40 horas – Concluído em abril/2024</p>
            </section>

            <section className="certificates">
              <h2>DESENVOLVIMENTO WEB 2020 (HTML5+CSS3): MÓDULO 4 DE 5 </h2>
              <p> <a href="https://www.estudonauta.com/" target='_blank'>Estudonauta </a>  – 40 horas – Concluído em abril/2024</p>
            </section>
        </section>

        <section id="container-projects">
          <section className="projects">
            
          </section>

          <section className="projects">
              <h2>Calculadora</h2>
              <p>Projeto de uma calculadora simples utilizando React e CSS. A calculadora permite realizar operações básicas como adição, subtração, multiplicação e divisão.</p>
              <a href="#"> projeto calculadora </a>
          </section>

          <section className="projects">
              <h2>Links para Bio</h2>
              <p>Projeto de uma página de links para bio utilizando React e CSS. A página permite adicionar links personalizados para redes sociais, portfólio, entre outros.</p>

          </section>

          <section className="projects">
              <h2>Lista de Tarefas</h2>
          </section>
        </section>
      </main>

    </>
  )
}

export default App
