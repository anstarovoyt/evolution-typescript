type Foo = { foo: string }
type Bar = { bar: string }

let fooBar: Foo & Bar;

fooBar = {foo: "", bar: ""}; //ok
fooBar = {foo: ""}; //error


