import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  authorsList = [];
  authorToUpdate: any;
  authorToDisplay: any;
  displayCreateForm: boolean;
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAuthors();
  }

  getDetails(id) {
    this.displayCreateForm = false;
    this.authorToUpdate = undefined;
    let observable = this._http.getAuthor(id);
    observable.subscribe(data => {
      this.authorToDisplay = data['author'];
      console.log("im here", data)

    })
  }

  createAuthor() {
    this.authorToUpdate = undefined;
    this.authorToDisplay = undefined;
    this.displayCreateForm = true;
  }

  UpdateAuthor(id) {
    this.displayCreateForm = false;
    this.authorToDisplay = undefined;
    let observable = this._http.getAuthor(id);
    observable.subscribe(data => {
      console.log('Got author');
      this.authorToUpdate = data['author'];
    })
  }

  getAuthors() {
    this.authorToUpdate = undefined;
    this.authorToDisplay = undefined;
    this.displayCreateForm = false;
    let observable = this._http.getAuthors();
    observable.subscribe(data => {
      this.authorsList = data['authors'];
    })
  }

  handleNavigateHome(evt) {
    this.router.navigate(['/']);
    this.getAuthors();
    this.authorToUpdate = undefined;
    this.authorToDisplay = undefined;
    this.displayCreateForm = false;
  }


}
