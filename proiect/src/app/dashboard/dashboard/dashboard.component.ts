import { Component, OnInit } from '@angular/core';
import { NotesService } from 'app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NotesService]
})
export class DashboardComponent implements OnInit {
  noteToAdd: any = null;

  constructor(private notesService: NotesService) {
    notesService.newNote$.subscribe(
      note => {
        this.noteToAdd = note;
      });
  }

  ngOnInit() {
  }

}
