import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home/home/queries/queries'])
  }

  
  

}
