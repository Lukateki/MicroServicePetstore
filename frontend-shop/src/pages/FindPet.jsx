import React, { useState } from 'react';

function FindPet() {
  const [formData, setFormData] = useState({
    type: 'cat',
    breed: '',
    age: '',
    gender: '',
    compatibility: {
      otherDogs: false,
      otherCats: false,
      smallChildren: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.compatibility) {
      setFormData(prev => ({
        ...prev,
        compatibility: { ...prev.compatibility, [name]: checked }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: type === 'radio' ? value : value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', formData);
    alert('🔍 Search submitted!');
  };

  const handleReset = () => {
    setFormData({
      type: 'cat',
      breed: '',
      age: '',
      gender: '',
      compatibility: {
        otherDogs: false,
        otherCats: false,
        smallChildren: false,
      },
    });
  };

  return (
    <div className="pt-3 pb-2 mb-3">
      <h1>Search for a Cat or Dog for Adoption</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <p>Cat or Dog:</p>
          <label>
            <input 
              type="radio" 
              name="type" 
              value="cat" 
              checked={formData.type === 'cat'}
              onChange={handleChange}
            /> Cat
          </label>
          <label className="ms-3">
            <input 
              type="radio" 
              name="type" 
              value="dog" 
              checked={formData.type === 'dog'}
              onChange={handleChange}
            /> Dog
          </label>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="breed">Breed of dog or cat:</label>
          <input 
            type="text" 
            id="breed" 
            name="breed" 
            className="form-control"
            value={formData.breed}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="age">Preferred age of animal:</label>
          <input 
            type="text" 
            id="age" 
            name="age" 
            className="form-control"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="gender">Preferred gender:</label>
          <select 
            id="gender" 
            name="gender" 
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Doesn't matter</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Compatibility:</label>
          <div className="form-check">
            <input
              type="checkbox"
              id="otherDogs"
              name="otherDogs"
              className="form-check-input"
              checked={formData.compatibility.otherDogs}
              onChange={handleChange}
            />
            <label htmlFor="otherDogs" className="form-check-label">Needs to get along with other dogs</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="otherCats"
              name="otherCats"
              className="form-check-input"
              checked={formData.compatibility.otherCats}
              onChange={handleChange}
            />
            <label htmlFor="otherCats" className="form-check-label">Needs to get along with other cats</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="smallChildren"
              name="smallChildren"
              className="form-check-input"
              checked={formData.compatibility.smallChildren}
              onChange={handleChange}
            />
            <label htmlFor="smallChildren" className="form-check-label">Suitable for a family with small children</label>
          </div>
        </div>

        <div className="d-flex gap-2 mt-3">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default FindPet;
