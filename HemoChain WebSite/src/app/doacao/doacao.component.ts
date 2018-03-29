import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bolsa',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {


  $class: string = "com.icotech.blockchain.RegistroDoacao";
  registrodoacaoId: string;
  cpf:string;
  codigodoacao:string;
  hemocomponente:string;
  datacoleta:string;

  qrcode: string;

  //Novos Campos
  abo: string;
  rh: string;
  volume: string;
  datafracionamento: string;

  constructor(private http: Http) {

  }

 
  hyperDoacao() {
    let obj = {
      $class: "com.icotech.blockchain.RegistroDoacao",
      registrodoacaoId: this.registrodoacaoId,
      cpf: this.cpf,
      datacoleta: this.datacoleta,
      codigodoacao: this.codigodoacao,
      abo: this.abo,
      rh: this.rh,
      hemocomponente: this.hemocomponente,
      volume: this.volume,
      datafracionamento: this.datafracionamento
    }
    console.log(obj);
    let data;
    if(data) {
      return Promise.resolve(data);
    }
    return new Promise(resolve => {
      this.http.post('http://40.71.2.182:3000/api/RegistroDoacao', obj).map(res => res.json()).subscribe(data => {
        resolve(data);
      }); 
    })
}

  register() {
    this.qrcode =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bolsa" +
    ","+this.registrodoacaoId+","+this.cpf+","+this.codigodoacao+","+this.hemocomponente+","+this.datacoleta;
    console.log(this.datacoleta);
    this.hyperDoacao();
  }

  ngOnInit() {}

}
