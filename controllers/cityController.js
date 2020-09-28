const express = require("express");
const router = express.Router();
const City = require("../models/city")

// Index
router.get("/", (req, res) => {
  // Use City model to get all Cities
  City.find({}, (error, allCities) => {
    error ? res.status(404).json(error) : res.status(200).json(allCities);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  City.findByIdAndRemove(req.params.id, (err, city) => {
    error ? res.status(404).json(error) : res.status(200).json(city);
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the city document using our model
  City.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCity) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedCity);
    }
  );
});

// Create
router.post("/", (req, res) => {
  console.log(req.body);
  // Use Model to create City Document
  City.create(req.body, (error, createdCity) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdCity);
  });
});

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  City.findById(req.params.id, (error, foundCity) => {
    // render the Show route and pass it the foundCity
    error ? res.status(404).json(error) : res.status(200).json(foundCity);
  });
});

// export router
module.exports = router;