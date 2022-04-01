import { fetchNotes, addNew, deleteNote, updateNote } from '../actions/noteActions'
import store from '../store'


// addNew action
describe("addNew action creator:", () => {
  it("Should add the new note object to the store", () => {
    const note = {
      noteTitle: "My title",
      noteBody: "this is the body of my note",
      isFavorite: false,
      dateCreated: "Mar 08 2022 09:57",
      dateModified: "Mar 08 2022 09:57",
    }
    // Function Under Test
    store.dispatch(addNew(note))
    expect(store.getState().noteReducer.notes).toHaveLength(1)
  })
})

// fetchNotes action
describe("fetchNotes action creator:", () => {
  it("Should fetch all stored notes to the store", () => {
    // Function under test
    store.dispatch(fetchNotes())
    expect(store.getState().noteReducer.notes).toHaveLength(1)
  })
})

// updateNote action
describe("updateNote action creator:", () => {
  let id = 1
  const note = {
    id,
    noteTitle: 'Modified Title',
    noteBody: 'This note is modified',
    dateCreated: 'Mar 08 2022 09:57',
    dateModified: ''
  }
  let updatedNote
  beforeEach(() => {
    // Function under test
    store.dispatch(updateNote(note))
    updatedNote = store.getState().noteReducer.notes.filter(item => item.id === id)[0]
  })
  it("Should update the specified note.", () => {
    for (let i in updatedNote){
      if (updatedNote.hasOwnProperty(i)){
        if (i !== 'dateModified'){
          expect(updatedNote[i]).toEqual(note[i])
        }
      }
    }
  })
  it("Should update dateModified property- Change it to the current time.", () => {
    const currentTime = Date().slice(4, 21)
    expect(updatedNote.dateModified).toEqual(currentTime)
  })
})


// deleteNote action
describe("deleteNote action creator:", () => {
  it("Should delete the note with the specified 'id' from the store", () => {
    // Function under test
    const notesLen = store.getState().noteReducer.notes.length
    const id = 1
    store.dispatch(deleteNote(id))
    expect(store.getState().noteReducer.notes).toHaveLength(notesLen-1)
  })
})
