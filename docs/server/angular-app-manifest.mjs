
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tekuneko-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/Nosotros"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/Servicios"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/InicioSesion"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/GestionarServicios"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/CrearServicio"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/EditarServicio/*"
  },
  {
    "renderMode": 1,
    "route": "/Tekuneko-angular/DetalleServicio/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/Tekuneko-angular",
    "route": "/Tekuneko-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1543, hash: 'a69f3b67589737003a45726a0c601e58035e0fb0076e584ecfae176dc070cb83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1804, hash: '1503f2e471b1146996a969fa0dae22149c007384e4a2abdece62514afbb554e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5FHJUQPA.css': {size: 1101, hash: 'VuNIPCcoAPI', text: () => import('./assets-chunks/styles-5FHJUQPA_css.mjs').then(m => m.default)}
  },
};
