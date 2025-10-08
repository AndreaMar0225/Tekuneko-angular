
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/Nosotros"
  },
  {
    "renderMode": 1,
    "route": "/Servicios"
  },
  {
    "renderMode": 1,
    "route": "/InicioSesion"
  },
  {
    "renderMode": 1,
    "route": "/GestionarServicios"
  },
  {
    "renderMode": 1,
    "route": "/CrearServicio"
  },
  {
    "renderMode": 1,
    "route": "/EditarServicio/*"
  },
  {
    "renderMode": 1,
    "route": "/DetalleServicio/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1526, hash: '3eb369b4fc67b62b7b66133ec7a19d206737b3d6608d0d8f710217d5c09e8033', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1787, hash: 'be0658d135fec7db17885e759001091f23ce40ba8f203512ab9a9737ee75d3cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5FHJUQPA.css': {size: 1101, hash: 'VuNIPCcoAPI', text: () => import('./assets-chunks/styles-5FHJUQPA_css.mjs').then(m => m.default)}
  },
};
