//@flow

class Bar1 {
  bar() {}
}

class Bar2 {
  bar() {}
}

interface BarInterface {
  bar():void;
}

let bar1: Bar1 = new Bar2(); //error
let bar2: BarInterface = new Bar2(); //ok
