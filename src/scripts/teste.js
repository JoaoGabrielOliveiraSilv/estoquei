// salvar como fetchTransfers.js

import fs from "fs";

const BASE_URL = "https://www.gbgrr.vip/api/v1/user/transfer_list";

const headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "pt-BR,pt;q=0.9",
  key: "JHKDXAZHC7Bv4FqCcxmM",
  origin: "https://www.gbg7.vip",
  referer: "https://www.gbg7.vip/",
  token: "491dff0d4fa282c5c82a2ff469b4f841",
  "user-agent": "Mozilla/5.0",
};

async function fetchAll() {
  let page = 1;
  let allData = [];

  while (true) {
    console.log(`Buscando página ${page}...`);

    const url = `${BASE_URL}?uid=19366830&page=${page}&transfer_type=&row=20`;

    const res = await fetch(url, { headers });
    const json = await res.json();
    console.log(json);
    // ⚠️ Ajuste aqui dependendo da estrutura real
    const list = json?.data.list?.data || [];

    if (!list || list.length === 0) {
      console.log("Sem mais dados. Finalizando.");
      break;
    }

    allData.push(...list);

    page++;
    setTimeout(() => {
      console.log("Esperando 1 segundo...");
    }, 1000);
  }

  return allData;
}

// (async () => {
//   const data = await fetchAll();

//   console.log(`Total de registros: ${data.length}`);

//   fs.writeFileSync("todas_transacoes.json", JSON.stringify(data, null, 2));

//   console.log("Arquivo salvo: todas_transacoes.json");
// })();


import data from "./todas_transacoes";

console.log(new Set(data.map(item => item.type)));