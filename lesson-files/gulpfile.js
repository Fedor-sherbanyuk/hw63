const { parallel, task } = require('gulp');

function squareRectangle(firstSideOfTheRectangle, secondSideOfTheRectangle) {
    const result = firstSideOfTheRectangle * secondSideOfTheRectangle;
    console.log('Square of rectangle:', result);
    return result;
}

function squareParallelogram(sideLengthParallelogram, heightLengthParallelogram) {
    const result = sideLengthParallelogram * heightLengthParallelogram;
    console.log('Square of parallelogram:', result);
    return result;
}

function squareRhombus(rhombusSideLength, rhombusHeightLength) {
    const result = rhombusSideLength * rhombusHeightLength;
    console.log('Square of rhombus:', result);
    return result;
}

task('default', parallel(
    function() {
        squareRectangle(5, 5);
    },
    function() {
        squareParallelogram(6, 6);
    },
    function() {
        squareRhombus(7, 7);
    }
));
