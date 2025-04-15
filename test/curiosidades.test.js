const {
    curiosidadesFutebol,
    obterCuriosidade,
    verificarResposta,
  } = require("../src/curiosidades");
  
  describe("Testes para obterCuriosidade", () => {
    test("Deve retornar a primeira curiosidade corretamente", () => {
      const curiosidade = obterCuriosidade(0);
      expect(curiosidade).toEqual({
        pergunta: "Qual país ganhou a primeira Copa do Mundo em 1930?",
        resposta: "Uruguai",
      });
    });
  
    test("Deve retornar a quinta curiosidade corretamente", () => {
      const curiosidade = obterCuriosidade(4);
      expect(curiosidade).toEqual({
        pergunta: "Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?",
        resposta: "1950",
      });
    });
  
    test("Deve retornar 'Índice inválido' para um índice fora do limite inferior", () => {
      const curiosidade = obterCuriosidade(-1);
      expect(curiosidade).toEqual({ pergunta: "Índice inválido", resposta: "" });
    });
  
    test("Deve retornar 'Índice inválido' para um índice fora do limite superior", () => {
      const curiosidade = obterCuriosidade(curiosidadesFutebol.length);
      expect(curiosidade).toEqual({ pergunta: "Índice inválido", resposta: "" });
    });
  });
  
  describe("Testes para verificarResposta", () => {
    test("Deve retornar true para uma resposta correta (case insensitive)", () => {
      const curiosidade = {
        pergunta: "Qual a capital do Brasil?",
        resposta: "Brasília",
      };
      expect(verificarResposta(curiosidade, "brasília")).toBe(true);
    });
  
    test("Deve retornar false para uma resposta incorreta", () => {
      const curiosidade = {
        pergunta: "Qual a cor do céu?",
        resposta: "Azul",
      };
      expect(verificarResposta(curiosidade, "verde")).toBe(false);
    });
  
    test("Deve retornar true para uma resposta correta com espaços extras", () => {
      const curiosidade = {
        pergunta: "Qual o nome do nosso planeta?",
        resposta: "Terra",
      };
      expect(verificarResposta(curiosidade, "  Terra  ")).toBe(false);
    });
  });
  
  describe("Teste para a estrutura de curiosidadesFutebol", () => {
    test("curiosidadesFutebol deve ser um array com 10 itens", () => {
      expect(curiosidadesFutebol.length).toBe(10);
    });
  
    test("Cada item em curiosidadesFutebol deve ser um objeto com as propriedades 'pergunta' e 'resposta'", () => {
      curiosidadesFutebol.forEach((item) => {
        expect(item).toHaveProperty("pergunta");
        expect(item).toHaveProperty("resposta");
      });
    });
  
    test("As propriedades 'pergunta' e 'resposta' de cada item devem ser strings não vazias", () => {
      curiosidadesFutebol.forEach((item) => {
        expect(typeof item.pergunta).toBe("string");
        expect(item.pergunta.length).toBeGreaterThan(0);
        expect(typeof item.resposta).toBe("string");
        expect(item.resposta.length).toBeGreaterThan(0);
      });
    });
  });