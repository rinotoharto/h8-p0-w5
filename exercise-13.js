// Function untuk sorting
function sorting(arrNumber) {

    for(var i = 0; i < arrNumber.length; i++) {
        for(var j = i+1; j < arrNumber.length; j++) {
            if(arrNumber[i] < arrNumber[j]) {
                var swapped = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = swapped
            }
        }
    }
    return arrNumber
}
// akhir function sorting

// function untuk mencari angka terbesar dan jumlah kemunculan
function getTotal(arrNumber) {
    var number = sorting(arrNumber)
    var count = 0;
    var hasil = '';

    for(var i = 0; i < number.length; i++) {
        if(number[i] == number[0]) {
            count++
        }
    }

    if(arrNumber.length > 0) {
        hasil = 'angka paling besar adalah ' + number[0] + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
    } else {
      return arrNumber
    }
  return hasil
}
// akhir function cari angka terbesar

// menggabungkan fungsi sort dengan getTotal
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
console.log(mostFrequentLargestNumbers([]));
  //''