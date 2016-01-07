describe("font64-loader", function () {

    var fs = require("fs");
    var ttf_font = fs.readFileSync(__dirname + "/fonts/font.ttf", "utf8");
    var font64_loader = require("../index.js");

    it("should create a string from a .ttf font", function () {
        var ouput_type = typeof font64_loader(ttf_font);
        expect(ouput_type).toBe("string");
    });

});