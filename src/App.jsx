import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3' 
import App4 from './components/App4'
import App5 from './components/App5'
import App6 from './components/App6'
import App7 from './components/App7'
import App8 from './components/App8'
import App9 from './components/App9'
import App10 from './components/App10'
import App11 from './components/App11'
import App12 from './components/App12'
function App() {
  return (
      <BrowserRouter>
        <div>
          <Link to="app1">App1</Link>--
          <Link to="app2">App2</Link>--
          <Link to="App3">App3</Link>--
          <Link to="App4">App4</Link>--
          <Link to="App5">App5</Link>--
          <Link to="App6">App6</Link>--
          <Link to="App7">App7</Link>--
          <Link to="App8">App8</Link>--
          <Link to="App9">App9</Link>--
          <Link to="App10">App10</Link>--
          <Link to="App11">App11</Link>--
          <Link to="App12">App12</Link>
          <hr/>
        </div>
        <div>
          <Routes>
            <Route index element={<App1/>}/>
            <Route path="app1" element={<App1/>}/>
            <Route path="app2" element={<App2/>}/>
            <Route path="app3" element={<App3/>}/>
            <Route path="app4" element={<App4/>}/>
            <Route path="app5" element={<App5/>}/>
            <Route path="app6" element={<App6/>}/>
            <Route path="app7" element={<App7/>}/>
            <Route path="app8" element={<App8/>}/>
            <Route path="app9" element={<App9/>}/>
            <Route path="app10" element={<App10/>}/>
            <Route path="app11" element={<App11/>}/>
            <Route path="app12" element={<App12/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
