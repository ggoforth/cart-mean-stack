const review = new Review(req.body);

return Location.find({number: '234566544'})
  .then(location => {
    review.location_id = location._id;
    return review.save();
  });
