import React from 'react';
import  './GoalList.css';

const GoalList = (props) => {
    console.log(props.goals);
    return (
      <ul className="goal-list">
        {/* <li>Finish the course</li>
        <li>Learn all about the course Main Topic</li>
        <li>Help other students in the Course Q&amp;A</li> */}

        {
         props.goals.map ((goal)=>{
           return <li key={goal.id}>{goal.text}</li>
         })
        }
      </ul>
    );
};

export default GoalList;