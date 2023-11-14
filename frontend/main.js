(async function getHello() {
  const response = await fetch("http://localhost:8080/hello");
  const message = await response.text();
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>${message}</h1>
    </div>
  `
})()
