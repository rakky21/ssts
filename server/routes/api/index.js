const router = require("express").Router();
const User = require("../models/User".js);

router.post("/signup", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => res.json(err));
});

module.exports = router;
