import React, { useEffect, useState } from 'react';
import LocationForm from '../components/LocationForm';

function LocationsPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  function handleLocationSubmit(location) {
    fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then((response) => response.json())
      .then((data) => {
        setLocations([...locations, data]);
      });
  }

  function handleLocationDelete(id) {
    fetch(`/locations/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setLocations(locations.filter((location) => location._id !== id));
    });
  }

  return (
    <div>
      <h1>Locations Page</h1>
      <LocationForm onSubmit={handleLocationSubmit} />
      <hr />
      <h2>Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location._id}>
            {location.name} - {location.address}, {location.city}, {location.state}, {location.country}
            <button onClick={() => handleLocationDelete(location._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationsPage;
