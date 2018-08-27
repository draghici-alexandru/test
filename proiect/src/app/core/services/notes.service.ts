import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private newNoteSource = new Subject<any>();

  newNote$ = this.newNoteSource.asObservable();

  newNoteAded(note) {
    this.newNoteSource.next(note);
  }
}
