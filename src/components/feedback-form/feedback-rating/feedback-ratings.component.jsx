import React, { useState } from 'react';
import './feedback-ratings.style.css';

const FeedbackRatings = ({ selectRating }) => {
    const [rating, setRating] = useState(10);

    const handleSelect = ev => {
        setRating(+ev.target.value);
        selectRating(+ev.target.value);
    }

    return(
        <div className='feedback-rating'>
            <div>
                <input type="radio" id="num1" name="num1" value="1" onChange={handleSelect} checked={rating === 1} />
                <label htmlFor="num1">1</label>
            </div>
            <div>
                <input type="radio" id="num2" name="num2" value="2" onChange={handleSelect} checked={rating === 2}/>
                <label htmlFor="num1">2</label>
            </div>

            <div>
                <input type="radio" id="num3" name="num3" value="3" onChange={handleSelect} checked={rating === 3}/>
                <label htmlFor="num1">3</label>
            </div>
            <div>
                <input type="radio" id="num4" name="num4" value="4" onChange={handleSelect} checked={rating === 4}/>
                <label htmlFor="num1">4</label>
            </div>
            <div>
                <input type="radio" id="num5" name="num5" value="5" onChange={handleSelect} checked={rating === 5}/>
                <label htmlFor="num1">5</label>
            </div>
            <div>
                <input type="radio" id="num6" name="num6" value="6" onChange={handleSelect} checked={rating === 6}/>
                <label htmlFor="num1">6</label>
            </div>
            <div>
                <input type="radio" id="num7" name="num7" value="7"onChange={handleSelect} checked={rating === 7} />
                <label htmlFor="num1">7</label>
            </div>
            <div>
                <input type="radio" id="num8" name="num8" value="8" onChange={handleSelect} checked={rating === 8}/>
                <label htmlFor="num1">8</label>
            </div>
            <div>
                <input type="radio" id="num9" name="num9" value="9" onChange={handleSelect} checked={rating === 9}/>
                <label htmlFor="num1">9</label>
            </div>
           <div>
                <input type="radio" id="num10" name="num10" value="10" onChange={handleSelect} checked={rating === 10} />
                <label htmlFor="num1">10</label>
           </div>
        </div>
    )
}

export default FeedbackRatings;