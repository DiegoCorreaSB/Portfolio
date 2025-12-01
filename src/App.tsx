import Profile from './components/profile'
import Projects from './components/projects'
import Webdesigner from './components/webDesigner/webDesigner'
import './index.css'
import './style/app.css'

function App() {

  return (
    <>
      <main>

        <Profile />

        <Projects />
        
        <h1 style={{ marginTop: "150px" }}>Designer Digital</h1>

        <section id="container-WebDesign">
          <Webdesigner />
        </section>
      </main>

    </>
  )
}

export default App
