import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  $class: "com.icotech.blockchain.RegistroPaciente";
  registropacienteId:string;
  codigopaciente:string;
  hospital:string;
  nomepaciente:string;
  abo:string;
  rh:string;
  numerosus:string;
  datanascimento:string;

  private qrcode: string;

  constructor(private http: Http) {}

   register() {
    this.qrcode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=paciente"+
    ","+this.registropacienteId+","+this.codigopaciente+","+this.hospital+","+this.nomepaciente+","
    +this.abo+","+this.rh+","+this.datanascimento;
    console.log(this.datanascimento);
    this.hyperPaciente();
   }

   hyperPaciente() {
     let obj = {
      $class: "com.icotech.blockchain.RegistroPaciente",
      registropacienteId: this.registropacienteId,
      codigopaciente: this.codigopaciente,
      hospital: this.hospital,
      nomepaciente: this.nomepaciente,
      abo: this.abo,
      rh: this.rh,
      numerosus: this.numerosus,
      datanascimento: this.datanascimento
     }
    let data;
    console.log(obj);
    if(data) {
      return Promise.resolve(data);
    }
    return new Promise(resolve => {
    this.http.post('http://40.71.2.182:3000/api/RegistroPaciente', obj).map(res => res.json()).subscribe(data => {
      resolve(data);
      }); 
    })
  }

  ngOnInit() {}

}
