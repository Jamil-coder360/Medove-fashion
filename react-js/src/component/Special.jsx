import Button from "./Button";

const Special = (props) => {
  console.log(props);

  return (
    <div className="offer">
      <p>{props.text}</p>
      <h3>{props.heading}</h3>
      <div className="special_button">
      <Button text={props.button} type="dark" />
      </div>
    </div>
  );
};

export default Special;
