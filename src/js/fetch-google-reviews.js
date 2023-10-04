const placeId = 'ChIJTyOYHdrFNkcRQViBClLTNWI';

export default function fetchGoogleReviews() {
  return new Promise((resolve, reject) => {
    const request = {
      placeId,
      fields: ['name', 'reviews'],
    };

    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    );
    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(place.reviews);
      } else {
        reject(`Error fetching place details: ${status}`);
      }
    });
  });
}
