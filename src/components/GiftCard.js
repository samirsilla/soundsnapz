import React from 'react';
import giftCard from '../images/gift-card.png';

const GiftCard = () => (
  <div className="gift-card-wrapper contain-margin">
    <div className="gift-card-copy">
      <h1>Give the gift of SoundSnapz, and more.</h1>
      <a className="text-link" href="#">Learn more about gift cards</a>
    </div>
    <img src={giftCard} alt="gift-card"/>
  </div>
);

export default GiftCard;