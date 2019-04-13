const axios = require('axios');

const controller = {
  getReviews: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3004/api/restaurant/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
