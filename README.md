# 2º HackaThon BlockChain da Cotidiano Aceleradora de Startups - Time ICOTech - Aplicação HemoChain - Business Network

**Time ICOTech**

- Eduardo Rodrigues - Analista Desenvolvedor Mobile
- Gabriel Lucas - Analista Desenvolvedor Mobile
- Isabella Silva - Analista de Sistemas
- Luana Feitosa - Empreendedora/Gerente de Projetos
- Thálisson Lopes - Empreendedor/Gestor de TI


> Demonstra a principal funcionalidade do Hyperledger Composer para o HemoChain, solução que armazena dados de bolsa e paciente via BlockChain, por meio da inserção de dados em um Asset.

Este business network define:

**Asset**
`RegistroDoacao`

**Asset**
`RegistroPaciente`

O RegistroDoacao é utilizado para o armazenamento das informações do processamento da bolsa. O RegistroPaciente é utilizado para o armazenamento das informações do paciente que irá receber uma transfusão em um hospital.

Para o teste deste Business Network Definition na aba **Test**:

Crie um `RegistroDoacao` asset:

```
{
  "$class": "com.icotech.blockchain.RegistroDoacao",
  "registrodoacaoId": "001",
  "cpf": "11122233344",
  "datacoleta": "18/03/2018",
  "codigodoacao": "0120181803001",
  "abo": "O",
  "rh": "+",
  "hemocomponente": "25",
  "volume": "275",
  "datafracionamento": "19/03/2018"
  
}
```

Crie um `RegistroPaciente` asset:

```
{
  "$class": "com.icotech.blockchain.RegistroPaciente",
  "registropacienteId": "001",
  "codigopaciente": "010101",
  "hospital": "Hospital de Base de Brasília",
  "nomepaciente": "José da Silva",
  "abo": "O",
  "rh": "+",
  "numerosus": "02345",
  "datanascimento": "01/01/1960"
}
```


Depois de enviar estas informações, você deverá vê-la em seus respectivos registros.

