export const getTables = async () => {   
    const obj = await fetch('https://acronos-api.vercel.app/api/tables', {
      method: "Get",
      headers: {
        "content-Type": 'application/json' 
      }
    })
    const json = await obj.json();
    return json
}

export const postTable = async (nome, user, descricao, id) => {
  await fetch('https://acronos-api.vercel.app/api/tables', {
    method: "POST",
    body: JSON.stringify({
      nome: nome, 
      mestre: user, 
      jogadores: JSON.stringify([user]), 
      descricao: descricao, 
      id: id}),
    headers: {
      "content-Type": 'application/json' 
    }
  }).then((data) => data.json())
  .then((json) => console.log(json));
};

export const acceptTable = async (nome, mestre, jogadores, descricao, id) => {
  await fetch('https://acronos-api.vercel.app/api/tables', {
    method: "POST",
    body: JSON.stringify({
      nome: nome, 
      mestre: mestre, 
      jogadores: JSON.stringify([jogadores]), 
      descricao: descricao, 
      id: id}),
    headers: {
      "content-Type": 'application/json' 
    }
  }).then((data) => data.json())
  .then((json) => console.log(json));
};