# CodeBrain

(Note: pending better name idea with available domain...)

* [Heroku link][heroku]
* [Trello link][trello]

[heroku]: https://codebrain.herokuapp.com
[trello]: https://trello.com/b/c0fTypyd/code-brain

## Minimum Viable Product

CodeBrain is a flashcard app for software developers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Tags
- [ ] Study
- [ ] REPL
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: https://github.com/AustinWood/full-stack-project/tree/master/docs/wireframes
[components]: https://github.com/AustinWood/full-stack-project/blob/master/docs/component-hierarchy.md
[sample-state]: https://github.com/AustinWood/full-stack-project/blob/master/docs/sample-state.md
[api-endpoints]: https://github.com/AustinWood/full-stack-project/blob/master/docs/api-endpoints.md
[schema]: https://github.com/AustinWood/full-stack-project/blob/master/docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (w8d2)

Functioning rails project with front-end Authentication.

### Phase 2: Notes Model, API, and components (w8d3 - w8d4)

Notes can be created, read, edited and destroyed through
the API.

### Phase 3: Tags (w8d5)

Notes can be tagged with multiple tags, and tags are searchable.

### Phase 4: Study (w8d6 - w8d7)

Notes are automatically scheduled for review using a simplified Leitner system.

### Phase 5: REPL and Seed Data (w9d1 - w9d2)

Users can run their code in a built-in REPL before looking at the correct answer.

### Phase 6: Work on Bonus Features (w9d3 - w9d5)
- [ ] Improve study algorithm
- [ ] Organize information in a polytree
- [ ] Import/export notes using the Anki file format
- [ ] Gamify the app
- [ ] Social component
- [ ] REPL - Syntax highlighting
- [ ] REPL - Support for more languages
