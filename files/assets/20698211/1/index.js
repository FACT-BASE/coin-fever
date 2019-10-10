/* tslint:disable */
var index = pc.createScript("index");
var say = function (name) {
    console.log("Hello" + name);
};
index.prototype.initialize = function () {
    say("Takeshi");
};
