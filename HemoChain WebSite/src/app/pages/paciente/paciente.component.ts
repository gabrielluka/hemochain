import { Component, OnInit } from '@angular/core';
import { PacienteModel } from '../../model/ativos';
import { ServiceHttp } from '../../https/service';

@Component({
  selector: 'paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent implements OnInit {

  p: PacienteModel = new PacienteModel();
  private qrcode: string;

  constructor(private service: ServiceHttp) { }

  register() {
    let rh = "";
    if (this.p.rh == "-")
      rh = "negativo";
    else
      rh = "positivo";

    this.qrcode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=paciente" +
      "," + this.p.pacienteId + "," + this.p.codigopaciente + "," + this.p.nomepaciente + ","
      + this.p.datanascimento + "," + this.p.numerosus + "," + this.p.nomeInstituicao + "," + rh + "," + this.p.abo;

    console.log(this.qrcode);
    /** */
    this.service.sendHyperLedger(this.p, 'paciente');
  }

  ngOnInit() { }

}
