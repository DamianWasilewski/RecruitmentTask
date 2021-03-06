const express = require('express');
const Event = require('../../models/event');

const router = express.Router();

//GET api/items - Get All Events
router.get('/', (req, res) => {
  Event.find()
    .sort ({ date: -1})
    .then(events => res.json(events))
});

//POST api/items - Create an event in DB
router.post('/', (req, res) => {
  let error = '';
  if(!req.body.firstName) {
    error = 'First name required';
  }
  if(!req.body.lastName) {
    error = 'Last name required';
  }
  if(!req.body.email) {
    error = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req.body.email)) {
    error = 'Invalid email'
  }
  if(!req.body.eventDate) {
    error = 'Event date required';
  }
  if(!error) {
    const newEvent = new Event({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      eventDate: req.body.eventDate
    });
    newEvent.save()
      .then(event => res.json(event));
  }
});

//DELETE api/items/:id - Delete an event from DB
router.delete('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => event.remove()
      .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;