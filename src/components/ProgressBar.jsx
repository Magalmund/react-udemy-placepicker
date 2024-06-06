import React, {useEffect, useState} from 'react';

const ProgressBar = ({time}) => {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const progress = setInterval(() => {
            console.log('Interval')
            setRemainingTime(prevState => prevState - 10)
        }, 10)

        return () => clearInterval(progress);
    }, [])

    return (
        <>
            <progress value={remainingTime} max={time}/>
        </>
    );
};

export default ProgressBar;
