import React from 'react';
import ModalImage from "react-modal-image";
import classes from './Cards.module.css';

const filterDetails = (card) => {

    if (card.attribute !== undefined) {
        return card.attribute + " / ";
    }
    return "";
}

const modalDescription = (name, desc) => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                {name}
            </div>
            <br></br>
            {desc}

        </>
    );
}

const showLevel = (card) => {
    if (card.level !== undefined) {
        return (" / " + card.level + "⭑");
    }
    return "";
}

const showAtkDef = (card) => {
    if (card.level !== undefined) {
        return ("ATK/ " + card.atk + " DEF/ " + card.def);
    }
    return "";
}

const cards = props => (
    <div className={classes.cardWrapper}>
        <div className={classes.colImg}>
            <ModalImage
                small={props.image}
                large={props.image}
                alt={modalDescription(props.title, props.effect)}
                className="modal"
                style={{ width: 200 }}
            />

            {/* <img src={props.image} alt={props.source} /> */}
        </div>
        <div className={classes.colText}>
            <span id={classes.cardName}>{props.title}</span>
            <br></br>
            <br></br>
            <span id={classes.cardType}>{filterDetails(props)}{props.race} / {props.type}{showLevel(props)}</span>
            <br></br>
            <br></br>
            <p id={classes.atkDef}>{showAtkDef(props)}</p>
            <p id={classes.whereToget}>{props.box}</p>
            <p id={classes.cardDescription}>{props.effect}</p>
        </div>

    </div>
);

export default cards;