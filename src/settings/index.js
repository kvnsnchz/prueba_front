import axios from 'axios';

export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'ULULEO',
  siteIcon: 'ion-flash',
  footerText: 'ULULEO - Todos los derechos reservados 2018',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'spanish';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

const request = axios.create({
  baseURL: 'http://localhost/prueba_back/public/api/',
});

const urlUser = 'user';
const urlAdmin = 'admin';

const paleta = {
  blue: '#0099CC',
  blueDark: '#212F3D',
  orange: '#FF8000',
  orange2: '#FF9900',
  gray: '#828181',
  green: '#40A629',
};

const estadoSolicitud = {
  proceso: '0',
  proceso2: '5',
  pagado: '1',
  pagado2: '3',
  rechazado: '2',
  rechazado2: '4',
};

const url = 'http://www.webapp.linketi.com/';

export { 
  siteConfig, 
  language, 
  themeConfig, 
  jwtConfig, 
  request, 
  urlUser, 
  urlAdmin, 
  paleta, 
  url,
  estadoSolicitud 
};
