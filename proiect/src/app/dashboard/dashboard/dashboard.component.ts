import { Component, OnInit } from '@angular/core';
import { NotesService } from 'app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NotesService]
})
export class DashboardComponent implements OnInit {
  noteToAdd: string[] = [];

  constructor(private notesService: NotesService) {
    notesService.newNote$.subscribe(
      notes => {
        this.noteToAdd.push(notes);
      });
  }

  ngOnInit() {
  }

}
