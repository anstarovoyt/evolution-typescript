interface Base {
    myValue;
}
class Impl implements Base {
    myValue = "impl";
}
function showValue(p: object) {
    if (p instanceof Base) console.log(p.myValue);
}
showValue(new Impl());



export {}

