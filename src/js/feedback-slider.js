import fetchGoogleReviews from './fetch-google-reviews';

function initSlider() {
  $('.reviews-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    mobileFirst: true,
  });
}

function displayReviews(reviews) {
  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('reviews-slider');

  reviews.forEach(review => {
    const slide = document.createElement('div');
    slide.classList.add('review-slide');
    slide.innerHTML = `
      <div class="review-stars" style="--rating: ${review.rating};" aria-label="Rating of this review is ${review.rating} out of 5">
      <div class="review-text">${review.text}</div>
      <div class="review-author">${review.author_name}</div>
    `;
    sliderContainer.appendChild(slide);
  });

  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.appendChild(sliderContainer);

  initSlider();
}

fetchGoogleReviews()
  .then(reviews => {
    displayReviews(reviews);
  })
  .catch(error => {
    console.error(error);
  });

fetchGoogleReviews();
