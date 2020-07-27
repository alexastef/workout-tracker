const api = require("../public/api.js");
const db = require("../models");
const mongojs = require("mongojs");
const router = require("express").Router();

    // get last workout
    router.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort( {_id: -1} ).limit(1)
        .then(lastWorkout => {
            res.json(lastWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    });

    // when user clicks add workout, new workout is created
    router.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

    // when user adds an exercise to a workout, then that workout is updated in the database with the new exercise
    router.put("/api/workouts/:id", (req, res) => {
        db.Workout.update(
            { _id: mongojs.ObjectId(req.params.id) },
            { $push: { exercises: req.body} })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    });

    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(allWorkouts => {
                res.json(allWorkouts);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    })

    module.exports = router;
