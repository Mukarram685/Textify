import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea"
import { useState } from "react";
function App() {


  const [theme, settheme] = useState('light');
  return (
    <>
      <div className="">
        <Navbar theme={theme} settheme={settheme} />
       <Textarea theme={theme} settheme={settheme}/>
      </div>

    </>
  )
}

export default App
