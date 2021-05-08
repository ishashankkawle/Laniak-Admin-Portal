import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatastoreService 
{ 
  public CurrentFolder = "Nothing opened";
  public CurrentPage = "Nothing opened";
  IsUserAuthenticated = false;
  displayFolderPopup = false;
  displayPagePopup = false;
  displayNewFolderPopup = false;
  displayNewPagePopup = false;
  notepadId = "laniak-base-editing-field"
  // Values must be locally added to following arrays for updating the lists
  FolderList: string[] = []
  PageList: string[] = []

  constructor() { }

  public setFolder(FolderName : string): void
  {
    this.CurrentFolder  = FolderName;
  }

  public setPage(PageName : string): void
  {
    this.CurrentPage = PageName;
  }

  public openFolderPopup()
  {
    this.displayFolderPopup = true;
  }

  public closeFolderPopup()
  {
    this.displayFolderPopup = false;
  }

  public getFolderPopupStatus()
  {
    return this.displayFolderPopup;
  }
  
  public openNewFolderPopup()
  {
    this.displayNewFolderPopup = true;
  }

  public closeNewFolderPopup()
  {
    this.displayNewFolderPopup = false;
  }

  public getNewFolderPopupStatus()
  {
    return this.displayNewFolderPopup;
  }
  
  public openPagePopup()
  {
    this.displayPagePopup = true;
  }

  public closePagePopup()
  {
    this.displayPagePopup = false;
  }

  public getPagePopupStatus()
  {
    return this.displayPagePopup;
  }

  public openNewPagePopup()
  {
    this.displayNewPagePopup = true;
  }

  public closeNewPagePopup()
  {
    this.displayNewPagePopup = false;
  }

  public getNewPagePopupStatus()
  {
    return this.displayNewPagePopup;
  }

}
