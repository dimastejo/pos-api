const db = require('../db')

const save = (req, res) => {
    var sql = "INSERT INTO orders (data) VALUES ?";

    db.query(sql, [JSON.stringify(req.body)], function (err, result) {
        if (err) throw err;
    })
    res.status(200).send(req.body)
}

module.exports = {
    save
}