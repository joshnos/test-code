export async function getAllItineraries() {

  const response = await fetch('http://localhost:3000/itinerary');
  return await response.json();
}

export async function getItineraryById(id) {

  const response = await fetch(`http://localhost:3000/itinerary/${id}`);
  return await response.json();
}

export async function getAllFlightData(id) {

  const response = await fetch(`http://localhost:3000/itinerary/${id}/flight-data`);
  return await response.json();
}

export async function getNextFlightData(id, time) {

  const response = await fetch(`http://localhost:3000/itinerary/${id}/flight-data/${time}`);
  return await response.json();
}
