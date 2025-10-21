

// Home page
const homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Student Campus - Explore your school buildings',
    pageHeader: { title: 'Student Campus', strapline: 'Discover buildings around your campus' },
    sidebar: "Welcome to Student Campus Here you can explore key university buildings, find out what facilities they offer, and plan your study sessions.",
    locations: [
      { name: 'Business and IT Building', address: 'MTU North Campus, Tralee', rating: 5, facilities: ['Computer Labs','Lecture Halls','Library'], distance: 'On campus' },
      { name: 'AnCuan', address: 'MTU Main Campus, Tralee', rating: 4, facilities: ['Study Areas','Printing','Labs'], distance: 'On campus' },
      { name: 'Kerry Sports Academy', address: 'MTU North Campus Tralee', rating: 6, facilities: ['Gym','Sports courts','Indoor pool'], distance: 'Back of BIT building' }
    ]
  });
};

// Building info page
const locationInfo = function(req, res) {
  res.render('location-info', {
    location: {
      name: 'AnCuan Building',
      address: 'MTU North Campus, Tralee',
      rating: 4,
      facilities: ['Study Areas','Printing','Labs'],
      openingTimes: [
        { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
        { days: 'Saturday', opening: '9:00am', closing: '4:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: 'Karen Amumpaire', rating: 5, timestamp: '20 October 2025', reviewText: 'Great place for labs and quiet study.' }
      ],
      coords: { lat: 52.2675, lng: -9.7022 }
    },
    sidebar: {
      context: 'is one of the newest active spaces on campus with engineering labs.',
      callToAction: 'If you’ve studied or worked here, share your thoughts to help other students!'
    },
    pageHeader: { title: 'Engineering Building' }
  });
};

// Add review page
const addReview = function(req, res) {
  res.render('location-review-form', {
    title: 'Review Engineering Building',
    pageHeader: { title: 'Review Engineering Building' }
  });
};

module.exports = { homelist, locationInfo, addReview };
