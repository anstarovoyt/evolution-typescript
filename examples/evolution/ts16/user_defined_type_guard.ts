interface Base {
    myValue: string;
}
function showValue(p: object) {
    if (isBase(p)) console.log(p.myValue);
}
function isBase(p: any): p is Base {
    return (<any>p).myVulue;
}




