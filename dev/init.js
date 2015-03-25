var fs = require('fs');
var path = require('path');

exports.outLocation = '../';


var header = fs.readFileSync(path.resolve(__dirname + '/partials/header.hbs'));
var footer = fs.readFileSync(path.resolve(__dirname + '/partials/footer.hbs'));

exports.handlebars = function(Handlebars){
    Handlebars.registerPartial({
        header: header.toString(),
        footer: footer.toString()
    });
};

exports.data = {
    "javascript" : [],
    
    "fonts" : [
        "https://fonts.googleapis.com/css?family=Dosis",
        "https://fonts.googleapis.com/css?family=Lobster"
    ],

    "description" : "web solutions",
    "title" : "sweefty.com"
};
