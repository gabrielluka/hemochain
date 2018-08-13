import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DoadorModel } from '../../model/ativos';
import { ServiceHttp } from '../../https/service';

@Component({
  selector: 'doador',
  templateUrl: './doador.component.html',
  styleUrls: ['./doador.component.css']
})
export class DoadorComponent implements OnInit {

  d: DoadorModel = new DoadorModel();
  private qrcode: string;
  constructor(private http: Http, private service: ServiceHttp) { }

  register() {
    this.qrcode =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Doador" +
    ","+this.d.codigodoador+","+this.d.cpf+","+this.d.doadorId+","+this.d.nomedoador+","+this.d.nomeInstituicao;

    this.service.sendHyperLedger(this.d, 'doador');

  }

  ngOnInit() {}

}
