import { Component } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {

  notesList: any[] = [];

  constructor(private noteservice: NoteservicesService) {
  }

  ngOnInit(): void {
    this.noteservice.getNotes().subscribe({
      next: (res: any) => {
        console.log(res.data.data);
        this.notesList = res.data.data;
        this.filterData();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  filterData() {
    this.notesList = this.notesList.filter((note: any) => {
      if (note.isArchived == true) {
        return note;
      }
    });
  }

  //delete the archived note , move to trash
  delete(note: any) {
    console.log(note);
    note.isArchived = false;
    note.isDeleted = true;
    this.noteservice.deleteNotes(note).subscribe({
      next: (res: any) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  //restore the archived note to notes
  restore(note: any) {
    console.log(note);
    note.isArchived = false;
    this.noteservice.deleteNotes(note).subscribe({
      next: (res: any) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


}

