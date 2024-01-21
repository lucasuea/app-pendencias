


function publicPatch(app,express){
    app.use(express.static(__dirname + '/public'));
}

module.exports = publicPatch;