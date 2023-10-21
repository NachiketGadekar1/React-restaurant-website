import React from 'react';
import '../styles.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="text">
          <h1>Little Lemon</h1>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          <a href="BookingPage" className="cta-button">
            Reserve a table
          </a>
        </div>
        <div className="hero-image">
          <img src="/Hero.jpg" alt="Hero"  />
        </div>
      </div>
      {/* special menu items */}
      <div classname="specials">
        <h1>Specials</h1>
        <a href="Menu" className="menu-button">
            Online Menu
        </a>
        <div className="special-items-container">
        <div className="greeksalad">
          <img src="/greeksalad.jpg" alt="greek salad" />
          <h2>Greek salad  </h2>
          <p>Taste the flavors of the Mediterranean with our Classic Greek Salad. This refreshing dish features a vibrant mix of fresh ingredients, including crisp cucumbers, ripe tomatoes, Kalamata olives, and creamy feta cheese, all tossed in a zesty Greek dressing.</p>
        </div>
        <div className="meatballs">
        <img src="/meatballs.jpg" alt="moroccan meatballs" />
       <h2>Moroccan Meatballs </h2>
       <p>Indulge in the exotic flavors of Morocco with our mouthwatering Moroccan Meatballs. These succulent, spiced meatballs are a delightful fusion of aromatic spices, lean ground meat, and traditional North African cuisine.</p>
        </div>
        <div className="kosh">
        <img src="/armenainkosh.webp" alt="armenain kosh " />
       <h2>Armenain kosh</h2>
       <p>
       Discover the heartwarming flavors of Armenia with our signature Armenian Kosh. This traditional dish, often prepared as a hearty and comforting soup, is a celebration of rich ingredients and age-old culinary traditions
       </p>
        </div> 
        </div>
      </div>
      {/* testimonials */}
      <div className="testimonials">
      <h1 style={{ textAlign: 'center' }}>Testimonials</h1>
        <div className='cardcont'>
        <div className='p1'>
           <h2>Rating:&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
           <img src="/p.jpg"/>
           <p>John Smith</p>
           <p>Wonderful food!</p>
        </div>
        <div className='p2'>
        <h2>Rating:&#9733;&#9733;&#9733;&#9733;</h2>
           <img src="/p.jpg"/>
           <p>Zuck</p>
           <p>Great!</p>
        </div>
        <div className='p3'>
        <h2>Rating:&#9733;&#9733;&#9733;&#9733;</h2>
           <img src="/p.jpg"/>
           <p>John Cena</p>
           <p>Best restraunt in town</p>
        </div>
        <div className='p4'>
        <h2>Rating:;&#9733;&#9733;&#9733;</h2>
           <img src="/p.jpg"/>
           <p>Mr. Pink</p>
           <p>good</p>
        </div>
        </div>
      </div>
      <div className="description"></div>

    </div>
  );
}


export default Home;
