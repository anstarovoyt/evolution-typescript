class Impl {
    constructor() {
        this.myValue = "impl";
    }
}
function showValue(p) {
    if (p instanceof Base) console.log(p.myValue);
}
showValue(new Impl());

