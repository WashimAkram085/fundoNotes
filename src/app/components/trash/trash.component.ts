import { Component } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
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
      if(note.isDeleted == true){
        return note;
      }
    });
  }
}
