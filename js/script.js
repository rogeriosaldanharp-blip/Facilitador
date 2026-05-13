const campos = {
  paciente: document.getElementById("paciente"),
  profissional: document.getElementById("profissional"),
  area: document.getElementById("area"),
  data: document.getElementById("data"),
  objetivo: document.getElementById("objetivo"),
  atividade: document.getElementById("atividade"),
  comportamento: document.getElementById("comportamento"),
  resposta: document.getElementById("resposta"),
  observacao: document.getElementById("observacao"),
};

const resultado = document.getElementById("resultado");
const feedbackCopia = document.getElementById("feedbackCopia");

campos.data.valueAsDate = new Date();

const perfisPorArea = {
  "Musicoterapia": {
    abertura: "Na Musicoterapia, foi realizada uma proposta mediada por recursos sonoro-musicais",
    focoPadrao: "atenção compartilhada, imitação, turnos interacionais, participação vocal, exploração instrumental e organização da resposta pela música",
    meio: "Foram utilizados recursos musicais como mediadores para favorecer engajamento, previsibilidade, interação e participação ativa na atividade.",
    continuidade: "A continuidade do trabalho deve priorizar a ampliação da participação vocal, corporal ou instrumental, respeitando o tempo de resposta da criança e utilizando pausas intencionais como recurso terapêutico."
  },
  "Terapia Ocupacional": {
    abertura: "Na Terapia Ocupacional, foi realizada uma proposta voltada ao desempenho ocupacional e às habilidades necessárias para maior autonomia funcional",
    focoPadrao: "motricidade fina e ampla, coordenação olho-mão, percepção visual, planejamento motor, processamento sensorial e organização da resposta funcional",
    meio: "A intervenção considerou o nível de suporte necessário, a qualidade da execução motora, a permanência na tarefa e a funcionalidade da resposta apresentada.",
    continuidade: "A continuidade do trabalho deve priorizar propostas graduadas, com redução progressiva dos suportes e ampliação da autonomia durante as atividades."
  },
  "Psicologia": {
    abertura: "Na Psicologia, foi realizada uma intervenção voltada aos aspectos comportamentais, emocionais e relacionais observados durante a sessão",
    focoPadrao: "autorregulação, tolerância à frustração, flexibilidade, vínculo terapêutico, repertório socioemocional e manejo comportamental",
    meio: "A condução considerou os antecedentes da resposta comportamental, as estratégias de mediação utilizadas e a necessidade de favorecer maior organização diante das demandas.",
    continuidade: "A continuidade do trabalho deve priorizar previsibilidade, ampliação de repertório adaptativo, elaboração emocional e maior tolerância às transições e demandas."
  },
  "Fonoaudiologia": {
    abertura: "Na Fonoaudiologia, foi realizada uma proposta voltada ao desenvolvimento comunicativo e às habilidades de linguagem",
    focoPadrao: "comunicação funcional, intenção comunicativa, compreensão verbal, expressão oral, pragmática, troca de turnos e ampliação do repertório comunicativo",
    meio: "Foram observadas a iniciativa comunicativa, a resposta aos comandos, a clareza das emissões e a necessidade de pistas verbais, visuais ou gestuais.",
    continuidade: "A continuidade do trabalho deve priorizar o uso funcional da comunicação, a ampliação de vocabulário e a maior intencionalidade nas interações."
  },
  "Psicopedagogia": {
    abertura: "Na Psicopedagogia, foi realizada uma proposta direcionada às habilidades cognitivas e aos processos envolvidos na aprendizagem",
    focoPadrao: "atenção, memória operacional, raciocínio, pareamento, categorização, pré-requisitos acadêmicos, organização do pensamento e resolução de problemas",
    meio: "A intervenção considerou a compreensão da tarefa, a sustentação atencional, o uso de estratégias de resolução e a resposta às mediações oferecidas.",
    continuidade: "A continuidade do trabalho deve priorizar atividades graduadas que favoreçam atenção sustentada, autonomia na resolução de tarefas e ampliação dos pré-requisitos para aprendizagem."
  },
  "Neuropsicopedagogia": {
    abertura: "Na Neuropsicopedagogia, foi desenvolvida uma proposta voltada aos processos cognitivos relacionados à aprendizagem",
    focoPadrao: "funções executivas, atenção sustentada, memória, flexibilidade cognitiva, controle inibitório, organização do pensamento e desempenho em tarefas estruturadas",
    meio: "Foram observados o tempo de resposta, a manutenção do foco, a necessidade de pistas e a capacidade de reorganização diante de erros.",
    continuidade: "A continuidade do trabalho deve priorizar funções executivas, planejamento, organização cognitiva e maior independência na realização das atividades."
  },
  "Psicomotricidade": {
    abertura: "Na Psicomotricidade, foi realizada uma proposta com foco na organização corporal e na relação entre movimento, cognição e expressão",
    focoPadrao: "esquema corporal, lateralidade, equilíbrio, coordenação global, orientação espacial, ritmo, planejamento motor e controle postural",
    meio: "Foram observadas a qualidade do movimento, a consciência corporal, o ajuste postural, a resposta aos comandos motores e a organização no espaço.",
    continuidade: "A continuidade do trabalho deve priorizar atividades corporais estruturadas, ampliando controle motor, lateralidade, equilíbrio e organização espacial."
  },
  "Fisioterapia": {
    abertura: "Na Fisioterapia, foi desenvolvida uma proposta voltada à funcionalidade motora e ao aprimoramento dos padrões de movimento",
    focoPadrao: "controle postural, equilíbrio, marcha, força, mobilidade, coordenação motora, dissociação de movimentos e funcionalidade corporal",
    meio: "Foram observados alinhamento corporal, estabilidade, resposta ao manejo, tolerância ao exercício, qualidade do movimento e necessidade de suporte físico ou verbal.",
    continuidade: "A continuidade do trabalho deve priorizar exercícios terapêuticos graduados, com foco em controle postural, mobilidade funcional e melhora progressiva da qualidade motora."
  },
  "Educação Física": {
    abertura: "Na Educação Física, foi realizada uma proposta corporal estruturada com foco no desenvolvimento motor e na participação em atividades físicas",
    focoPadrao: "coordenação motora ampla, lateralidade, equilíbrio, agilidade, força, ritmo, seguimento de regras, cooperação e participação em jogos ou circuitos",
    meio: "Foram observados o engajamento motor, a compreensão das regras, a resposta aos comandos, a interação durante a atividade e a organização corporal na execução dos movimentos.",
    continuidade: "A continuidade do trabalho deve priorizar atividades motoras com variação de desafios, favorecendo participação, autonomia, seguimento de regras e ampliação das habilidades corporais."
  },
  "Arteterapia": {
    abertura: "Na Arteterapia, foi conduzida uma proposta expressiva utilizando recursos artísticos como mediadores do processo terapêutico",
    focoPadrao: "expressão emocional, criatividade, planejamento da ação, coordenação manual, simbolização, escolha de materiais e elaboração da experiência vivida",
    meio: "Foram observados o modo de exploração dos materiais, a iniciativa criativa, a tolerância ao processo, a organização da produção e a expressão de conteúdos emocionais ou simbólicos.",
    continuidade: "A continuidade do trabalho deve priorizar propostas expressivas que favoreçam elaboração, autonomia na escolha dos materiais, ampliação do repertório criativo e organização emocional."
  },
  "Equoterapia": {
    abertura: "Na Equoterapia, foi realizada uma intervenção mediada pelo cavalo, considerando os aspectos motores, sensoriais, emocionais e relacionais envolvidos na prática",
    focoPadrao: "controle postural, equilíbrio, coordenação, integração sensorial, vínculo, segurança corporal, atenção compartilhada e seguimento de comandos",
    meio: "Foram observados ajustes posturais, resposta ao movimento tridimensional do cavalo, tolerância sensorial, participação na condução da atividade e necessidade de suporte da equipe.",
    continuidade: "A continuidade do trabalho deve priorizar propostas graduadas no contexto equoterapêutico, favorecendo segurança, postura, vínculo, atenção e maior participação ativa."
  },
  "Nutrição": {
    abertura: "Na Nutrição, foi realizada uma abordagem voltada à relação da criança com a alimentação e aos aspectos envolvidos no repertório alimentar",
    focoPadrao: "aceitação alimentar, aproximação gradual dos alimentos, seletividade, tolerância sensorial, autonomia alimentar e rotina de alimentação",
    meio: "Foram observados sinais de aceitação, recusa, exploração sensorial, resposta à mediação, tolerância à presença do alimento e participação nas etapas propostas.",
    continuidade: "A continuidade do trabalho deve priorizar aproximação gradual e respeitosa dos alimentos, favorecendo ampliação do repertório alimentar, autonomia e melhor relação com o momento da alimentação."
  }
};

