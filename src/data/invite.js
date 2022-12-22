export const sendInvite = async (mesa, description, remetente, destinatario) => {
  const invite = {table: mesa, description: description, remetente: remetente , destinatario: destinatario};
  await fetch('https://acronos-api.vercel.app/api/invites', {
    method: "POST",
    body: JSON.stringify({
      invite: JSON.stringify(invite), 
    }),
    headers: {
      "content-Type": 'application/json' 
    }
  }).then((data) => data.json())
  .then((json) => console.log(json));
};