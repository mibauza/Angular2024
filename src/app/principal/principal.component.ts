import { Component } from '@angular/core';
import { PcComponent } from './pc/pc.component';
import { CarritoComponent } from './carrito/carrito.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [PcComponent, CarritoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  

}
