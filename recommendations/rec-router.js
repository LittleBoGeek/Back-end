const router = require("express").Router();
const { response } = require("express");
const express = require("express");

const Recommendations = require("../helpers/response-functions");

router.get("/", (req, res) => {
  Recommendations.find()
    .then((recs) => {
      res.status(200).json(recs);
    })
    .catch((err) => {
      res.status(500).json({ message: "There was an error", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recommendations.findById(id)
    .then((recs) => {
      res.status(200).json(recs);
    })
    .catch((err) => {
      res.status(500).json({ message: "There was an error", err });
    });
});

router.post("/add", (req, res) => {
  const rec = req.body;

  Recommendations.add(rec)
    .then((recommendation) => {
      res.status(201).json({ message: "success", recommendation });
    })
    .catch((err) => {
      res.status(500).json({ message: "There was an error", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recommendations.findById(id)
    .then((rec) => {
      if (rec) {
        Recommendations.update(changes, id).then((updatedItem) => {
          res.status(200).json(updatedItem);
        });
      } else {
        response.status(404).json({ message: "There was an error", err });
      }
    })
    .catch((err) => {
      res.status(500).json("There was a 500 error", err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Recommendations.remove(id)
    .then((rem) => {
      if (rem) {
        res.json({ message: "Successfully deleted:", rem });
      } else {
        res.status(400).json({ message: "The item could not be deleted" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "There was an error" });
    });
});

module.exports = router;
