(async function getHello() {
  const response = await fetch("/hello");
  const message = await response.text();
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>${message}</h1>
    </div>
  `
})()
