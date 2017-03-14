```js
{
  currentUser: {
    id: 1,
    email: "austin@austinkwood.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    1: {
      question: "Rewrite Ruby's Array#select method.",
      skeleton: "class Array\ndef my_select(&prc)\n# Your code here\nend\nend"
      answer: "class Array\ndef my_select(&prc)\nresult = []\nprc ||= Proc.new { |x| x }\nself.each { |x| result << x if prc.call(x) }\nresult\nend\nend",
      leitnerScore: 8,
      nextReview: "Mon Mar 13 2017 04:17:34 GMT-0700 (PDT)"
      tags: [1, 2]
      }
    }
  },
  tags: {
    1: {
      name: "ruby"
  },
  tagFilters: [1, 2]
}
```
