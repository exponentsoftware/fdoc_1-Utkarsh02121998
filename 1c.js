const str =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

function countWords(str) {
str = str. replace(/(^\s*)|(\s*$)/gi,"");
str = str. replace(/[ ]{2,}/gi," ");
str = str. replace(/\n /,"\n");
return str. split(' '). length;
  }
  console.log(countWords(str))

// function WordCount(sentence) {
//     return sentence.split(' ')
//            .filter(function(n) { return n != '' })
//            .length;
// }
// console.log(WordCount(sentence))