/**
 * firebase-init-site.js
 * -----------------------------------------------------------------------
 * Inicialização do Firebase para o SITE INSTITUCIONAL (público, sem
 * login). Usa o mesmo projeto Firebase do BStyle ERP — os valores abaixo
 * não são segredo (identificam só qual projeto usar); quem protege os
 * dados de verdade são as Regras de Segurança do Firestore
 * (firestore.rules), que só deixam o site CRIAR pedidos na coleção
 * ORCAMENTOS_SITE, nunca ler, editar ou apagar nada.
 *
 * Diferente do ERP, aqui a gente só carrega o SDK do Firestore (não
 * precisa do SDK de Auth, já que o visitante do site nunca faz login).
 * -----------------------------------------------------------------------
 */
const firebaseConfig = {
  apiKey: "AIzaSyCxWovMBgicwnEK2yzyYHm7clDeIO-m4vU",
  authDomain: "bstyle-ab14a.firebaseapp.com",
  projectId: "bstyle-ab14a",
  storageBucket: "bstyle-ab14a.firebasestorage.app",
  messagingSenderId: "1065822284388",
  appId: "1:1065822284388:web:1a00706fd06ae4a35ccd71"
};

firebase.initializeApp(firebaseConfig);
const dbSite = firebase.firestore();
