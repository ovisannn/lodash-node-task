let dash = require('lodash')


function lembahCount(arr){
    let arrNew = dash.split(arr, "");
    
    let dCount = 0;
    let uCount = 0;
    let lembahCount = 0;
    let i = 0;
    
    
    while (true) {
        if (arrNew == ''){
            lembahCount = 0
            break
        }
        if (i == arrNew.length){
            break
        }
        if (dCount == uCount && dCount != 0 && uCount !=0) {
            lembahCount = lembahCount + 1;
            dCount = 0
            uCount = 0
            continue
        };
        if (arrNew[i] == "D") {
            dCount = dCount +1
            i++
            continue
        }
        if ( arrNew[i] == "U") {
            uCount = uCount +1
            i++
            continue
        }
    }
    return lembahCount
}

console.log(lembahCount("DDUUDDUDUUUD"))
console.log(lembahCount("UDDDUDUU"))
console.log(lembahCount("DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"))

