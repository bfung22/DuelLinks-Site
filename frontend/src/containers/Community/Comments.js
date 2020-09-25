import React from 'react';

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";


import './Comments.css';

const formatDateAndTime = (dateTime) => {
    dateTime = new Date(dateTime);
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = '0'+ (today.getMonth()+1).toString().slice(-2);
    const currentDay = today.getDate().toString().slice(-2);

    const getYear = dateTime.getFullYear();
    const getMonth = '0' + (dateTime.getMonth()+1).toString().slice(-2);
    const getDay = dateTime.getDate().toString().slice(-2);
    const getHour = dateTime.getHours();
    const getMinute = ('0' + dateTime.getMinutes()).toString().slice(-2);
    const timeStamp = getHour > 11 ? 
    (getHour-12).toString() + ':' + getMinute + 'pm' : 
    getHour + ':' + getMinute;

    // console.log('getYear: ' , getYear);
    // console.log('getMonth: ' , getMonth);
    // console.log('getDay: ' , getDay);
    // console.log('getHour: ' , getHour);
    // console.log('getMinute: ' , getMinute);
    
    const yearDifference = (currentYear - getYear)*30;
    const monthDiffercence = (currentMonth - getMonth)*30;
    const dayDifference = Math.abs(currentDay - getDay);

    // console.log('currentDay: ', currentDay);
    // console.log('getDay: ', getDay);
    // console.log('difference: ', dayDifference);
    
    const result = dayDifference === 0 ? 'Today' : (dayDifference > 1 ? dayDifference + ' days ago ' : ' Yesterday');
    // console.log('result: ', result);
    return result === 'Today' || result === 'Yesterday' ? result + ' ' + timeStamp : result;
}

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="Comment-sidebar">
                <ArrowUpwardIcon className="upvote" onClick={props.clickedUp} />
                <span>{props.upvotes}</span>
                <ArrowDownwardIcon className="downvote" onClick={props.clickedDown} />
            </div>
            <div className="Comment-title">
                <span className="Comment-user">{formatDateAndTime(props.time)} </span>
                <span className="Comment-user">Posted by </span>
                <span className="Comment-user underline">{props.username}</span>
                
                
                <div className="spacer"></div>
            </div>
            <div className="Comment-body">
                <span className="Body">{props.body}</span>
            </div>
        </div>
    );
}

export default Comment;