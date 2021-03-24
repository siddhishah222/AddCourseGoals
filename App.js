import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
// const App = () => {
//   return <h1 title="This works">A React App!</h1>;
//   // return React.createElement ('h1',{title="This works"},'A React App!');
// };


const App = () =>{

  const [courseGoals, setCourseGoals] =useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&amp;A'}
  ])
  //this tells react that this is my initial state and it should not be ignored 
  //we can have multiple useState or hooks and all are managed independently

  // const courseGoals = [
  //   {id: 'cg1', text: 'Finish the course'},
  //   {id: 'cg2', text: 'Learn all about the course Main Topic'},
  //   {id: 'cg3', text: 'Help other students in the Course Q&amp;A'}
  // ];

  const addNewGoalHandler=(newGoal)=>{
    // courseGoals.push(newGoal); //push oldgoal to newgoal to o/p both old and new goal
    // console.log(courseGoals);

    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal);
    })
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
