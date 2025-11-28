import Profile from './components/profile'
import Projects from './components/projects'
import './index.css'
import './style/app.css'

function App() {

  return (
    <>
      <main>

        <section id='container-profile'>
          <Profile />
        </section>

        <h1>Desenvolvimento</h1>
        <section id="container-projects">
          <Projects />
        </section>

        <h1>Web Design</h1>
        <section id="container-WebDesign">
          
        </section>
      </main>

    </>
  )
}

export default App
