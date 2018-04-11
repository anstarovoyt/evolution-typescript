class Base {}
class Extension extends Base {
  constructor() {
    super(...arguments);
    this.myValue = "extension";
  }
}
function showValue(p) {
  if (p instanceof Extension) console.log(p.myValue);
}
showValue(new Extension());

