"use strict";

module.exports = function (content) {
    this.cacheable && this.cacheable();
    return "data:application/font;base64," + content.toString('base64');
};
