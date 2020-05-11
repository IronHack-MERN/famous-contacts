import React, { Fragment } from "react";
import "../css/card.css";
import Button from '../components/Button';

const Card = (props) => {
  const { name, pictureUrl, popularity, action } = props;
  return (
    <Fragment className = 'card-container'>
      <td>
        <img style={{ height: 50 }} src={pictureUrl} alt={name}/>
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <Button
            myProp = {action}
        >
            Delete
        </Button>
      </td>
    </Fragment>
  );
};

export default Card;
