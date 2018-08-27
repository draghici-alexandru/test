import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() note: Notes;

  constructor() { }

  ngOnInit() {
  }

}
