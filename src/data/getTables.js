const getTables = async () => {   
    const obj = await fetch('https://acronos-api.vercel.app/api/tables', {
      method: "Get",
      headers: {
        "content-Type": 'application/json' 
      }
    })
    const json = await obj.json();
    return json
}

export default getTables;