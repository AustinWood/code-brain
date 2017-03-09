# Full-stack project proposal

I would like to build an SRS (spaced repetition system) app with a built in REPL which assists software engineers in developing language fluency by committing bite-sized chunks of information to long-term memory.

## MVP feature list
- Notes - Users can add/edit/delete notes, which consist of both a question and an answer.
- Tags - Users can add multiple tags to notes (e.g. ruby, swift, javascript, algorithm, recursion, auth, react).
- Study - Users can study notes. The app will schedule notes for review based on how well the user knows the information (more explanation below).
- REPL - Before submitting their attempt for comparison against the stored answer, users can run their code in a built in REPL. In my MVP, I will include support for either Ruby or Javascript (whichever I deem easier to implement upon further research).

## Notes on study algorithm
- I plan to start by using the same study algorithm I developed for an iOS app I built for native Russian speakers learning English. I only made it to beta testing before App Academy started, but proof of concept can be seen [in this demo video] [verb_hacker].
- Time permitting, I will use Anki's spaced repetition algorithm, which is [open source] [anki] and written in Python. I will either translate the code to Ruby myself, or find a library that allows me to incorporate Python code in my Rails project.

[verb_hacker]: https://youtu.be/ZtxYO4KQlCI?t=51s
[anki]: https://github.com/dae/anki

## Bonus features
- Organize groups of information in a polytree - Eventually I would like to incorporate the main ideas from the [Hacking Auth app] [hacking_auth] (which I worked on several weeks ago with [Gilbert] and [Ryley]) into this app. Main idea: allow users to group collections of notes into a polytree to make their studies even more efficient by taking advantage of [chunking].
- Import/export notes using the Anki file format
- Gamify the app
- Social component
- REPL - Syntax highlighting
- REPL - Support for more languages

[hacking_auth]: https://github.com/AustinWood/hacking_auth
[Gilbert]: https://github.com/PGilbertSchmitt
[Ryley]: https://github.com/RyleySill93
[chunking]: https://en.wikipedia.org/wiki/Chunking_(psychology)

## Design
- I will consult [Studies by The Mental Faculty] [studies] for many UI decisions. I find their navigation to be more intuitive, user-friendly and overall more pleasant than their more well-known, open-source rival, Anki.
- For design, I will draw inspiration from many sources, especially Codewars. I like the dark theme of their website, and overall UX is very intuitive. [Codewars] will be an especially valuable reference when building my REPL, as I feel this is one of the strongest pieces of their UX.

[studies]: http://www.studiesapp.com/
[Codewars]: https://www.codewars.com/
