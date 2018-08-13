import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceHttp {
    constructor(private http: Http) { }

    sendHyperLedger(obj, type) {
        let url = '';
        switch (type) {
            case 'paciente':
                url = 'http://40.71.2.182:3000/api/RegistroPaciente';
                console.log('Paciente');
                break;
            case 'doacao':
                url = 'http://40.71.2.182:3000/api/RegistroDoacao';
                console.log('Doação');
                break;
            case 'bolsa':
                url = '';
                console.log('Bolsa');
                break;
            case 'doador':
                url = '';
                console.log('Doador');
                break;
            case 'RegistroPacienteBolsa':
                url = '';
                console.log('RegistroPacienteBolsa');
                break;
            case 'RegistroDoacao':
                url = '';
                console.log('RegistroDoacao');
                break;
        }

        let data;
        console.log(obj);
        if (data)
            return Promise.resolve(data);

        /*return new Promise(resolve => {
          this.http.post(url, obj).map(res => res.json()).subscribe(data => {
            resolve(data);
          }); 
        });*/
    }
}