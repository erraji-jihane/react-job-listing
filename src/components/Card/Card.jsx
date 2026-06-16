import './Card.css'

function Card ({title, company, location}){
    return (
        <div className="card"> 
            <h2>{title}</h2>
            <p>{company}</p>
            <p>{location}</p>
        </div>
    );
}
export default Card;