import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchPipe implements PipeTransform {

  transform(datalist : any[], search : string):any{
    if(!datalist){
      return [];
    }else if(!search){
      return datalist;
    }else{
      search = search.toLowerCase();
      return datalist.filter((note:any) => {
        if(note.title.toLowerCase().includes(search) || note.description.toLowerCase().includes(search)){
          return note;
        }
      });
    }
  }

}
