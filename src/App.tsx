import { useState } from 'react';
import Nav from './Pages/Nav.tsx';
import Content from './Pages/Content.tsx';
import './App.css';

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Nav onButton={ (e)=>{ setPage(e) } }/>
      <Content tag={ page } />
    </>
  )
}

export default App;
