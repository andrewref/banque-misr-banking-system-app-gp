
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/banque-misr-banking-system-app-gp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/banque-misr-banking-system-app-gp/login",
    "route": "/banque-misr-banking-system-app-gp"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/banque-misr-banking-system-app-gp/admin/admin-home",
    "route": "/banque-misr-banking-system-app-gp/admin"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/admin/admin-home"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/admin/admin-panel"
  },
  {
    "renderMode": 2,
    "redirectTo": "/banque-misr-banking-system-app-gp/user/user-home",
    "route": "/banque-misr-banking-system-app-gp/user"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/user/user-home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HSZDUBTN.js"
    ],
    "route": "/banque-misr-banking-system-app-gp/user/my-account"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6R5S4OYL.js"
    ],
    "route": "/banque-misr-banking-system-app-gp/user/transactions"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/user/transfer"
  },
  {
    "renderMode": 2,
    "route": "/banque-misr-banking-system-app-gp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29636, hash: 'daebc162528bb9682ee02889750bfe0e00396b79647813229bae39f70bff9180', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17344, hash: 'e24a1932f45d153af1bb783035822f38c7e07fd2e1a4496fb38584df95d288bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 42575, hash: 'f7241b0a83e80522ef22681f30d59dffb7c594c03a8876544ad2000e950bd474', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin/admin-home/index.html': {size: 71020, hash: 'b0eeea5889b976ace1cd34199edac2e13c6e8877c35136ca19963f1ab54410c7', text: () => import('./assets-chunks/admin_admin-home_index_html.mjs').then(m => m.default)},
    'admin/admin-panel/index.html': {size: 98528, hash: 'ff5ef68c99391908517449a071aea6ccc7939560cfffa0ca0cd447dd9d52229b', text: () => import('./assets-chunks/admin_admin-panel_index_html.mjs').then(m => m.default)},
    'user/my-account/index.html': {size: 46097, hash: 'f7bd9c97eff35711f6607768b752b4f28514f091f82bbdc1d744948fa239d188', text: () => import('./assets-chunks/user_my-account_index_html.mjs').then(m => m.default)},
    'user/user-home/index.html': {size: 76136, hash: '34857e99878b15d35b08f7964e48c1a840a9be4399ee3e4f301838e5e8e94234', text: () => import('./assets-chunks/user_user-home_index_html.mjs').then(m => m.default)},
    'user/transactions/index.html': {size: 50368, hash: 'b6ce431c46dea1d99a3559d19bab9e260aeeb94e9a8d204ac8e27273131b2bb5', text: () => import('./assets-chunks/user_transactions_index_html.mjs').then(m => m.default)},
    'user/transfer/index.html': {size: 75012, hash: '3ba943a17b99aac9cc134ca02617e600a6476a7c2b291def39d82d7f3cd02271', text: () => import('./assets-chunks/user_transfer_index_html.mjs').then(m => m.default)},
    'styles-PYOM3VMP.css': {size: 313094, hash: 'I844rqO2gXA', text: () => import('./assets-chunks/styles-PYOM3VMP_css.mjs').then(m => m.default)}
  },
};
