
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Leftsidebar from './Leftsidebar'
import Rightsidebar from './Rightsidebar'
import Maincontent from './Maincontent'

function App() {
  

  return (
    <>
    <div className="Application">
      <Header/>
          <Nav/>
      <div className="Layout">
      <Leftsidebar/>
          <Rightsidebar/>
          <Maincontent/>
          <Footer/>
    </div>
    </div>
          </>
  )
}

export default App
