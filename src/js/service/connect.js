const test = () => {
  const url = `https://kardexpress22.mawisoft.ru/integration/init`;

  const h = new Headers();
  h.append('Content-Type', 'application/json');
  let encoded = window.btoa(`info@t-kartika.ru:ma0eh12k`);
  let auth = `Basic ` + encoded;
  h.append('Authorization', auth);
  console.log(h);

  let req = new Request(url, {
    method: 'GET',
    headers: h,
    credentials: `include`,
    mode: 'cors'
  });

  fetch(req)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('BAD HTTP stuff');
      }
    })
    .then((jsonData) => {
      console.log(jsonData);
      p.textContent = JSON.stringify(jsonData, null, 4);
    })
    .catch((err) => {
      console.log('ERROR:', err.message);
    });
}
export default test;
