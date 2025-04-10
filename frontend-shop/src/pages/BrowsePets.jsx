import React from 'react';

function BrowsePets() {
  const pets = [
    {
      name: 'Bella',
      type: 'Cat',
      features: 'Playful, great with kids, fully vaccinated',
      image: '/images/bella.jpg',
    },
    {
      name: 'Whiskers',
      type: 'Cat',
      features: 'Calm, loves cuddles, litter trained',
      image: '/images/whiskers.jpg',
    },
    {
      name: 'Max',
      type: 'Dog',
      features: 'Energetic, good for active families, house trained',
      image: '/images/max.jpg',
    },
    {
      name: 'Luna',
      type: 'Dog',
      features: 'Quiet, loves sunbathing, neutered',
      image: '/images/luna.jpg',
    },
  ];

  return (
    <div className="pt-3 pb-2 mb-3">
      <h2>Meet Our Adorable Pets!</h2>
      <p>Here are some of our wonderful cats and dogs looking for a forever home:</p>

      <div className="row">
        {pets.map((pet, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={pet.image} className="card-img-top" alt={`${pet.name} the ${pet.type.toLowerCase()}`} />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">
                  <strong>Type:</strong> {pet.type}<br />
                  <strong>Features:</strong> {pet.features}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowsePets;
