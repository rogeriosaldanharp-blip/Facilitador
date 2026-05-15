
const campos = {
  paciente: document.getElementById("paciente"),
  profissional: document.getElementById("profissional"),
  area: document.getElementById("area"),
  data: document.getElementById("data"),
  modeloHabilidade: document.getElementById("modeloHabilidade"),
  objetivo: document.getElementById("objetivo"),
  atividade: document.getElementById("atividade"),
  comportamento: document.getElementById("comportamento"),
  resposta: document.getElementById("resposta"),
  observacao: document.getElementById("observacao")
};

const resultado = document.getElementById("resultado");
const feedbackCopia = document.getElementById("feedbackCopia");

campos.data.valueAsDate = new Date();

const modelos = {
  motricidadeFina: {
    objetivo: "motricidade fina, coordenação manual, controle de preensão, coordenação olho-mão e organização dos movimentos distais",
    atividade: "atividades manipulativas, encaixes, pintura, recorte, pareamento, prendedores, blocos ou pequenos objetos",
    comportamento: "apresentou participação compatível com a proposta, necessitando de suporte conforme a complexidade da tarefa",
    resposta: "realizou etapas da atividade com mediação, sendo observados controle manual, precisão dos movimentos e manutenção da atenção",
    observacao: "cumpriu parcialmente as demandas propostas, com suporte para organização e finalização da atividade"
  },
  motricidadeAmpla: {
    objetivo: "motricidade ampla, coordenação corporal, equilíbrio, lateralidade, planejamento motor, controle postural, tônus e força",
    atividade: "circuito motor, obstáculos, deslocamentos, saltos, comandos direcionados, mudanças de direção e atividades corporais guiadas",
    comportamento: "demonstrou engajamento na proposta, com necessidade de suporte para organização corporal e sequência motora",
    resposta: "participou do percurso motor, apresentando respostas relacionadas ao equilíbrio, lateralidade, coordenação bilateral e seguimento de comandos",
    observacao: "cumpriu as demandas motoras com suporte, mantendo participação na sequência proposta"
  },
  comunicacaoLinguagem: {
    objetivo: "comunicação funcional, intenção comunicativa, compreensão de comandos, solicitação, imitação verbal e ampliação das respostas comunicativas",
    atividade: "atividade lúdica mediada com objetos de interesse, turnos de interação, comandos simples, solicitações, nomeação e apoio visual",
    comportamento: "apresentou variação na iniciativa comunicativa, necessitando de mediação para ampliar intenção, troca e organização da resposta",
    resposta: "demonstrou respostas comunicativas por vocalizações, fala, gestos, apontar, troca visual, imitação ou uso de recursos alternativos de comunicação",
    observacao: "apresentou respostas comunicativas com suporte, alcançando parcialmente os objetivos propostos"
  },
  cognicaoAprendizagem: {
    objetivo: "cognição, atenção, permanência, pareamento, classificação, memória operacional, sequência lógica, resolução de problemas e pré-requisitos acadêmicos",
    atividade: "jogos estruturados, pareamentos, encaixes, sequências, categorização, identificação de figuras, comandos graduados e materiais pedagógicos",
    comportamento: "necessitou de suporte para manutenção do foco, organização da tarefa e continuidade da proposta",
    resposta: "realizou a atividade com mediação, apresentando respostas relacionadas à atenção, compreensão, discriminação visual e resolução gradual da demanda",
    observacao: "cumpriu parcialmente as demandas cognitivas, necessitando de suporte para continuidade e finalização da proposta"
  },
  habilidadesBasicas: {
    objetivo: "treino de habilidades básicas, seguimento de comandos simples, contato visual funcional, imitação, permanência, espera, solicitação, pareamento e resposta ao nome",
    atividade: "demandas simples e graduadas, uso de reforçadores, pareamento de estímulos, comandos de uma etapa, treino de imitação, solicitação e permanência na tarefa",
    comportamento: "apresentou necessidade de mediação para iniciar, manter ou concluir as respostas esperadas",
    resposta: "realizou etapas da atividade com suporte, sendo observadas respostas relacionadas à atenção compartilhada, seguimento de instruções, imitação, espera e participação funcional",
    observacao: "cumpriu as demandas com suporte, necessitando de mediação para permanência e conclusão da proposta"
  },
  regulacaoSocioemocional: {
    objetivo: "regulação socioemocional, tolerância à frustração, controle inibitório, espera, flexibilidade comportamental, transição e redução de rigidez",
    atividade: "atividade estruturada com alternância entre demanda e reforço, combinados claros, previsibilidade, tempo de espera, transições guiadas e redirecionamentos terapêuticos",
    comportamento: "apresentou necessidade de suporte para lidar com frustrações, aceitar mudanças na proposta, aguardar sua vez ou retomar a atividade",
    resposta: "foram trabalhadas estratégias para favorecer organização comportamental, aceitação de limites, ampliação da tolerância e retomada da participação",
    observacao: "retomou a atividade após mediação, cumprindo parcialmente as demandas propostas"
  },
  interacaoBrincar: {
    objetivo: "interação social, brincar compartilhado, turnos de troca, imitação social, reciprocidade, atenção conjunta e participação com o outro",
    atividade: "brincadeira mediada com jogos de turno, faz de conta, atividades compartilhadas, imitação, troca de objetos e participação conjunta",
    comportamento: "apresentou necessidade de mediação para manutenção da troca, compartilhamento de materiais, respeito aos turnos e ampliação da participação social",
    resposta: "participou da proposta com suporte, sendo observadas respostas de aproximação, troca, imitação, atenção compartilhada e maior disponibilidade para interação",
    observacao: "participou da proposta com suporte, mantendo trocas mediadas durante a atividade"
  },
  integracaoSensorial: {
    objetivo: "integração sensorial, organização corporal, modulação sensorial e respostas proprioceptivas, vestibulares, táteis, auditivas e visuais",
    atividade: "atividade sensório-motora com recursos proprioceptivos, vestibulares, táteis e organizadores, respeitando o limiar de resposta da criança",
    comportamento: "apresentou respostas sensoriais que exigiram ajustes na intensidade, duração e tipo de estímulo oferecido",
    resposta: "participou das atividades com mediação, sendo observadas respostas relacionadas à organização corporal, busca ou evitação sensorial, atenção e permanência",
    observacao: "tolerou os estímulos propostos com mediação, mantendo participação parcial na atividade"
  },
  autonomiaAVDs: {
    objetivo: "autonomia funcional, atividades de vida diária, participação nas rotinas, independência em tarefas, organização sequencial e redução de suporte",
    atividade: "treino funcional de alimentação, higiene, vestir-se, organização de materiais, rotina, desfralde ou outras demandas de vida diária",
    comportamento: "necessitou de suporte para iniciar, organizar ou concluir etapas da tarefa",
    resposta: "realizou etapas da atividade com mediação, sendo observadas autonomia, participação ativa, sequência da tarefa e tolerância às demandas funcionais",
    observacao: "realizou a tarefa com suporte, concluindo parcialmente as etapas propostas"
  },
  expressaoMusicalCorporal: {
    objetivo: "expressão musical, corporal e criativa, ritmo, pulso, imitação rítmica, expressão vocal, escuta ativa, canto e participação corporal",
    atividade: "canções estruturadas, instrumentos musicais, jogos rítmicos, pausas intencionais, imitação sonora, movimentos corporais e propostas expressivas guiadas",
    comportamento: "apresentou resposta aos estímulos musicais e expressivos, com necessidade de mediação para manutenção da proposta",
    resposta: "demonstrou engajamento por meio de respostas vocais, corporais, rítmicas, instrumentais ou expressivas",
    observacao: "participou da proposta musical com suporte, apresentando respostas compatíveis com os objetivos trabalhados"
  }
};

