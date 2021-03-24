import React, {useState} from 'react';
import './NewGoal.css';

const NewGoal = (props) => {
    // let enteredText=''; //1 for fethching user input

    const [enteredText, setEnteredText] = useState ('')

    const addGoalHandler= (event) =>{
        event.preventDefault();
        //(event) parameter is passed automatically by react & preventDefault prevents browser default od sending a request to some backend if we are handling serverside // in our case we are not working with server as of now  
        
        const newGoal={
            id: Math.random().toString(),
            // text: 'My new goal'
            text:enteredText  //4 for fethching user input
        } 
        //JS object, dummy goal hardcoaded

        // enteredText=''; //to reset the new goal we entered
        setEnteredText('');

        console.log (newGoal);
        props.onAddGoal(newGoal);
    }

    // const textChangeHandler= event =>{
    //     enteredText = event.target.value;
    // } //2 for fethching user input

    
    const textChangeHandler= event =>{
        setEnteredText (event.target.value);
    }

   return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler}/> 
            {/* 3  add onchangeHandler  for fethching user input*/}
        <button type="submit">Add Goal</button>
    </form>
    );
};

export default NewGoal;

