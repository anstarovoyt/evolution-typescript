interface BaseInterface {
    myValue: string;
}
class Impl implements BaseInterface {
    myValue = "impl"
}
function showValue(p: object | BaseInterface) {
    if ("myValue" in p) console.log(p.myValue);
}
showValue(new Impl());


