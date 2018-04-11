interface Dog {
    cat:false;
}
interface Cat {
    cat:true;
    meow:string;
}
function showValue(p: Dog | Cat) {
    if (p.cat) console.log(p.meow);
}
showValue({cat:true}); //error
showValue({cat:true, meow:"meow"});

