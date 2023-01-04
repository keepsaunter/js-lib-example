import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageSvgTranslate from './page/svg-translate';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/svg-translate" element={<PageSvgTranslate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
