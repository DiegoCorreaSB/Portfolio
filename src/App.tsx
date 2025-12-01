import Profile from './components/profile'
import Projects from './components/projects'
import Webdesigner from './components/webDesigner'
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

        <h1 style={{marginTop: "150px"}}>Web Designer</h1>
        <section id="container-WebDesign">
          <Webdesigner />
        </section>
      </main>

    </>
  )
}

export default App
