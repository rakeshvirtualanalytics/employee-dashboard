module.exports = {
    isEmptyObject: function (obj) {
        return !Object.keys(obj).length;
    },
    
    mysql_real_escape_string: function (str) {
        // eslint-disable-next-line no-control-regex
        return str.replace(/[\0\x08\x09\x1a\n\r"'\\%]/g, function (char) {
            switch (char) {
                case "\0":
                    return "\\0";
                case "\x08":
                    return "\\b";
                case "\x09":
                    return "\\t";
                case "\x1a":
                    return "\\z";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\"":
                case "'":
                case "\\":
                case "%":
                    return "\\"+char;
                default:
                    return ;
            }
        });
    },
}