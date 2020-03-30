import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service'
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() showCreate: boolean;
  @Output() navigateHome = new EventEmitter();

  handleCancelClick(){
    console.log("cancelled page")
    console.log(this)
    this.router.navigate([''])
  }
  author = {
    name: "",
    quotes: []
  }
  error: any;

  constructor(private _httpService: HttpService, private router: Router) {
    console.log('constructor');
    console.log(this);
  }

  ngOnInit() {
    console.log('init')
    console.log(this)
    this.error = [];
  }
  create() {
    let observable = this._httpService.addAuthor(this.author);
    console.log("creating")
    observable.subscribe(data => {
      this.navigateHome.emit('go');
      console.log(data);
      if (data instanceof Array){
        this.error = data;
      }
    else{
    this.router.navigate(['']);
    this.author = {
      name: '',
      quotes: []
    }
    }
    })
  }
}
