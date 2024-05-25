import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PrincipalComponent, HttpClientModule]
})
export class AppComponent {
  title = 'PcShop';
}
