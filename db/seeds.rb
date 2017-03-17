# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(
  username: "demo_account",
  password: "password"
)

notes = [
  [
    "You have array of integers. Write a recursive solution to find the sum of the integers.",

    "function sumRecur(array) {

    }

    console.log(sumRecur([1, 3, 5, 7, 9, 2, 4, 6, 8]) === 45);
    console.log(sumRecur([-3, 0, 3, 7, 1, 0, -7, 32]) === 33);
    console.log(sumRecur([]) === 0);",

    "function sumRecur(array) {
      if (array.length === 0) return 0;
      if (array.length === 1) return array[0];
      let sum = sumRecur(array.slice(1));
      return sum + array[0];
    }"
  ],
  [
    "Rewrite JavaScript's's Array#uniq method.",
    ".",
    ".",
  ],
  [
    "Rewrite JavaScript's's Array#select method.",
    ".",
    ".",
  ]
]

notes.each do |note|
  Note.create!(
    question: note[0],
    skeleton: note[1],
    answer: note[2],
    author_id: 1
  )
end

# {
#   question: ".",
#   skeleton: ".",
#   answer: ".",
#   author_id: 1
# },
