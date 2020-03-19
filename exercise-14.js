// function untuk mengganti huruf vokal
function changeVocals (str) {
    var kamus = 'aiueoAIUEO'
    var kamus2 = 'bjvfpBJVFP'
    var hasil = ''

    for(var i = 0; i < str.length; i++) {
        var check = false
        for(var j = 0; j < kamus.length; j++) {
            if(str[i] == kamus[j]) {
                hasil += kamus2[j]
                check = true
            }
        }
        if(!check){
            hasil += str[i]
        }
    }
    return hasil
}
// akhir function ganti huruf vokal

// function membalik kata
function reverseWord (str) {
    var hasil = ''
    for(var i = str.length-1; i >= 0; i--) {
        hasil += str[i]
    }
    return hasil
}
// akhir function balik kata

// function untuk mengganti huruf besar dan kecil
function setLowerUpperCase (str) {
    var hasil = ''

    for(var i = 0; i < str.length; i++) {
        var upper = str[i].toUpperCase();
        var lower = str[i].toLowerCase()

        if(str[i] == lower) {
            hasil += upper
        } else if(str[i] == upper) {
            hasil += lower
        }
    }
    return hasil
}
// akhir function ganti huruf besar dan kecil

// function untuk menghilangkan spasi
function removeSpaces (str) {
    var hasil = ''

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            hasil += str[i]
        }
    }
    return hasil
}
// akhir function hilangkan spasi

// penggunaan seluruh function dan pembatasan minimum input
function passwordGenerator (name) {
    var vocal = changeVocals(name);
    var reverse = reverseWord(vocal);
    var lowerUpper = setLowerUpperCase(reverse);
    var remove = removeSpaces(lowerUpper);

    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return remove
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'