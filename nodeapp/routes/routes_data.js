
module.exports.setRoutes = function (app) {
    app.all('/data*');

    app.get('/data', function (req, res) {
        var result  = {
          name: "Ritu"
        }
        return res.status(200).send(result)
    })
}
