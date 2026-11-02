function getNoteTemplate(indexNote) {
    return `
    <div class="note">
        <h3>${ALL_NOTES.notesTitles[indexNote]}</h3>
        <p>${ALL_NOTES.notes[indexNote]}</p>
        <div>
            <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="btn">X</button>
            <button onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')" class="btn">A</button>
        </div>
    </div>
    `;
}

function getArchiveNoteTemplate(indexNote) {
    return `
    <div class="note">
        <h3>${ALL_NOTES.archiveNotesTitles[indexNote]}</h3>
        <p>${ALL_NOTES.archiveNotes[indexNote]}</p>
        <div>
            <button onclick="moveNote(${indexNote}, 'archiveNotes', 'trashNotes')" class="btn">X</button>
            <button onclick="moveNote(${indexNote}, 'archiveNotes', 'notes')" class="btn">N</button>
        </div>
    </div>
    `;
}

function getTrashNoteTemplate(indexNote) {
    return `
    <div class="note">
        <h3>${ALL_NOTES.trashNotesTitles[indexNote]}</h3>
        <p>${ALL_NOTES.trashNotes[indexNote]}</p>
        <div>
            <button onclick="deleteNote(${indexNote})" class="btn">X</button>
            <button onclick="moveNote(${indexNote}, 'trashNotes', 'notes')" class="btn">N</button>
        </div>
    </div>
    `;
}