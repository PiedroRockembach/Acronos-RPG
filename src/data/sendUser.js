export const sendUser = async (nome, login, senha, id, email) => {
  await fetch('https://acronos-api.vercel.app/api/addUser', {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        login: login,
        senha: senha,
        id: id,
        email: email,
      }),
      headers: {
        "content-Type": 'application/json' 
      }
    }).then((data) => data.json())
    .then((json) => console.log(json));
  };