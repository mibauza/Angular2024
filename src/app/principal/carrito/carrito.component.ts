
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}
