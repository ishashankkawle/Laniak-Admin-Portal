import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../services/datastore.service';
import {MatDialog} from '@angular/material';
import { FolderListComponent } from '../folder-list/folder-list.component';
import { FolderService } from 'src/services/folder-service.service';
import { PageService } from 'src/services/page-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit 
{
  folderComp: FolderListComponent;
  constructor(private router : Router, private route : ActivatedRoute,private datastoreService : DatastoreService,public dialog : MatDialog , private folderService : FolderService , private pageService : PageService) 
  { }

  ngOnInit() 
  {}

  homeClick(): void
  {
    //this.router.navigate(["/admin-panel/editor"])
  }

  newFolderClick(): void
  {
    if(this.datastoreService.getNewFolderPopupStatus()) 
    {
      this.datastoreService.closeNewFolderPopup();
    }
    else
    {
      this.datastoreService.openNewFolderPopup();
    }
  }

  openFolderClick(): void
  {
    if(this.datastoreService.getFolderPopupStatus()) 
    {
      this.datastoreService.closeFolderPopup();
    }
    else
    {
      this.datastoreService.openFolderPopup();
    }
  }

  newPageClick(): void
  {
    if(this.datastoreService.getNewPagePopupStatus()) 
    {
      this.datastoreService.closeNewPagePopup();
    }
    else
    {
      this.datastoreService.openNewPagePopup();
    }
  }

  openPageClick(): void
  {
    if(this.datastoreService.getPagePopupStatus()) 
    {
      this.datastoreService.closePagePopup();
    }
    else
    {
      this.datastoreService.openPagePopup();
    }
  }
}
