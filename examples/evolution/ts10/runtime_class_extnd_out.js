class Base {}
class Impl extends Base {
  constructor() {
    super(...arguments);
    this.myValue = "impl";
  }
}
function showValue(p) {
  if (p instanceof Base) console.log(p.myValue);
}
showValue(new Impl());

