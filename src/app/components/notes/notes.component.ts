import { Component } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notesList:any[]=[];

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

  filterData(){
    this.notesList = this.notesList.filter((note:any) => {
      if(note.isDeleted == false && note.isArchived == false){
        return note;
      }
    });
  }

  delete(note:any){
    console.log(note);
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

  archive(note:any){
    console.log(note);
    note.isArchived = true;
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
