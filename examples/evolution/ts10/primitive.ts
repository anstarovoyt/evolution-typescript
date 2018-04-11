interface Base {
    marker,
    myValue
}
function showValue(p: Object) {
    if ((<any>p).marker) console.log((<Base>p).myValue);
}
showValue(<Base>{
    marker: true,
    myValue: "value"
});

