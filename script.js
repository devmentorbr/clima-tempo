
function handleSearch(event){
  event.preventDefault();

  let contentResult = document.querySelector(".content");
  let cityInput = document.getElementById("input").value;
  
  let dateContent = document.getElementById("date");
  let cityContent = document.getElementById("city");
  let tempContent = document.getElementById("temp");
  let descriptionContent = document.getElementById("description");

  if(cityInput === '' || cityInput === undefined){
    alert("Preenche o nome da cidade.")
    return;
  }

  const key = 'a5d6ce8fe6e41f4007e6c4233dcf1fcb';
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},BR&lang=pt_br&appid=${key}`)
  .then(response => {
      // console.log(response.data); Retorno da requisição

      dateContent.innerText = new Date().toLocaleDateString("pt-BR");
      cityContent.innerText = response.data?.name;
      tempContent.innerText = (response.data?.main?.temp - 273.15).toFixed(0); // Convertendo de Kelv para Celsius;
      descriptionContent.innerText = response.data?.weather[0]?.description;

      contentResult.classList.remove("hide")
  })
  .catch(error => {
    alert("Ops, não encontramos essa cidade")
    console.log(error)
  });

  
}
