import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DoacaoModel } from '../../model/ativos';
import { ServiceHttp } from '../../https/service';

@Component({
  selector: 'doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  d: DoacaoModel = new DoacaoModel();
  private qrcode: string;
  constructor(private http: Http, private service: ServiceHttp) { }

  register() {
    this.qrcode =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Doacão" +
    ","+this.d.codigodoacao+","+this.d.datacoleta+","+this.d.doacaoId+","+this.d.nomeInstituicao;

    this.service.sendHyperLedger(this.d, 'doacao');

  }

  ngOnInit() {}

}
