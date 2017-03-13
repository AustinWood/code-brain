## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Search
 - Note

**Search**
 - Tags
  + Tag
 - NotesHeader
 - NotesIndex
  + NotesIndexItem

**Note**
 - NoteHeader
 - NoteBody
  + NoteSkeleton
  + BodyRight
    * Presents NoteAnswer in edit mode
    * Presents Repl in quiz mode
 - NoteFooter
  + Presents EditFooter in edit mode
  + Presents QuizFooter in quiz mode

## Routes

|Path                 | Component         |
|---------------------|-------------------|
| /sign-up            | AuthFormContainer |
| /sign-in            | AuthFormContainer |
| /home               | HomeContainer     |
| /home/note/:note_id | Note              |
