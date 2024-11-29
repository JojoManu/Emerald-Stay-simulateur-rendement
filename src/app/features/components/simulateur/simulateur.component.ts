import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simulateur',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './simulateur.component.html',
  styleUrl: './simulateur.component.css'
})
export class SimulateurComponent {
  commissions = [0.3, 0.25, 0.2];
  resultats: number[][] = [];
  //applyForm => a changé c'est le nom du formluaire
  applyForm = new FormGroup({
    prixAchat : new FormControl(null,Validators.required),
    loyerMensuel : new FormControl(null,Validators.required),
    chargesLocativesAnnuelles : new FormControl(null,Validators.required)
  })
  submitForm() {
    const prixAchat = this.applyForm.value.prixAchat || 0;
    const loyerMensuel = this.applyForm.value.loyerMensuel || 0;
    const chargesLocativesAnnuelles = this.applyForm.value.chargesLocativesAnnuelles || 0;

    const revenuAnnuelBrut = loyerMensuel*12;
    for (let commission of this.commissions) {
      let revenuAnnuelNet = revenuAnnuelBrut-chargesLocativesAnnuelles-(revenuAnnuelBrut*commission);
      let revenuMensuelNet = revenuAnnuelNet/12;
      let rendement = revenuAnnuelNet/prixAchat*100;
      this.resultats.push([revenuMensuelNet, rendement])
    }
  }
}
