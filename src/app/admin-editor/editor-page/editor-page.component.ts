import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page-service.service';
import { DatastoreService } from '../../../services/datastore.service';
import { EditorService } from '../../../services/editor-service.service';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  notepad: any;
  fontColor = '#008800';
  highlightColor = '#ffffff';
  wordCount = 14
  constructor(private pageService: PageService, private datastoreService: DatastoreService, private editorSerice: EditorService) { }

  ngOnInit() {
    this.notepad = document.getElementById('laniak-base-editing-field');
  }

  countWords()
  {
    this.wordCount = this.notepad.innerText.length;
  }

  checkParent(parent, child) {
    if (parent.contains(child)) {
      return true;
    }
    return false;
  }

  makeHeader1() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.fontSize = "40px"
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeHeader2() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.fontSize = "20px"
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeNormal() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.fontSize = "14px"
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeBold() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.fontWeight = 'bold'
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeItalic() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.fontStyle = 'italic'
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeUnderLine() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.textDecoration = "underline"
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  makeStrikeThrough() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.textDecoration = "line-through"
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  alignLeft() {
    document.execCommand("justifyLeft" , true);
  }

  alignCenter() {
    document.execCommand("justifyCenter" , true);
  }

  alignRight() {
    document.execCommand("justifyRight" , true);
  }

  triggerFontColorPicker() {
    document.getElementById('lan-font-col-picker').click();
  }

  triggerHighlightColorPicker() {
    document.getElementById('lan-highlight-col-picker').click();
  }

  copy() 
  {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let anyNavigator: any
      anyNavigator = window.navigator
      let range = window.getSelection().getRangeAt(0);
      const oldConent = range.toString();
      anyNavigator.clipboard.writeText(String(oldConent));
    }
  }

  cut() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let anyNavigator: any
      anyNavigator = window.navigator
      let range = window.getSelection().getRangeAt(0);
      const oldConent = range.toString();
      anyNavigator.clipboard.writeText(String(oldConent));
      const newElement = document.createElement('span');
      range.deleteContents();
      range.insertNode(newElement)
    }
  }

  setFontColor() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.color = this.fontColor
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement)
    }
  }

  setHighLightColor() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('span');
      newElement.style.backgroundColor = this.highlightColor
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement)
    }
  }

  subScript() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('sub');
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  superScript() {
    if (window.getSelection().anchorNode.parentElement.id == "laniak-base-editing-field" || this.checkParent(this.notepad, window.getSelection().anchorNode)) {
      let range = window.getSelection().getRangeAt(0);
      const oldConent = document.createTextNode(range.toString());
      const newElement = document.createElement('sup');
      newElement.appendChild(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  increaseSize() {
    document.execCommand('increaseFontSize', false);
  }

  saveData() {
    let contents = this.editorSerice.getTextFromEditor()
    this.pageService.updatePage(contents).subscribe(() => console.log("updated"))
  }

  reloadData() {
    this.pageService.loadRaw(this.datastoreService.CurrentPage).subscribe((data: string) => this.notepad.innerHTML = data)
  }

  clearData() {
    this.notepad.innerText = ""
  }
}
