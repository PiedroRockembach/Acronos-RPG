const getInfo = async () => {
    
  const obj = await fetch('https://acronos-api.vercel.app/api/users', {
    method: "Get",
    headers: {
      "content-Type": 'application/json',
    }
  })
  const json = await obj.json();
  return json;
}

export default getInfo;