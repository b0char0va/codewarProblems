//Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words.
//You should return an array of all the anagrams or an empty array if there are none. For example:
//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
function anagrams(word, words) {
    var sorted=word.split("").sort().join("");
    return words.filter(function (t) {
        return sorted===t.split("").sort().join("");
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));



function anagrams(word, words) {
    var result=true;
    var array=[];
    for (var i = 0; i < words.length; i++) {
        var toLookIn=words[i];
        if(words[i].length===word.length) {
            for (var k = 0; k < word.length; k++) {
                var lookFor = new RegExp(word[k]);
                if (!lookFor.test(toLookIn)) {
                    result = false;
                } else {
                    toLookIn = toLookIn.replace(word[k], "");
                }
            }
            if(result!==false){
                array.push(words[i]);
            }
            result=true;
        }
    }
    return array;
}