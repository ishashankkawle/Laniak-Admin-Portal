import { Injectable } from '@angular/core';
import { DatastoreService } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor( private datastoreService : DatastoreService) 
  {
  }

  public loadTextOnEditor(text : string)
  {
    document.getElementById(this.datastoreService.notepadId).innerHTML = text
  }

  public getTextFromEditor()
  {
    return document.getElementById(this.datastoreService.notepadId).innerHTML;
  }
}
