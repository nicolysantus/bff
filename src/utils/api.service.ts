import axios from 'axios';
import https from 'https';

export const api = axios.create({
  baseURL: "https://localhost:7008/api/Cadastro",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Desabilita a verificação SSL
  })
});
