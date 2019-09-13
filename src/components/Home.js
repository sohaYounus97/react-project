import React, { Component } from 'react';
import { Player } from 'video-react';
import bg from '../components/img/gym1.jpeg';
import bg2 from '../components/img/bg2.jpg';



const bg1={
  width: '50%',
  height: '470px',

}
const bgg2={
  width: '50%',
  height: '470px',
  left: '80%',

}


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{color: 'blue', alignItem: 'center'}}>Home</h1>
        <p>We know daily exercise is good for optimizing health. But with so many options and limitless information available, it’s easy to get overwhelmed with what works. But not to worry. We’ve got your back (and body)!
          <br/>
          <br/>
          Check out the exercises you can do for ultimate fitness. Combine them into a routine for a workout that’s simple but powerful and sure to keep you in shape for the rest of your life. After 30 days — although you can also do them just twice a week — you should see improvements in your muscular strength, endurance, and balance.
             <br/> <br/>
         Plus, notice a difference in how your clothes fit — winning!
         You can try the following exercise to...
         <br/>
         <img style={bg1} src={bg} alt="iamge"/>
         <img style={bgg2} src={bg2} alt="iamge"/>

        </p>
        <br/> <br/>
        <div>
          <h1 style={{color: 'blue', alignItem: 'center'}}>Exercise Tips</h1>
          <p>One surefire way to attack your fitness regimen effectively? Keep the fuss to a minimum and stick with the basics.</p>
      
            <h4>1: Lunges</h4>
            <p>Challenging your balance is an essential part of a well-rounded exercise routine. Lunges do just that, promoting functional movement, while also increasing strength in your legs and glutes.</p>
              
              <ol>
                <li>Start by standing with your feet shoulder-width apart and arms down at your sides</li>
                <li>Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past your right foot.</li>
                <li>Push up off your right foot and return to the starting position. Repeat with your left leg. This is one rep.</li>
                <li>Complete 10 reps for 3 sets.</li>
                <br/>
                <Player style={{ width: '50%',height: '50%',}}>
                  <source src="https://ak4.picdn.net/shutterstock/videos/25093514/preview/stock-footage-young-woman-exercising-at-home-doing-lunges.webm"/>
                   </Player>
            </ol>
            <hr/>
            <h4>2: Push-Ups</h4>
            <p>Why it's a winner: Push-ups strengthen your chest, shoulders, triceps, and core muscles.</p>
              
              <ol>
                <li>Facing down, place your hands slightly wider than shoulder-width apart.</li>
                <li>Place your toes on the floor. If that's too hard, start with your knees on the floor.</li>
                <li>Your body should make a straight line from shoulders to knees or feet.</li>
                <li>Keep your rear-end muscles and abs engaged. Bend your elbows to lower down until you almost touch the floor.</li>
                <li>Lift back up by pushing through your elbows, Keep your torso in a straight line throughout the move.</li>
                     <br/>
                <Player>
                  <source src="https://ak8.picdn.net/shutterstock/videos/30307858/preview/stock-footage-athletic-beautiful-woman-does-push-ups-as-part-of-her-cross-fitness-bodybuilding-gym-training.webm"/>
                   </Player>
            </ol>
            <hr/>
           {/* <h4>3: Dumbbell Bench Press</h4>
            <p>Using dumbbells allows a greater range of motion than using a barbell and this in turn means you can work more of the pec muscles during the exercise. Your pecs are the main muscles targeted by the exercise, but as an added bonus it also works your triceps.</p>
              
              <ol>
                <li>Lie back on a bench holding a dumbbell in each hand just to the sides of your shoulders. </li>
                <li>Your palms should be facing towards your feet in the starting position, although if you have shoulder issues then switch to a neutral grip, where the palms face each other.</li>
                <li>Press the weights above your chest by extending your elbows until your arms are straight, then bring the weights back down slowly. </li>
               
                   <br/>
                <Player>
                  <source src="https://youtu.be/h8qNmVJ_jI8"/>
                   </Player>
           </ol>*/}
        </div>
        

      </div>
    )
  }
}