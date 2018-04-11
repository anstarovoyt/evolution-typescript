class Base {
    myValue;
}
class Impl implements Base {
    myValue = "impl";
}
function showValue(p: Object) {
    if (p instanceof Base) console.log(p.myValue);
}
showValue(new Impl());




export {}

