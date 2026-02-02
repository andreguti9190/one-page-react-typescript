import style from "./navbar.module.css";
interface contetnProps {
    onButton: (e: number) => void;
}

function Navbar(props: contetnProps) {
    return (<>
        <ul className={style.list}>
            <li onClick={() => { props.onButton(0) }}
                className={style.listElement}>
                <a href="#" className={style.a} >Home</a>
            </li>
            <li onClick={() => { props.onButton(1) }}
                className={style.listElement}>
                <a href="#" className={style.a} >Gustavo Cerati</a>
            </li>
            <li onClick={() => { props.onButton(2) }}
                className={style.listElement}>
                <a href="#" className={style.a} >Charly Garcia</a>
            </li>
            <li onClick={() => { props.onButton(3) }}
                className={style.listElement}>
                <a href="#" className={style.a} >Andres Calamaro</a>
            </li>
        </ul>
    </>)
}

export default Navbar;