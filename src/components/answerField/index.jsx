import { useState, useEffect } from 'react';
import useDebounce from '../../utils/use-debounce'

// eslint-disable-next-line react/prop-types
export const AnswerField = ({ effectMatrix, logUrl }) => {
    const [answer, setAnswer] = useState("");
    const debouncedAnswer = useDebounce(answer, 900);
    useEffect(() => {
        logUrl && fetch(logUrl, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ message: debouncedAnswer })
        })
    }, [debouncedAnswer])

    const handleChange = (e) => {
        setAnswer(e.target.value);
        if (typeof effectMatrix[e.target.value.toUpperCase()] === 'function') {
            effectMatrix[e.target.value.toUpperCase()]();
        } else if (typeof effectMatrix[e.target.value.toUpperCase()] === 'string') {
            alert(effectMatrix[e.target.value.toUpperCase()]);
        }
    };

    return <input type="text" name="name" className='answer' value={answer} onChange={handleChange} autoFocus />
   
}

export default AnswerField;