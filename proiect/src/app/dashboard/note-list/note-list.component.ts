import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnChanges {
  @Input() note: any;

  myNotes: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.note) {
      this.myNotes.push(this.note);
    }
  }

  deleteNote(event) {
    let index;
    for ( let i = 0; i < this.myNotes.length; i++) {
      if (this.myNotes[i].date == event.date) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      this.myNotes.splice(index, 1);
    }
  }

}
