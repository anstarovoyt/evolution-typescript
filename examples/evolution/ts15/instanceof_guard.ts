class Base {}
class Extension extends Base {
    myValue = "extension";
}
function showValue(p: Base) {
    if (p instanceof Extension) console.log(p.myValue);
}
showValue(new Extension());

