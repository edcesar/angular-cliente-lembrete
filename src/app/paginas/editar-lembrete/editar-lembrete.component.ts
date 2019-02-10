import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
  public lembrete: Lembrete
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
 
  constructor(
    private lembreteService: LembreteService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { 
      this.getLembrete(this.activeRoute.snapshot.params.id);
    }

    getLembrete(id: number) {
      this.lembreteService.getLembrete(id)
        .subscribe(
          (lembrete: Lembrete) => {
            this.lembrete = lembrete;
          }, 
          () => {
            this.errorMsgComponent.setError('Falha ao buscar lembrete.');
          }
        );
    }
}
