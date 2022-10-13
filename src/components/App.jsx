
import { useState } from 'react';
import Notification from './Notificasion/Notificasion';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions'
import { Title } from './Title/Title';
import {StatTitle} from './StatisticsTitle/StatisticsTitle'



export  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  
  const onLeaveFeedback = (options) => {
    switch (options) {
      case 'good':
        setGood(state => state + 1)
        break;
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      case 'bad':
        setBad(state => state + 1)
        break;
      default:
        return;
    }
  };
 const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
      
   const keysOfState = Object.keys(options);

   
   const positivePercentage = () => {
    const positivePercentage = Math.round(
      (good * 100) / countTotalFeedback()
    );
    return positivePercentage || 0;
  };
  
    
  
      
         return (
            <div>
                 <Title title='Please leave feedback' />

                 <FeedbackOptions options={keysOfState}
                      onLeaveFeedback={onLeaveFeedback} />
                <StatTitle title='Statistics' />
                
                 {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
                 
                 
             </div>
        )
    


}

