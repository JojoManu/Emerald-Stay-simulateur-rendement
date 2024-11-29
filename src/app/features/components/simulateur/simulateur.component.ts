import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-simulateur',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './simulateur.component.html',
  styleUrl: './simulateur.component.css'
})
export class SimulateurComponent {
  commissions = [0.3, 0.25, 0.2]; // Les commissions appliquées sur les loyers pour les 3 premières années
  resultats: number[][] = []; // Stocke les résultats sous forme de tableau de [Revenu Mensuel Net, Rendement]
  // Formulaire pour collecter les données utilisateur
  simulateurForm = new FormGroup({
    prixAchat : new FormControl(null,Validators.required), // Prix d'achat du bien immobilier (champ obligatoire)
    loyerMensuel : new FormControl(null,Validators.required), // Loyer mensuel brut (champ obligatoire)
    chargesLocativesAnnuelles : new FormControl(null,Validators.required) // Charges locatives annuelles (champ obligatoire)
  })
  /**
   * Envoi du formulaire et calcule pour les 3 premières années.
   * - Revenu Mensuel Net : revenu annuel net divisé par 12.
   * - Rendement : revenu annuel net divisé par le prix d'achat multiplié par 100.
   */
  submitForm() {
    // Extraction des valeurs du formulaire avec une valeur par défaut de 0 si null/undefined
    const prixAchat = this.simulateurForm.value.prixAchat || 0;
    const loyerMensuel = this.simulateurForm.value.loyerMensuel || 0;
    const chargesLocativesAnnuelles = this.simulateurForm.value.chargesLocativesAnnuelles || 0;

    // Calcul du revenu annuel brut
    const revenuAnnuelBrut = loyerMensuel*12;

    // Boucle sur le nombre de commmission
    for (let commission of this.commissions) {
      let revenuAnnuelNet = revenuAnnuelBrut-chargesLocativesAnnuelles-(revenuAnnuelBrut*commission);
      let revenuMensuelNet = revenuAnnuelNet/12;
      let rendement = revenuAnnuelNet/prixAchat*100;
      //les résultats sont rangée année par année dans un tableau
      this.resultats.push([revenuMensuelNet, rendement])
    }
  }
}
