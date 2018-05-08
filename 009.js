//calculate number of trailing zeros in n factorial;
function zeros(n) {
    var zeros = 0;

    for (var i = 5; i < n; i*=5) {
       zeros+= Math.floor(n/i);
    }
    return zeros;
}

console.log(zeros(80));