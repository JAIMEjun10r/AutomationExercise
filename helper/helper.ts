import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash';


const nome = ["Joao", "Maria", "Pedro", "Kleber", "Roberto", "Vinicius",
    "Rafael", "Souza", "Setec", "Alana", "Baiao", "Moreira"];

const sobrenome = ["Borges", "Potulsky", "Nagassu", "Silveirado", "Robertson",
    "Navinski", "Charges", "Lacoste", "Sepulvida", "Bantosky", "Selvedo"]

const provedorEmail = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@example.com']


const gerarEmailAleatorio = () => {
    const nomeGerado = _.sample(nome);
    const uuid = uuidv4();
    const provedor = _.sample(provedorEmail);
    return `${nomeGerado}${uuid}${provedor}`;
  };


const gerarNomeAleatorio = () => {
    const nomeGerado = _.sample(nome);
    const sobrenomeGerado = _.sample(sobrenome);
    return `${nomeGerado} ${sobrenomeGerado}`;
};


export {
    gerarNomeAleatorio,
    gerarEmailAleatorio
}