document.getElementById("upload-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileName = file.name;
            const notesList = document.getElementById("notes-list");

            const noteItem = document.createElement("div");
            noteItem.innerHTML = `<h3>${fileName}</h3><a href="${e.target.result}" download>Download</a>`;
            notesList.appendChild(noteItem);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const notes = document.querySelectorAll("#notes-list div");
    
    notes.forEach(note => {
        const title = note.querySelector("h3").textContent.toLowerCase();
        note.style.display = title.includes(query) ? "block" : "none";
    });
});
function filterNotes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('filterOptions').value;
    const notes = document.querySelectorAll('.note-item');

    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        const matchesSearch = text.includes(input);
        const matchesFilter = filter === "all" || text.includes(filter);

        if (matchesSearch && matchesFilter) {
            note.style.display = '';
        } else {
            note.style.display = 'none';
        }
    });
}
