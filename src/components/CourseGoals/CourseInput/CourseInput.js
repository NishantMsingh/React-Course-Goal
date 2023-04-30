import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsClicked(true);
      return;
    }

    setIsValid(true);
    setIsClicked(false);
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{ color: !isValid ? 'red' : 'blue' }}>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button
  type="submit"
  style={{
    backgroundColor: isClicked && enteredValue.trim().length === 0 ? 'red' : 'blue',
  }}
>
  Add Goal
</Button>

    </form>
  );
};

export default CourseInput;
