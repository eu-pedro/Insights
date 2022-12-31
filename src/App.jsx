// import logo
import Logo from './assets/Logo.png'

// import components
import Header from './components/Header/index'
import Main from './components/Main/index'



function App() {
 

  return (
    <>
      <Header logo={Logo} textAlt={"Logo insights"}/>
      <Main/>
    </>
  )
}

export default App
