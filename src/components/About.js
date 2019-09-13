import React, { Component } from 'react';
import bgimg from '../components/img/about-img.jpg';
import Carousel from 'react-bootstrap/Carousel';
import exc2 from '../components/img/exc2.png';
import about from '../components/img/about-img.jpg';
import exc5 from '../components/img/exc5.jpg';
import exc3 from '../components/img/exc3.png';
import exc4 from '../components/img/exc4.png';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import food1 from '../components/img/food1.jpg';
import food2 from '../components/img/food2.jpg';
import food5 from '../components/img/food5.jpg';
import food4 from '../components/img/food4.jpg';







const bg1={
  width: '100%',
  height: '470px',

} 
const containerr={
   // justifyContent: "center",
    //alignItem: "center",
    color: 'blue',
    display: 'flex',
}
const cardstyle={
    border: '2px solid #7a7a52',
    backgroundColor: '#d4d4aa',
    margin: '10px',
}




export default class About extends Component {
  render() {
    return (
      <div>
<Carousel>
     <Carousel.Item>
      <img style={{height: 500}}
      className="d-block w-100" src={about} alt="First slide"/>
     </Carousel.Item>
     <Carousel.Item>
      <img style={{height: 500}}
      className="d-block w-100" src={exc2} alt="First slide"/>
     </Carousel.Item>
     <Carousel.Item>
     <img style={{height: 500}}
      className="d-block w-100" src={exc3} alt="First slide"/>
     </Carousel.Item>
     <Carousel.Item>
      <img style={{height: 500}}
      className="d-block w-100" src={exc4} alt="First slide"/>
     </Carousel.Item>
     <Carousel.Item>
      <img style={{height: 500}}
      className="d-block w-100" src={exc5} alt="First slide"/>
     </Carousel.Item>
 </Carousel>



         <div className = "container">
        <h1 style={containerr}>About</h1>
        <p style={{fontWeight: 'bold'}}>Our goal is to make health and fitness attainable, affordable and approachable.</p>
        <br/>
        <h2 style={{color: 'blue', alignItem: 'center'}}>Created to help you live a better, happier, healthier life.</h2>
        <p style={{fontWeight: 'bold'}}> In this fitness website user can create your exercise log and view the previous exercise. User can also edit and delete your exercise on the daily basic.watch the exercise videos and take the benifits from them.The only thing we endorse is eating unprocessed, whole foods, and working out for a strong, healthy body. As a business, we believe good things happen when you put people before profit. We believe fitness should be accessible to everyone, everywhere, regardless of income level or access to a gym. That's why we offer hundreds of free, full-length workout videos, the most affordable and effective workout programs on the web, meal plans, and helpful health, nutrition and fitness information.</p>
              <hr/>


        <h2 style={{color: 'blue', alignItem: 'center'}}>Healthy Recipes</h2>
        <br/>
        <CardDeck>
  <Card style={cardstyle}>
    <Card.Img variant="top" src={food1} />
    <Card.Body>
      <Card.Title>Salmon Tacos</Card.Title>
      <Card.Text>
      Fresh and Easy Salmon Tacos with Guacamole & Broccoli Slaw
      </Card.Text>
      <Card.Link href="https://youtu.be/8dWID_I1OR0">check recipe</Card.Link>

    </Card.Body>
  </Card>
  <Card style={cardstyle}>
    <Card.Img variant="top" src={food2}/>
    <Card.Body>
      <Card.Title>Banana Nice Cream - Healthy Dessert Ideas</Card.Title>
      <Card.Text>
      who would have thought that ice cream can be so simple to make, taste so good, and actually be a healthy snack.
      </Card.Text>
      <Card.Link href="https://youtu.be/AEpO1p-eyKg">check recipe</Card.Link>

    </Card.Body>
  </Card>
  <Card style={cardstyle}>
    <Card.Img variant="top" src={food5} />
    <Card.Body>
      <Card.Title>Chicken and spinach quinoa salad</Card.Title>
      <Card.Text>
      One of the easiest things to prepare that's also healthy for you are salads for simple lunch or dinner very quickly.
      </Card.Text>
      <Card.Link href="https://youtu.be/KnwpayehzeI">check recipe</Card.Link>

    </Card.Body>
   
  </Card>
  <Card style={cardstyle}>
    <Card.Img variant="top" src={food4} />
    <Card.Body>
      <Card.Title>Sweet potato and beet chips</Card.Title>
      <Card.Text>
      Get slicing and get roasting your delicious homemade veggie chips! 
      </Card.Text>
      <Card.Link href="https://youtu.be/MLHlq_uw5FI">check recipe</Card.Link>
    </Card.Body>
    
  </Card>
</CardDeck>


        </div>

      </div>
    )
  }
}