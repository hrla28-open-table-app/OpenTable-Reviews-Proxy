const axios = require('axios');

const controller = {
  getNavbar: (req, res) => {
    axios
      .get(`http://localhost:3001/api/navbar`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getNavbarAndId: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3001/api/navbar/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getReservation: (req, res) => {
    axios
      .get(`http://localhost:3002/api/reservation`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getReservationAndId: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3002/api/reservation/id/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getDescription: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3003/api/restaurant/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  },

  getReviews: (req, res) => {
    let { id } = req.params;
    axios
      .get(`http://localhost:3004/api/restaurant/${id}`)
      .then(response => res.status(200).send(response.data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;
