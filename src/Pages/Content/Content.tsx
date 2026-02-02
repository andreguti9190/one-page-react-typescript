import "./Content.css";

interface ContentProps {
    tag: number;
}

const tag = [
    {
        name: "Home",
        content: "Elija un cantante"
    },
    {
        name: "Gustavo Cerati",
        content: "Cantante del rock argentino"
    },
    {
        name: "Charly Garcia",
        content: "Cantante del rock argentino"
    },
    {
        name: "Andres Calamaro",
        content: "Cantante del rock argentino"
    }
]

function Content(props: ContentProps) {
    return (
        <>
            <div className="content">
                <img src="./logo.jpg" alt="" />
                <h1>{tag[props.tag].name}</h1>
                <p>{tag[props.tag].content}</p>
            </div>
        </>
    );
}

export default Content;
