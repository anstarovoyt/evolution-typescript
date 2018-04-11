class Impl {
  constructor() {
    this.myValue = "impl";
  }
}
function showValue(p) {
  if ("myValue" in p) console.log(p.myValue);
}
showValue(new Impl());

