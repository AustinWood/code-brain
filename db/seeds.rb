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
    ".",
    ".",
  ],
  [
    "You have an unsorted array of integers. Write a recursive solution to count the number of occurrences of a specific value.",
    ".",
    ".",
  ],
  [
    "Write a method that squares each element in an array.",
    ".",
    ".",
  ],
  [
    "Rewrite Ruby's Array#each method.",
    ".",
    ".",
  ],
  [
    "Rewrite Ruby's Array#uniq method.",
    ".",
    ".",
  ],
  [
    "Rewrite Ruby's Array#select method.",
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
