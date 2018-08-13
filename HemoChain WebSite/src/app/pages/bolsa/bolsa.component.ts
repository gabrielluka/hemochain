import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BolsaModel } from '../../model/ativos';
import { ServiceHttp } from '../../https/service';

@Component({
  selector: 'bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {

  b: BolsaModel = new BolsaModel();
  private qrcode: string;
  constructor(private http: Http, private service: ServiceHttp) { }

  register() {
    let rh = "";
    if (this.b.rh == "-")
      rh = "negativo";
    else
      rh = "positivo";

    this.qrcode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bolsa" +
      "," + this.b.volume + "," + this.b.bolsaId + "," + this.b.datafracionamento + "," +
      this.b.datavalidade + "," + this.b.hemocomponente + "," + rh + "," + this.b.abo;

    console.log(this.qrcode);
    this.service.sendHyperLedger(this.b, 'bolsa');

  }

  ngOnInit() { }

}
