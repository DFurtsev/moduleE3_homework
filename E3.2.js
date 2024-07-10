let myArray = ['a', 'b', 2, 5, 8, 0, null, 15 ]

function getArrayInfo(array){
    let notInteger = 0
    let nullNumber = 0
    let evenNumber = 0
    let oddNumber = 0
    for (let i = 0; i < array.length; i++) {
        item = array[i]
        if (item === 0) {
        nullNumber += 1;
        } else if (typeof item == 'number'){
            if (item%2 == 0) {
                evenNumber += 1;
            } else {
                oddNumber += 1;
            }
        } else {notInteger += 1;
        }
    }
    console.log(evenNumber)
    console.log(oddNumber)
    console.log(nullNumber)
    console.log(notInteger)
}

getArrayInfo(myArray)
