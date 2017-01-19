const dates          = require('express').Router();
const { pullDates }  = require('../services/dates');

dates.route('/')
  .post(pullDates, (req, res) => {
  res.json(res.dates || []);
})

module.exports = dates;
