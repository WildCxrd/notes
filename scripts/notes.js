const NOTES = ['banana', 'rasen mähen'];
const TRASH_NOTES = [];

function renderNotes() {
    const contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let notesIndex = 0; notesIndex < NOTES.length; notesIndex++) {
        contentRef.innerHTML += getNoteTemplate(notesIndex);
    }
}

function renderTrashNotes() {
    const trashContentRef = document.getElementById("trashContent");
    trashContentRef.innerHTML = "";

    for (let trashNotesIndex = 0; trashNotesIndex < TRASH_NOTES.length; trashNotesIndex++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(trashNotesIndex);
    }
}

function getNoteTemplate(noteIndex) {
    return `<p>+ ${NOTES[noteIndex]}<button onclick="moveNoteToTrash(${noteIndex})">X</button></p>`;
}

function getTrashNoteTemplate(trashNoteIndex) {
    return `<p>+ ${TRASH_NOTES[trashNoteIndex]}<button onclick="deleteNote(${trashNoteIndex})">X</button></p>`;
}

function addNote() {
    const noteInputRef = document.getElementById("noteInput");
    const noteInput = noteInputRef.value;

    NOTES.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function moveNoteToTrash(noteIndex) {
    const trashNote = NOTES.splice(noteIndex, 1)
    TRASH_NOTES.push(trashNote);

    renderNotes();
    renderTrashNotes();
}

function deleteNote(trashNoteIndex) {
    TRASH_NOTES.splice(trashNoteIndex, 1)
    renderTrashNotes();
}