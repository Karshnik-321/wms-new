import React, { useEffect, useState } from 'react';

const ProgressBar = ({ isLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer;
        if (isLoading) {
            setProgress(0); // Reset progress when loading starts
            timer = setInterval(() => {
                setProgress(prev => Math.min(prev + 10, 90)); // Increment progress
            }, 100); // Speed of progress increment
        } else {
            setProgress(100); // Complete the progress bar when loading ends
            setTimeout(() => setProgress(0), 500); // Reset progress after completion
        }
        return () => clearInterval(timer); // Clean up timer
    }, [isLoading]);

    return (
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    );
};

export default ProgressBar;
