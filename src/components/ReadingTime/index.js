import { useEffect } from 'react';

export function ReadingTime({
    content
}) {

    const calculateReadingTime = (text) => {
        const wordsPerMinute = 200;
        const wordCount = text.split(/\s+/).length;
        const estimatedReadingTimeInMinutes = wordCount / wordsPerMinute;
    
        return estimatedReadingTimeInMinutes;
    };
    
    useEffect(() => {
        const readingTimeSpan = document.getElementById("reading-time");
        const estimatedReadingTimeInMinutes = calculateReadingTime(content);

        const minutes = Math.floor(estimatedReadingTimeInMinutes);
        const seconds = Math.round((estimatedReadingTimeInMinutes - minutes) * 60);

        readingTimeSpan.textContent = `${minutes}:${seconds}`;
    }, [content]);

    return (
        <>
            <span className="reading-time" id="reading-time"></span>
        </>
    );
}