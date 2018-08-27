import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'app/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  addnoteForm: FormGroup;

  constructor(private _noteAdded: NotesService, private fb: FormBuilder) { }

  initForm() {
    this.addnoteForm = this.fb.group({
      note: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    let thenote = {
      value: this.addnoteForm.value.note,
      date: new Date()
    };
    this._noteAdded.newNoteAded(thenote);
  }

}
