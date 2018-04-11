var Impl = /** @class */ (function () {
    function Impl() {
        this.myValue = "impl";
    }
    return Impl;
}());
function showValue(p) {
    if ("myValue" in p)
        console.log(p.myValue);
}
showValue(new Impl());
//# sourceMappingURL=inguard_out.js.map