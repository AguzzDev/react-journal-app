import { db } from "../firebase/firebaseConfig"

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get()
  const notes = []

  notesSnap.forEach(snaph => {
    notes.push({
      id: snaph.id,
      ...snaph.data()
    })
  })

  return notes
}