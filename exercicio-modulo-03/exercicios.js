//Exercício: Transforme os seguintes trechos de código utilizando async/await:

//1.1

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}

umPorSegundo();

//1.2
import axios from 'axios';

class Api {
    static async getUserFromGithub(user) {
      try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
      } catch (error) {
        console.log('Usuário não existe');
      }
  }
}
Api.getUserFromGithub('RicardoMejolaro');
Api.getUserFromGithub('RicardoMejolaro1234');

//1.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);
    } catch (error) {
      console.log('Repositório não existe');
    }
  }
}
Github.getRepositories('RicardoMejolaro/statspcwhitnodejs');
Github.getRepositories('RicardoMejolaro/statspcwhitnodejs/dslkvmskv');

//1.4

const buscaUsuario = async (usuario) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log(response.data);
  } catch (error) {
    console.log('Usuário não existe!');
  }
}

buscaUsuario('RicardoMejolaro');
