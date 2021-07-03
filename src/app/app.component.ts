import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownActive: Boolean = false;
  options: any = [
    {
      "avatar": "assets/images/img_avatar_male.png",
      "name": "John",
      "email": "john@example.com"
    },
    {
      "avatar": "assets/images/img_avatar_female.png",
      "name": "Jane",
      "email": "jane@example.com"
    },
    {
      "avatar": "assets/images/img_avatar_male.png",
      "name": "Joker",
      "email": "joker@example.com"
    },
    {
      "avatar": "assets/images/img_avatar_male.png",
      "name": "Batman",
      "email": "batman@example.com"
    },
    {
      "avatar": "assets/images/img_avatar_male.png",
      "name": "Batman New option",
      "email": "batman@example.com"
    }
  ];
  selectedItems: any = [
    {
      "avatar": "assets/images/img_avatar_male.png",
      "name": "Batman",
      "email": "batman@example.com"
    }
  ];

  constructor() {

  }

  selected(item: any) {
    this.selectedItems.push(item);
  }

  removed(index: number) {
    this.selectedItems.splice(index, 1);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
