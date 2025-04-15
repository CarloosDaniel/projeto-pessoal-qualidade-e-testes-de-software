const curiosidadesFutebol = [
    {
      pergunta: "Qual país ganhou a primeira Copa do Mundo em 1930?",
      resposta: "Uruguai",
    },
    {
      pergunta: "Quantas vezes o Brasil ganhou a Copa do Mundo?",
      resposta: "5",
    },
    {
      pergunta: "Quem é o maior artilheiro da história das Copas do Mundo?",
      resposta: "Miroslav Klose",
    },
    {
      pergunta: "Qual jogador é conhecido como 'O Rei' do futebol?",
      resposta: "Pelé",
    },
    {
      pergunta: "Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?",
      resposta: "1950",
    },
    {
      pergunta: "Qual seleção europeia ganhou a Copa do Mundo de 2010?",
      resposta: "Espanha",
    },
    {
      pergunta: "Quem marcou o gol da vitória da Alemanha na final da Copa do Mundo de 2014?",
      resposta: "Mario Götze",
    },
    {
      pergunta: "Qual país sediou a Copa do Mundo de 2002?",
      resposta: "Coreia do Sul e Japão",
    },
    {
      pergunta: "Qual jogador argentino é famoso pela 'Mão de Deus' na Copa do Mundo de 1986?",
      resposta: "Diego Maradona",
    },
    {
      pergunta: "Quantos jogadores compõem um time de futebol em campo?",
      resposta: "11",
    },
  ];
  
  function obterCuriosidade(indice) {
    if (indice >= 0 && indice < curiosidadesFutebol.length) {
      return curiosidadesFutebol[indice];
    } else {
      return { pergunta: "Índice inválido", resposta: "" };
    }
  }
  
  function verificarResposta(curiosidade, respostaUsuario) {
    return curiosidade.resposta.toLowerCase() === respostaUsuario.toLowerCase();
  }
  
  module.exports = {
    curiosidadesFutebol,
    obterCuriosidade,
    verificarResposta,
  };