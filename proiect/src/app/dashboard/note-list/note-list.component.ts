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
    this.myNotes.push(this.note);
  }

}
