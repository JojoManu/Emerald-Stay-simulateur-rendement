import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SimulateurComponent } from './features/components/simulateur/simulateur.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SimulateurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulation_rendement';
}
