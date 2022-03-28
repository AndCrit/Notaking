export default class NotesView {

    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}) {
        this.root = root;
        this.onNoteAdd = onNoteAdd;
        this.onNoteDelete = onNoteDelete;
        this.onNoteEdit  = onNoteEdit;
        this.onNoteSelect = onNoteSelect;
        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class = "notes__add" type ="button" > Add Note</button>
                <div class="notes__list ">
                    <div class="notes__list-item notes__list-item--selected">
                        <div class="notes__small-title">Lecture Note</div>
                        <div class="notes__small-body">I did not learn anything today</div>
                        <div class="notes__small-updated">Thursday 3:30 pm</div>
                    </div>
                </div>

            </div>
            <div class="notes__preview">
                <input class = "notes__title" type="New Notaking">
                <textarea class = "notes__body">Start Notaking</textarea>
            </div>
        
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", () => {
            
            this.onNoteAdd();
        });
    }
}