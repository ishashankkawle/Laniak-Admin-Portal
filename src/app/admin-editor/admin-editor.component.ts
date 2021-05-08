import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.css']
})
export class AdminEditorComponent implements AfterViewChecked {

  constructor(private router : Router, private route : ActivatedRoute ) 
  { }

  ngAfterViewChecked(): void 
  {
    //this.router.navigate(["./editor"],{relativeTo:this.route})
  }

  ngOnInit(): void 
  {

  }

}
