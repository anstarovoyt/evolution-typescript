function showValue(p) {
  if (p.marker) console.log(p.myValue);
}

showValue({
  marker: true,
  myValue: "value"
});

