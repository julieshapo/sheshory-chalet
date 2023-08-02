import axios from 'axios';

const apiKey = 'AIzaSyBjuH4eU3K8KKqHhvcEia7VlTv_6stG9Hk';
const placeId = 'ChIJTyOYHdrFNkcRQViBClLTNWI';

const getReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Ctext&key=${apiKey}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
getReviews();

// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJTyOYHdrFNkcRQViBClLTNWI&fields=name%2Crating%2Ctext&key=AIzaSyBjuH4eU3K8KKqHhvcEia7VlTv_6stG9Hk

// function displayReviews(reviews) {
//   const reviewsContainer = document.getElementById('reviews-container');

//   reviews.forEach(review => {
//     const reviewDiv = document.createElement('div');
//     reviewDiv.className = 'review';

//     const rating = document.createElement('div');
//     rating.className = 'rating';
//     rating.textContent = `Rating: ${review.rating}`;

//     const reviewText = document.createElement('p');
//     reviewText.textContent = review.text;

//     reviewDiv.appendChild(rating);
//     reviewDiv.appendChild(reviewText);
//     reviewsContainer.appendChild(reviewDiv);
//   });
// }

// async function initMap() {
//   const map = await new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 48.65938, lng: 24.8428 },
//     zoom: 15,
//   });

//   const service = await new google.maps.places.PlacesService(map);
//   service.getDetails(
//     {
//       placeId,
//       fields: ['name', 'rating', 'reviews'],
//     },
//     (place, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         displayReviews(place.reviews);
//       } else {
//         console.error('Error fetching place details:', status);
//       }
//     }
//   );
// }

// initMap();