const fechamentosTecnicos = {
  motricidadeFina: "A intervenção favoreceu componentes relacionados à coordenação manual, preensão, precisão motora, controle de força, coordenação olho-mão e manipulação funcional dos materiais, com foco na melhora da qualidade dos movimentos finos e na ampliação da autonomia durante as tarefas.",
  motricidadeAmpla: "A proposta favoreceu componentes relacionados à organização corporal, coordenação motora ampla, lateralidade, equilíbrio, controle postural e planejamento motor, considerando a necessidade de ampliar a segurança nos deslocamentos e a participação ativa nas sequências corporais.",
  comunicacaoLinguagem: "A intervenção buscou ampliar a intencionalidade comunicativa, a compreensão de comandos, a solicitação, a imitação verbal ou gestual e a participação em trocas comunicativas mais funcionais, respeitando o repertório atual da criança e o nível de suporte necessário.",
  cognicaoAprendizagem: "A proposta favoreceu habilidades relacionadas à atenção, permanência, pareamento, classificação, memória operacional, sequência lógica, discriminação de estímulos e resolução gradual de demandas, com foco na organização cognitiva e na autonomia de resposta.",
  habilidadesBasicas: "A intervenção buscou fortalecer repertórios básicos como permanência, espera, resposta ao nome, contato visual funcional, imitação, seguimento de comandos simples, solicitação e participação em demandas curtas, com redução progressiva dos suportes conforme a resposta apresentada.",
  regulacaoSocioemocional: "A condução terapêutica priorizou previsibilidade, combinados objetivos, tolerância à frustração, espera, flexibilidade, aceitação de limites e retomada da atividade após mediação, favorecendo maior organização comportamental diante das demandas propostas.",
  interacaoBrincar: "A proposta favoreceu turnos de troca, reciprocidade, brincar compartilhado, imitação social, atenção conjunta e maior disponibilidade para interação, buscando ampliar a qualidade das trocas e a participação da criança em atividades com o outro.",
  integracaoSensorial: "A intervenção considerou respostas de modulação sensorial, organização corporal e processamento de estímulos proprioceptivos, vestibulares, táteis, auditivos e visuais, ajustando intensidade e duração das demandas para favorecer participação mais organizada.",
  autonomiaAVDs: "A proposta buscou ampliar independência funcional, participação nas rotinas, organização sequencial, iniciativa e redução de suporte nas atividades de vida diária, considerando o nível atual de autonomia e a necessidade de treino funcional gradual.",
  expressaoMusicalCorporal: "A intervenção favoreceu expressão musical, corporal e criativa, ritmo, pulso, imitação rítmica, escuta ativa, expressão vocal e participação instrumental ou corporal, utilizando a música como mediadora da comunicação, do engajamento e da organização da resposta."
};


