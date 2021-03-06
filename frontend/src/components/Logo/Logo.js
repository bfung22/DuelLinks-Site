import React from 'react';
import links from '../../assets/images/Links.PNG';
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={links} alt="Duel Links Logo" />
    </div>
);

export default logo;