function valor(campo) {
  return campo.value.trim();
}

function formatarData(dataISO) {
  if (!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function perfilAtual() {
  return perfisPorArea[valor(campos.area)] || {
    abertura: "No atendimento terapêutico, foi realizada uma proposta estruturada",
    focoPadrao: "habilidades terapêuticas previamente definidas",
    meio: "Foram observados o nível de participação, a necessidade de suporte, a resposta à mediação e a continuidade da proposta.",
    continuidade: "A continuidade do trabalho deve priorizar atividades graduadas, ajustando o nível de suporte conforme a resposta apresentada."
  };
}

function limparEntrada(texto) {
  return texto
    .trim()
    .replace(/^trabalhamos\s+/i, "")
    .replace(/^foi trabalhado\s+/i, "")
    .replace(/^foi trabalhada\s+/i, "")
    .replace(/^com foco em\s+/i, "")
    .replace(/^por meio de\s+/i, "")
    .replace(/^através de\s+/i, "")
    .replace(/^a criança\s+/i, "")
    .replace(/^o paciente\s+/i, "")
    .replace(/^a paciente\s+/i, "")
    .replace(/^chegou\s+chegou\s+/i, "chegou ")
    .replace(/\s+/g, " ");
}

function primeiraMaiuscula(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function frase(texto) {
  texto = limparEntrada(texto);
  if (!texto) return "";
  texto = texto.replace(/[.!?]+$/g, "");
  return texto + ".";
}

function nomePaciente() {
  return valor(campos.paciente) || "A criança";
}

function montarCabecalho() {
  const profissional = valor(campos.profissional);
  const area = valor(campos.area);
  const data = formatarData(valor(campos.data));

  if (!data && !profissional && !area) return "";

  return [
    data ? `Data: ${data}` : "",
    profissional ? `Profissional: ${profissional}` : "",
    area ? `Área: ${area}` : ""
  ].filter(Boolean).join(" | ") + "\n\n";
}

function gerarBreve() {
  const perfil = perfilAtual();
  const paciente = nomePaciente();
  const objetivo = limparEntrada(valor(campos.objetivo));
  const atividade = limparEntrada(valor(campos.atividade));
  const comportamento = limparEntrada(valor(campos.comportamento));
  const resposta = limparEntrada(valor(campos.resposta));
  const resultadoSessao = limparEntrada(valor(campos.observacao));

  let texto = perfil.abertura;

  if (atividade) {
    texto += `, por meio de ${atividade}`;
  }

  texto += `, com foco em ${objetivo || perfil.focoPadrao}. `;

  if (comportamento) {
    texto += `${paciente} ${frase(comportamento)}`;
    texto += " ";
  }

  if (resposta) {
    texto += `Durante a proposta, ${frase(resposta)}`;
    texto += " ";
  }

  if (resultadoSessao) {
    texto += `Ao final, ${frase(resultadoSessao)}`;
  }

  resultado.textContent = texto.trim();
}

function gerarTecnica() {
  const perfil = perfilAtual();
  const paciente = nomePaciente();
  const objetivo = limparEntrada(valor(campos.objetivo));
  const atividade = limparEntrada(valor(campos.atividade));
  const comportamento = limparEntrada(valor(campos.comportamento));
  const resposta = limparEntrada(valor(campos.resposta));
  const resultadoSessao = limparEntrada(valor(campos.observacao));

  let texto = montarCabecalho();

  texto += perfil.abertura;

  if (atividade) {
    texto += `, por meio de ${atividade}`;
  }

  texto += `, com foco em ${objetivo || perfil.focoPadrao}. `;

  texto += `${perfil.meio} `;

  if (comportamento) {
    texto += `${paciente} ${frase(comportamento)} `;
  }

  if (resposta) {
    texto += `Durante o desenvolvimento da atividade, ${frase(resposta)} `;
  }

  if (resultadoSessao) {
    texto += `Ao final da sessão, ${frase(resultadoSessao)} `;
  } else {
    texto += perfil.continuidade;
  }

  resultado.textContent = texto.trim();
}

function limparCampos() {
  Object.values(campos).forEach((campo) => {
    if (campo.type === "date") {
      campo.valueAsDate = new Date();
    } else {
      campo.value = "";
    }
  });
  resultado.textContent = "A evolução aparecerá aqui após o preenchimento.";
  feedbackCopia.textContent = "";
}

async function copiarTexto() {
  const texto = resultado.textContent.trim();
  if (!texto || texto === "A evolução aparecerá aqui após o preenchimento.") {
    feedbackCopia.textContent = "Gere uma evolução antes de copiar.";
    return;
  }

  try {
    await navigator.clipboard.writeText(texto);
    feedbackCopia.textContent = "Evolução copiada.";
  } catch (error) {
    feedbackCopia.textContent = "Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.";
  }
}

const modelos = {
  motor: {
    area: "Terapia Ocupacional",
    objetivo: "motricidade ampla, lateralidade, organização corporal e seguimento de comandos",
    atividade: "circuito motor estruturado com obstáculos e comandos direcionados",
    comportamento: "chegou bem e apresentou boa adesão inicial",
    resposta: "participou da sequência proposta, necessitando de suporte verbal pontual para manutenção da trajetória",
    observacao: "cumpriu as demandas propostas, mantendo participação adequada ao objetivo da sessão"
  },
  comunicacao: {
    area: "Fonoaudiologia",
    objetivo: "comunicação funcional, intenção comunicativa e ampliação de respostas verbais ou gestuais",
    atividade: "atividade lúdica mediada com solicitação de objetos, turnos e reforços sociais",
    comportamento: "apresentou oscilação na iniciativa comunicativa",
    resposta: "respondeu melhor quando houve antecipação, apoio visual e mediação verbal",
    observacao: "realizou trocas comunicativas com suporte, demonstrando possibilidade de ampliação do repertório funcional"
  },
  regulacao: {
    area: "Psicologia",
    objetivo: "regulação comportamental, tempo de permanência e tolerância à frustração",
    atividade: "atividade estruturada com alternância entre demanda e reforço",
    comportamento: "necessitou de suporte para aceitar transições",
    resposta: "conseguiu retomar a proposta após redirecionamento",
    observacao: "finalizou a atividade com menor resistência após mediação"
  },
  fina: {
    area: "Terapia Ocupacional",
    objetivo: "motricidade fina, percepção visual, coordenação olho-mão e controle de força",
    atividade: "atividade de encaixe, quebra-cabeça e manipulação de pequenos objetos",
    comportamento: "chegou bem ao atendimento",
    resposta: "participou da atividade, com necessidade de redirecionamento pontual em momentos de busca por atenção",
    observacao: "cumpriu as demandas propostas e finalizou a sequência com apoio verbal"
  },
  musica: {
    area: "Musicoterapia",
    objetivo: "atenção compartilhada, imitação, comunicação e organização da resposta pela música",
    atividade: "canções estruturadas, instrumentos musicais e pausas intencionais para favorecer participação",
    comportamento: "apresentou boa resposta aos estímulos musicais",
    resposta: "demonstrou engajamento por meio de respostas vocais, corporais e instrumentais",
    observacao: "manteve participação nos momentos musicais com mediação do terapeuta"
  }
};

document.querySelectorAll("[data-template]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const modelo = modelos[botao.dataset.template];
    if (!modelo) return;

    campos.area.value = modelo.area || "";
    campos.objetivo.value = modelo.objetivo || "";
    campos.atividade.value = modelo.atividade || "";
    campos.comportamento.value = modelo.comportamento || "";
    campos.resposta.value = modelo.resposta || "";
    campos.observacao.value = modelo.observacao || "";
  });
});

document.getElementById("gerarBreve").addEventListener("click", gerarBreve);
document.getElementById("gerarTecnica").addEventListener("click", gerarTecnica);
document.getElementById("limparCampos").addEventListener("click", limparCampos);
document.getElementById("copiarTexto").addEventListener("click", copiarTexto);