function detectarModeloPorTexto() {
  const texto = [
    valor(campos.modeloHabilidade),
    valor(campos.objetivo),
    valor(campos.atividade),
    valor(campos.area)
  ].join(" ").toLowerCase();

  const regras = [
    {
      chave: "motricidadeAmpla",
      termos: ["motricidade ampla", "motor amplo", "coordenação ampla", "coordenacao ampla", "circuito motor", "equilíbrio", "equilibrio", "lateralidade", "controle postural", "planejamento motor", "força do core", "forca do core", "obstáculos", "obstaculos", "salto", "corrida"]
    },
    {
      chave: "motricidadeFina",
      termos: ["motricidade fina", "motor fino", "coordenação manual", "coordenacao manual", "coordenação olho-mão", "coordenacao olho-mao", "preensão", "preensao", "pinça", "pinca", "recorte", "pintura", "encaixe", "grafomotricidade", "pequenos objetos"]
    },
    {
      chave: "habilidadesBasicas",
      termos: ["habilidades básicas", "habilidades basicas", "comandos simples", "seguimento de comandos", "resposta ao nome", "permanência", "permanencia", "espera", "imitação", "imitacao", "solicitação", "solicitacao", "pareamento", "contato visual"]
    },
    {
      chave: "comunicacaoLinguagem",
      termos: ["comunicação", "comunicacao", "linguagem", "fala", "vocalização", "vocalizacao", "intenção comunicativa", "intencao comunicativa", "solicitar", "nomeação", "nomeacao", "caa", "comunicação alternativa", "comunicacao alternativa"]
    },
    {
      chave: "cognicaoAprendizagem",
      termos: ["cognição", "cognicao", "aprendizagem", "atenção", "atencao", "pareamento", "classificação", "classificacao", "memória", "memoria", "sequência lógica", "sequencia logica", "alfabetização", "alfabetizacao", "pré-requisito", "pre-requisito"]
    },
    {
      chave: "regulacaoSocioemocional",
      termos: ["regulação", "regulacao", "socioemocional", "comportamento", "tolerância", "tolerancia", "frustração", "frustracao", "controle inibitório", "controle inibitorio", "rigidez", "transição", "transicao", "choro", "crise", "oposição", "oposicao"]
    },
    {
      chave: "interacaoBrincar",
      termos: ["interação social", "interacao social", "brincar", "brincadeira", "faz de conta", "turnos", "reciprocidade", "atenção conjunta", "atencao conjunta", "troca com pares", "brincar compartilhado"]
    },
    {
      chave: "integracaoSensorial",
      termos: ["integração sensorial", "integracao sensorial", "sensorial", "propriocepção", "propriocepcao", "vestibular", "tátil", "tatil", "auditivo", "visual", "modulação sensorial", "modulacao sensorial", "busca sensorial", "evitação sensorial", "evitacao sensorial"]
    },
    {
      chave: "autonomiaAVDs",
      termos: ["avd", "avds", "atividade de vida diária", "atividades de vida diária", "atividade de vida diaria", "atividades de vida diaria", "autonomia", "higiene", "alimentação", "alimentacao", "desfralde", "vestir", "rotina", "independência funcional", "independencia funcional"]
    },
    {
      chave: "expressaoMusicalCorporal",
      termos: ["musicoterapia", "música", "musica", "ritmo", "pulso", "canto", "expressão vocal", "expressao vocal", "instrumentos musicais", "imitação rítmica", "imitacao ritmica", "escuta ativa", "expressão corporal", "expressao corporal"]
    }
  ];

  for (const regra of regras) {
    if (regra.termos.some((termo) => texto.includes(termo))) {
      return regra.chave;
    }
  }

  return "";
}

