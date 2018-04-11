class Base {
    myValue;
}
class Impl extends Base {
    myValue = "impl";
}
function showValue(p: Object) {
    if (p instanceof Base) console.log((<Base>p).myValue);
}
showValue(new Impl());



