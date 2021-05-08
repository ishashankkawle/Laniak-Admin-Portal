import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { folderResponse } from '../Models/folderResponse';
import { DatastoreService } from './datastore.service';
import { CoreService } from './core-service.service';

@Injectable({
  providedIn: 'root'
})
export class FolderService extends CoreService {
  
  constructor(private http : HttpClient, private datastoreService : DatastoreService) 
  {
    super();
  }

  loadFolders()
  {
    console.log("call to loadFolders")
    return this.http.get<folderResponse[]>( this.url + "tree" , this.HeaderOptions)
  }

  createFolder(folderName : string)
  {
    let reqBody = this.getCUJsonBody()
    let link = this.url + "files/" + folderName + "%2FRead%2Emd?branch=master"
    return this.http.post(link , reqBody, this.AdminHeaderOptions)
  }

  assignFolderList(data: folderResponse[])
  {
    this.datastoreService.FolderList = []
    data.forEach(element => {
      if (element.type == SharedDataAssets.FOLDER)
      {
        this.datastoreService.FolderList.push(element.name)
      }
    });
    this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
  }

  addFolderInFolderList(folderName : string)
  {
    this.datastoreService.FolderList.push(folderName);
  }

  removeFolderFromFolderList(currentFolder: string)
  {
    let temp = []
    let removedFolder = ""

    console.log("FOLDER List  " + currentFolder);
    if(this.datastoreService.FolderList.length == 1)
    {
      console.log("Last Folder popped")
      removedFolder = this.datastoreService.FolderList.pop()
      return;
    }

    while(removedFolder != currentFolder)
    {
      removedFolder = this.datastoreService.FolderList.pop()
      if(removedFolder != currentFolder)
      {
        console.log(removedFolder)
        temp.push(removedFolder)
      }
    }
    
    if(temp.length != 0)
    {
      for(let i = 0; i<temp.length; i++)
      {
        this.datastoreService.FolderList.push(temp.pop())
      } 
    }  
  }
}
