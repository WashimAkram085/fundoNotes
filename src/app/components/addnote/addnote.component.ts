import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteservicesService } from '../../services/noteservices.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  //@Output() noteAdded: EventEmitter<any> = new EventEmitter<any>();


  constructor(private fb: FormBuilder , private noteservice : NoteservicesService) { }
  notesform!: FormGroup;
  isExpanded: Boolean = false;
  ngOnInit(): void {
    this.notesform = this.fb.group({
      title: [''],
      note: [''],
      isPinned: [false],
      isReminded: [false],
      isArchived: [false]
    });

  }
  addNote = () => {
    let FormData = {
      title:this.notesform.get('title')?.value,
      note:this.notesform.get('note')?.value,
    }
    this.noteservice.addNotes(FormData).subscribe({
      next: (res: any) => {
        console.log(res);
        window.location.reload();
        //this.notesList = res.data.data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  submitNote = () => {
    this.isExpanded = false;
    console.log(this.notesform.value)

    this.addNote();

  }
  expand = () => {
    this.isExpanded = true;
  }
}
