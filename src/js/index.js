const chaveAPi = "895c80b3be3c4636aa6190542230612";

const botaoBusca = document.querySelector(".btn-busca");

botaoBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  const dados = await buscarDadosDaCidade(cidade);

  if (dados) preencherDadosNaTela(dados, cidade);

  preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveAPi}&q=${cidade}&aqi=no&lang=pt`;

  const resposta = await fetch(apiUrl);

  if (resposta.status !== 200) return;

  const dados = resposta.json();

  console.log(dados);

  return dados;
}

function preencherDadosNaTela(dados, cidade) {
  const temperatura = dados.current.temp_c;
  const umidade = dados.current.humidity;
  const velocidadeDoVento = dados.current.wind_kph;
  const iconeCondicao = dados.current.condition.icon;
  const condicao = dados.current.condition.text;

  document.getElementById("cidade").textContent = cidade;

  document.getElementById("temperatura").textContent = `${temperatura} °C`;

  document.getElementById("umidade").textContent = `${umidade}%`;

  document.getElementById(
    "velocidade-do-vento"
  ).textContent = `${velocidadeDoVento} km/h`;

  document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);

  document.getElementById("condicao").textContent = condicao;
}
