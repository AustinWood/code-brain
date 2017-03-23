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
