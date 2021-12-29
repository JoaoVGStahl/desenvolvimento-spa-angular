import { Component} from '@angular/core';

@Component({
  selector: 'app-databindings',
  templateUrl: './databindings.component.html',
  styles: []
})
export class DatabindingsComponent{
  public contadorCliques: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg"

  public nome: string = "";

  contarClique(){
    this.contadorCliques++;
  }
  resetarClique(){
    this.contadorCliques = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }
}
