var str = "I am indian. I love travel."

var words = str.split(' ')
console.log(words)

var lstWord = words[words.length-1]
console.log(lstWord)

console.log(str.replace(lstWord.charAt(0), lstWord.charAt(0).toUpperCase()))