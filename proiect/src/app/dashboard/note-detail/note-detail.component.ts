import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  editNoteForm: FormGroup;
  edit: any = false;
  @Input() note: any;

  constructor(private fb: FormBuilder) { }

  initForm() {
    this.editNoteForm = this.fb.group({
      note: [{value: this.note.value, disabled: true}, [Validators.required]]
    });
  }
  ngOnInit() {
    this.initForm();
  }
  onShow() {
    this.edit = true;
    this.editNoteForm.controls['note'].enable();
  }

  editSubmit() {
    this.editNoteForm.value['note'] = this.editNoteForm.value.note;
    this.edit = false;
    this.editNoteForm.controls['note'].disable();
  }

  delete() {
  }
}
