interface Square {
    size: number;
}
interface Circle {
    diameter: number;
    radius: number;
}
function showValue(p: Square | Circle) {
    if ("radius" in p) console.log(p.diameter);
}
showValue({radius: 1, diameter: 2});



