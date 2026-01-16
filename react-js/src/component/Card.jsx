import card_1 from "../assets/card_1.png";
const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card_image">
                <img src={props.img} alt="img" />
            </div>
            <h5>{props.heading}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default Card