function valor(campo) {
  return campo.value.trim();
}

function nomePaciente() {
  return valor(campos.paciente) || "A criança";
}

function formatarData(dataISO) {
  if (!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

function aplicarModelo(chave) {
  const modelo = modelos[chave];
  if (!modelo) return;

  campos.objetivo.value = modelo.objetivo || "";
  campos.atividade.value = modelo.atividade || "";
  campos.comportamento.value = modelo.comportamento || "";
  campos.resposta.value = modelo.resposta || "";
  campos.observacao.value = modelo.observacao || "";
}

function limparTexto(texto) {
  return (texto || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/^com foco em\s+/i, "")
    .replace(/^trabalhar\s+/i, "")
    .replace(/^trabalho de\s+/i, "")
    .replace(/^o trabalho de\s+/i, "");
}

function minusculaInicial(texto) {
  texto = limparTexto(texto);
  if (!texto) return "";
  return texto.charAt(0).toLowerCase() + texto.slice(1);
}

function pontuar(texto) {
  texto = limparTexto(texto);
  if (!texto) return "";
  return /[.!?]$/.test(texto) ? texto : texto + ".";
}

function fraseComNome(paciente, texto) {
  texto = limparTexto(texto);
  if (!texto) return "";
  if (texto.toLowerCase().startsWith(paciente.toLowerCase())) return pontuar(texto);
  return pontuar(`${paciente} ${minusculaInicial(texto)}`);
}

function montarAbertura(area, atividade, objetivo, tecnico) {
  atividade = limparTexto(atividade);
  objetivo = limparTexto(objetivo);

  let abertura = tecnico
    ? (area ? `No atendimento de ${area}, foi desenvolvida uma proposta terapêutica estruturada` : "Foi desenvolvida uma proposta terapêutica estruturada")
    : (area ? `Na área de ${area}, foi realizada uma proposta terapêutica` : "Foi realizada uma proposta terapêutica");

  if (atividade) abertura += ` com ${minusculaInicial(atividade)}`;
  if (objetivo) abertura += `, com foco em ${minusculaInicial(objetivo)}`;

  return pontuar(abertura);
}

function montarRespostaBreve(resposta) {
  let resp = limparTexto(resposta);
  if (!resp) return "";

  if (/^(durante|ao longo|após|em seguida|na atividade|no decorrer|com mediação|com suporte)/i.test(resp)) {
    return pontuar(resp);
  }

  return pontuar(`Durante a proposta, ${minusculaInicial(resp)}`);
}

function montarRespostaTecnica(resposta) {
  let resp = limparTexto(resposta);
  if (!resp) return "";

  if (/^(durante|ao longo|após|em seguida|na atividade|no decorrer)/i.test(resp)) {
    return pontuar(resp);
  }

  if (/^(participou|realizou|cumpriu|aceitou|manteve|respondeu|executou|conseguiu|finalizou)/i.test(resp)) {
    return pontuar(`Com mediação terapêutica inicial, ${minusculaInicial(resp)}, mantendo-se vinculado à proposta dentro do nível de suporte necessário para o momento`);
  }

  return pontuar(`Com mediação terapêutica inicial, observou-se que ${minusculaInicial(resp)}`);
}

function montarResultado(resultadoCampo, tecnico) {
  let texto = limparTexto(resultadoCampo);
  if (!texto) return "";

  if (/^(não|nao)\s+/.test(texto.toLowerCase())) {
    return pontuar(`Como resultado da sessão, ${minusculaInicial(texto)}, sendo necessária a manutenção de suporte terapêutico para retomada gradual dos objetivos propostos`);
  }

  if (/^(cumpriu|realizou|aceitou|participou|conseguiu|manteve|finalizou|respondeu|executou|alcançou|alcancou|concluiu|concluiu parcialmente)/i.test(texto)) {
    return tecnico
      ? pontuar(`Como resultado da sessão, ${minusculaInicial(texto)}, indicando resposta compatível com o nível de suporte ofertado durante a proposta`)
      : pontuar(`Como resultado, ${minusculaInicial(texto)}`);
  }

  return tecnico
    ? pontuar(`Como resultado da sessão, observou-se que ${minusculaInicial(texto)}`)
    : pontuar(`Como resultado, ${minusculaInicial(texto)}`);
}

function gerarBreve() {
  const paciente = nomePaciente();
  const area = valor(campos.area);
  const objetivo = valor(campos.objetivo);
  const atividade = valor(campos.atividade);
  const comportamento = valor(campos.comportamento);
  const resposta = valor(campos.resposta);
  const resultadoSessao = valor(campos.observacao);

  const partes = [];

  partes.push(montarAbertura(area, atividade, objetivo, false));

  if (comportamento) partes.push(fraseComNome(paciente, comportamento));
  if (resposta) partes.push(montarRespostaBreve(resposta));
  if (resultadoSessao) partes.push(montarResultado(resultadoSessao, false));

  resultado.textContent = partes.filter(Boolean).join(" ");
}

function gerarTecnica() {
  const paciente = nomePaciente();
  const profissional = valor(campos.profissional);
  const area = valor(campos.area);
  const data = formatarData(valor(campos.data));
  const objetivo = valor(campos.objetivo);
  const atividade = valor(campos.atividade);
  const comportamento = valor(campos.comportamento);
  const resposta = valor(campos.resposta);
  const modeloSelecionado = valor(campos.modeloHabilidade) || detectarModeloPorTexto();
  const resultadoSessao = valor(campos.observacao);

  let cabecalho = "";
  if (data || profissional || area) {
    cabecalho = [
      data ? `Data: ${data}` : "",
      profissional ? `Profissional: ${profissional}` : "",
      area ? `Área: ${area}` : ""
    ].filter(Boolean).join(" | ") + "\n\n";
  }

  const partes = [];

  partes.push(montarAbertura(area, atividade, objetivo, true));

  if (comportamento) {
    partes.push(fraseComNome(paciente, comportamento));
  }

  if (resposta) {
    partes.push(montarRespostaTecnica(resposta));
  } else {
    partes.push("A condução da sessão considerou o nível de prontidão, a necessidade de suporte e a resposta apresentada pela criança diante das demandas propostas.");
  }

  if (modeloSelecionado && fechamentosTecnicos[modeloSelecionado]) {
    partes.push(fechamentosTecnicos[modeloSelecionado]);
  } else if (objetivo) {
    partes.push(pontuar(`A intervenção buscou favorecer respostas relacionadas a ${minusculaInicial(objetivo)}, ajustando o nível de suporte conforme o desempenho apresentado em sessão`));
  }

  if (resultadoSessao) {
    partes.push(montarResultado(resultadoSessao, true));
  }

  resultado.textContent = cabecalho + partes.filter(Boolean).join(" ");
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

campos.modeloHabilidade.addEventListener("change", (event) => aplicarModelo(event.target.value));
document.getElementById("gerarBreve").addEventListener("click", gerarBreve);
document.getElementById("gerarTecnica").addEventListener("click", gerarTecnica);
document.getElementById("limparCampos").addEventListener("click", limparCampos);
document.getElementById("copiarTexto").addEventListener("click", copiarTexto);
