import "./Nav.css";

interface ContentProps {
  onButton: (e:number)=>void;
}

function Nav(props:ContentProps) {
  return (
    <>
      <nav className='nav'>
        <div className='nav-item'>
          <h1>Rock Nacional</h1>
        </div>
        <div className='nav-item'>
          <ul className='nav-item-list'>
            <li onClick={ ()=>{ props.onButton(0)} }>Home</li>
            <li onClick={ ()=>{ props.onButton(1)} }>Gustavo Cerati</li>
            <li onClick={ ()=>{ props.onButton(2)} }>Charly Garcia</li>
            <li onClick={ ()=>{ props.onButton(3)} }>Andres Calamaro</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;
