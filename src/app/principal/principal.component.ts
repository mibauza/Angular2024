import { Component, OnInit } from '@angular/core';

import { CarritoComponent } from './carrito/carrito.component';
import { RouterLink } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { PcComponent } from './pc/pc.component';




@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [PcComponent, CarritoComponent, RouterLink, HttpClientModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  
  constructor(){};
  
  ngOnInit(): void {
    console.log("OnInit principal");
  }



}
