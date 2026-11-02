const ALL_NOTES = {
    'notesTitles': ['Ba', 'Aufgabe'],
    'notes': ['banana', 'rasen mähen'],
    'archiveNotesTitles': [],
    'archiveNotes': [],
    'trashNotesTitles': [],
    'trashNotes': []
}

function moveNote(indexNote, startKey, destinationKey) {
    const note = ALL_NOTES[startKey].splice(indexNote, 1);
    ALL_NOTES[destinationKey].push(note[0]);

    const notesTitle = ALL_NOTES[startKey + "Titles"].splice(indexNote, 1);
    ALL_NOTES[destinationKey + "Titles"].push(notesTitle[0]);

    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

function renderNotes() {
    const contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let notesIndex = 0; notesIndex < ALL_NOTES.notes.length; notesIndex++) {
        contentRef.innerHTML += getNoteTemplate(notesIndex);
    }
}

function renderArchiveNotes() {
    const archiveContentRef = document.getElementById("archiveContent");
    archiveContentRef.innerHTML = "";

    for (let archiveNotesIndex = 0; archiveNotesIndex < ALL_NOTES.archiveNotes.length; archiveNotesIndex++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(archiveNotesIndex);
    }
}

function renderTrashNotes() {
    const trashContentRef = document.getElementById("trashContent");
    trashContentRef.innerHTML = "";

    for (let trashNotesIndex = 0; trashNotesIndex < ALL_NOTES.trashNotes.length; trashNotesIndex++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(trashNotesIndex);
    }
}

function addNote() {
    const titleInputRef = document.getElementById("titleInput");
    const titleInput = titleInputRef.value;

    const noteInputRef = document.getElementById("noteInput");
    const noteInput = noteInputRef.value;

    ALL_NOTES.notesTitles.push(titleInput);
    ALL_NOTES.notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexTrashNote) {
    ALL_NOTES.trashNotes.splice(indexTrashNote, 1);
    ALL_NOTES.trashNotesTitles.splice(indexTrashNote, 1);

    renderTrashNotes();
}