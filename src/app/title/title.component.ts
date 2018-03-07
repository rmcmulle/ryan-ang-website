import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    // DATA MEMBERS
    titleMessages = [
       "first",
       "second",
       "third",
       "this one's my favorite"
    ];

    titleMessageIndex = -1;

    currTitleMessage = '';

    // MEMBER FUNCTIONS
    incrementMessage() {
        this.titleMessageIndex++; // increment
        if (this.titleMessageIndex >= this.titleMessages.length) {
           this.titleMessageIndex = 0;
        }
        this.currTitleMessage = this.titleMessages[this.titleMessageIndex];
    }

}
//