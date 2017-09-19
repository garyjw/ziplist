function zipList(dataOne, dataTwo) {
    const dataCombine = [];
    let trackOne = 0;
    let trackTwo = 0;
    for(let i = 0; i < (dataOne.length + dataTwo.length); i++) {
        if(i%2 == 0) {
            dataCombine.push(dataOne[trackOne++]);
        }
        if(i%2 == 1) {
            dataCombine.push(dataTwo[trackTwo++]);
        }
    }
    return dataCombine;
}

const sampleOne = [0, 2, 4];
const sampleTwo = [1, 3, 5];

console.log(zipList(sampleOne, sampleTwo));

function zipListTheSimpleWay(dataOne, dataTwo) {
    return _.flatten(_.zip(dataOne,dataTwo));
}

console.log(zipListTheSimpleWay(sampleOne, sampleTwo));