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
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
