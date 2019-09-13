const db = require('../db')

const getMenu = (req, res) => {
    var sql = "SELECT * FROM master_menu";
    db.query(sql, function (err, result) {
        res.status(200).send(result)
    });
}

module.exports = {
    getMenu
}