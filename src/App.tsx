import { useState } from 'react';
import Nav from './Pages/Nav/Nav.tsx';
import Content from './Pages/Content/Content.tsx';

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
