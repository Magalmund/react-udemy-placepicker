import {useEffect, useState} from "react";
import ProgressBar from "./ProgressBar.jsx";

const time = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {


    // useEffect(() => {
    //     const progress = setInterval(() => {
    //         console.log('Interval')
    //         setRemainingTime(prevState => prevState - 10)
    //     }, 10);
    //
    //     return () => clearInterval(progress);
    // }, [])


    useEffect(() => {
        console.log('TIMER SET')
        const timer = setTimeout(() => {
            onConfirm();
        }, time);

        return () => {
            console.log('Cleaning up timer')
            clearTimeout(timer);
        }
    }, [onConfirm]);


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
        <ProgressBar time={time}/>
    </div>
  );
}
