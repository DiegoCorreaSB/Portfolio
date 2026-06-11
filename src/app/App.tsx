import './App.css'
import NavBar from '../components/NavBar/NavBar'
import hero from '../assets/hero.png'
import '../index.css'
import './App.css'
import { FaHtml5, FaCss3, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import FloatingLines from '../components/bg-animaded/FloatingLines';

function App() {

  return (
    <>
      <NavBar />
        <div style={{ width: '100%', height: '950px', position: 'absolute' }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={8}
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive={false}
            parallax={true}
            animationSpeed={1}
            gradientStart="#0080ff"
            gradientMid="#121212"
            gradientEnd="#003263"
          />
        </div>
      <section id="hero-section">
        <div className='img-hero'><img src={hero} /></div>
        <div className='info-hero'>
          <div>
            <h1 style={{ fontFamily: 'JetBrains Mono', color: 'var(--accent)' }}>Diego Corrêa</h1>
            <h2 style={{ fontFamily: 'Josefin Slab', color: '#1b73c966' }}>Desenvolvedor em Formação</h2>
          </div>
          <div>
            <p style={{ fontFamily: 'Roboto' }}>Aos 22 anos, sou um estudante de desenvolvimento em constante evolução técnica. Dedico meu tempo a transformar aprendizado em interfaces modernas e intuitivas, aplicando conceitos sólidos de engenharia para entregar código limpo e soluções que realmente conectam as pessoas à tecnologia.</p>
          </div>
          <div className="hero-habilidade">
            <FaHtml5 className='tech-icon html-icon' />
            <FaCss3 className='tech-icon css-icon' />
            <FaPython className='tech-icon py-icon' />
            <FaReact className='tech-icon react-icon' />
            <IoLogoJavascript className='tech-icon js-icon' />
          </div>
        </div>
      </section>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero optio itaque nisi illo non laborum aliquid vitae placeat ex magnam voluptatum porro, dicta et veritatis labore soluta nostrum sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ea sed, delectus id eos rerum voluptatum ducimus quis, et necessitatibus reprehenderit in veritatis exercitationem corrupti unde expedita! Maiores, magni veniam?</p>
    </>
  )
}

export default App
