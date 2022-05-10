import './styles.css';

interface Cardprops {
    name: string;
    time: string;
}

export function Card(props: Cardprops){


    return (
        <div className="cards">

            <div className="card">
                <strong>{props.name}</strong>
                <small>{props.time}</small>
            </div>

            <div className="trashcard">
                <button 
                type="button" 
                className="btn-trash"
                ></button>
            </div>

        </div>
    )
}