export class BolsaModel {
    $class: string = 'com.icotech.network.assets.Bolsa';
    bolsaId: string;
    abo: string;
    rh: string;
    hemocomponente: string;
    volume: string;
    datavalidade: string;
    datafracionamento: string;
}

export class DoacaoModel {
    $class: string = 'com.icotech.network.participants.Doacao';
    doacaoId: string;
    codigodoacao: string;
    datacoleta: string;
    nomeInstituicao: string;
}

export class DoadorModel {
    $class: string = 'com.icotech.network.participants.Doador';
    doadorId: string;
    codigodoador: string;
    nomedoador: string;
    cpf: string;
    nomeInstituicao: string;
}

export class PacienteModel {
    $class: string = 'com.icotech.network.assets.Paciente';
    pacienteId: string;
    codigopaciente: string;
    nomepaciente: string;
    datanascimento: string;
    numerosus: string;
    nomeInstituicao: string;
    abo: string;
    rh: string;
}

export class RegistroDoacaoModel {
    $class: string = 'com.icotech.network.transactions.RegistroDoacao';
    bolsa: string;
    doador: string;
    doacao: string;
}

export class RegistroPacienteBolsaModel {
    $class: string = 'com.icotech.network.transactions.RegistroPacienteBolsa';
    bolsa: string;
    paciente: string;
}