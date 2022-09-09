import { Component } from '@angular/core';
import { FootballService } from '../services/football.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  post = []
  constructor(private FootballService:FootballService) {}
  ngOnInit() {console.log('Ejecutandose por primera vez')
  
  this.FootballService.getservice().subscribe((datos :any)=>{
    console.log('estos son los datos de footballService',datos)
    this.post = datos.articles
  })
  }
}
