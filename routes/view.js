const path = require("path");
const router = require("express").Router();


router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));    
});

    // router.get("/exercise?" + "id=" + )

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/blah.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;
