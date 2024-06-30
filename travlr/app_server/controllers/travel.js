const axios = require('axios');
const tripsEndpoint = "http://localhost:3000/api/trips";

const tripList = async function (req, res, next) {
  try {
    const response = await axios.get(tripsEndpoint);
    const json = response.data;
    let message = null;
    if (!(json instanceof Array)) {
      message = "API lookup error";
      json = [];
    } else {
      if (!json.length) {
        message = "No trips exist in our database!";
      }
    }
    res.render("travel", { title: "Travlr Getaways", trips: json });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  tripList,
};