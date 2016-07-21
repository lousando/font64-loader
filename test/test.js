const chai = require("chai");
const expect = chai.expect;
const fs = require("fs");
const font64_loader = require("../index.js");

describe("font64-loader", function () {

	it("should output a string", function () {
		var ttf_font = fs.readFileSync(__dirname + "/fonts/font.ttf", "utf8");
		var ouput_type = typeof font64_loader(ttf_font);

		expect(ouput_type).to.be.a("string");
	});

});