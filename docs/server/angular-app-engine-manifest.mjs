
export default {
  basePath: '/banque-misr-banking-system-app-gp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
