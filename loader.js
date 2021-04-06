const vucript = require("vucript");

module.exports = function(source, map) {
    var matches = source.match(/<script +lang=("|')(v|V)ucript("|')>([\s\S]+)<\/script>/);
    if (matches != null && matches.length > 4) {
        var vucriptCode = matches[4];
        var vucriptCodeCompiled = vucript["default"].compile(vucriptCode);
        console.log(vucriptCodeCompiled);
        console.log(vucriptCode);
        source = source.replace(vucriptCode, '\n' + vucriptCodeCompiled);
        source = source.replace(/<script +lang=("|')(v|V)ucript("|')>/g, "<script lang=$1ts$3>");
        this.callback(null, source, map);
    }
    else {
        this.callback(null, source, map);
    }
};
