import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'app/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  addNoteForm: FormGroup;

  constructor(private _noteAdded: NotesService, private fb: FormBuilder) { }

  initForm() {
    this.addNoteForm = this.fb.group({
      note: ['', [Validators.required,  Validators.pattern(/(?=.*[a-zA-Z0-9])/)]]
    });
  }
  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const note = {
      value: this.addNoteForm.value.note,
      date: new Date()
    };
    this._noteAdded.newNoteAded(note);
  }

}
