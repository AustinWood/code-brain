# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(
  username: "demo_account",
  password: "password"
)

Note.destroy_all

question = <<QUESTION_STRING
Write a function that takes converts degrees celsius to degrees fahrenheit.
QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"6i59a","text":"// hint: first multiply degrees celsius by 9/5, then add 32","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"23vmj","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2diqc","text":"function toF(c) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f74v4","text":"  // your code here","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bfm7o","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"180an","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9thqu","text":"console.log(toF(0) === 32);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"10iaa","text":"console.log(toF(100) === 212);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5ifhn","text":"console.log(toF(37) === 98.6);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}
SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"3mtof","text":"function toF(c) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"16jje","text":" return c * 9/5 + 32;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3g73b","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}
ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)

question = <<QUESTION_STRING
You have an unsorted array of integers. Write a recursive solution to count the number of occurrences of a specific value.

QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"function numOccur (array, target) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"36gjp","text":"  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"501rp","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"58nh9","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"chcb4","text":"console.log(numOccur([1, 1, 2, 3, 4, 5, 5, 4, 5, 6, 7, 6, 5, 6], 5) === 4);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"caebn","text":"console.log(numOccur([1, 1, 2, 3, 4, 5, 5, 4, 5, 6, 7, 6, 5, 6], 13) === 0);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"function numOccur (array, target) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fm2uh","text":"  if (array.length === 0) return 0;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"31dh4","text":"  let count = 0;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2tr7i","text":"  if (array[0] === target) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"94b8o","text":"    count += 1;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"74ob2","text":"  }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"daaeg","text":"  let thing = numOccur(array.slice(1), target);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c510","text":"  return thing + count;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6jhmh","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)

question = <<QUESTION_STRING
Rewrite JavaScript's Array#uniq method.

QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.myUniq = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f8ftt","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fenp7","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dng40","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2jj5l","text":"console.log([1, 2, 6, 4, 'hi', 8, 4, 4, 6, 7, 2, 'hi'].myUniq().equals([1, 2, 6, 4, 'hi', 8, 7]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"97uf4","text":"console.log([].myUniq().equals([]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7p2ul","text":"console.log([1,2,3,4,5,6,7,8,9].myUniq().equals([1,2,3,4,5,6,7,8,9]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.myUniq = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bpg96","text":"  let arr = [];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ff0dk","text":"  this.forEach(el =>{","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"al642","text":"    if (!arr.includes(el)) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"630l5","text":"      arr.push(el);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"50duj","text":"    }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"76lt7","text":"  });","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9bq3d","text":"  return arr;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4ehcd","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)

question = <<QUESTION_STRING
Rewrite JavaScript's Array#select method.

QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.mySelect = function (callback){","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"evu2r","text":"  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3dq9o","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e0fer","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c8bj1","text":"let cb = function (el) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1aiuh","text":"  return (el < 3);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aeqdl","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6r1js","text":"console.log([1,2,3,4,5].mySelect(cb).equals([1,2]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.mySelect = function (callback){","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b4hkh","text":"  let arr = [];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4trp1","text":"  for(let i = 0; i < this.length; i++) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"396jt","text":"    if (callback(this[i])) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4da90","text":"      arr.push(this[i]);","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c36pj","text":"    }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"db0h1","text":"  }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5pt7v","text":"  return arr;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"99n5t","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)

question = <<QUESTION_STRING
Write a method that squares each element in the array.

QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.square = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2ncdp","text":"  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1o0f7","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f54sh","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6u9dc","text":"console.log('-------SQUARE-------');","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fto3e","text":"console.log([1,2,3,4,5].square().equals([ 1, 4, 9, 16, 25 ]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.square = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1664t","text":"  return this.map(el => {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"76heb","text":"    return el * el;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ccev9","text":"  });","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7sp4e","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)

question = <<QUESTION_STRING
Write bubble sort in JavaScript.

QUESTION_STRING

skeleton = <<SKELETON_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.bubbleSort = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e2e7b","text":"  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9pfos","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f6t48","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"26sft","text":"console.log([9,8,7,6,5,4,3,2,1].bubbleSort().equals([1,2,3,4,5,6,7,8,9]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8da2p","text":"console.log([7,6,2,-3,8,4,5,3,9,1].bubbleSort().equals([-3,1,2,3,4,5,6,7,8,9]));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

SKELETON_STRING

answer = <<ANSWER_STRING
{"entityMap":{},"blocks":[{"key":"du6sp","text":"Array.prototype.bubbleSort = function () {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"da1cg","text":"  let sorted = false;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c81k1","text":"  while (!sorted) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dph8b","text":"    sorted = true;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"u1bg","text":"    for(let i = 0; i < this.length - 1; i++) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"djkes","text":"      if (this[i] > this[i + 1]) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"k0qq","text":"        this[i + 1] = [this[i], this[i] = this[i + 1]][0];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"87rvb","text":"        sorted = false;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ejdji","text":"      }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ehbek","text":"    }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3qvid","text":"  }","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6mb3c","text":"  return this;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"13jph","text":"};","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

ANSWER_STRING

Note.create!(question: question, skeleton: skeleton, answer: answer, author_id: demo.id)
