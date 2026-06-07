// Banco de Questões com Português Otimizado
const questions = [
  {
    question: "No Gerenciamento da Rotina de Falconi, qual é a sequência correta para estruturar uma atividade que pretenda durar em uma empresa?",
    answers: [
      { text: "Meta → POP → Fluxograma → Controle", correct: false },
      { text: "Fluxograma → POP → Gráfico Sequencial → Melhoria contínua", correct: true },
      { text: "Organograma → Meta → Resultado → Revisão", correct: false },
      { text: "Diagnóstico → Contratação → Treinamento → Avaliação", correct: false }
    ]
  },
  {
    question: "O Campos Vivant, maior empreendimento de alto padrão do Nordeste, fica em qual cidade e pertence a qual construtora?",
    answers: [
      { text: "Salvador — Odebrecht", correct: false },
      { text: "Feira de Santana — MRV", correct: false },
      { text: "Vitória da Conquista — VCA", correct: true },
      { text: "Guanambi — Direcional", correct: false }
    ]
  },
  {
    question: "Segundo Falconi, o POP (Procedimento Operacional Padrão) tem como principal função:",
    answers: [
      { text: "Avaliar o desempenho individual de cada funcionário mensalmente", correct: false },
      { text: "Garantir que qualquer pessoa execute uma tarefa com o mesmo padrão de qualidade", correct: true },
      { text: "Substituir o organograma hierárquico da empresa", correct: false },
      { text: "Registrar os custos operacionais de cada departamento", correct: false }
    ]
  },
  {
    question: "Qual das opções descreve corretamente o fluxo cronológico de operações da VCA Construtora?",
    answers: [
      { text: "Legalização → Comercialização → Novos Projetos → Estudo de Viabilidade", correct: false },
      { text: "Comercialização → Legalização → Estudo de Viabilidade → Novos Projetos", correct: false },
      { text: "Estudo de Viabilidade → Novos Projetos → Legalização → Comercialização", correct: true },
      { text: "Novos Projetos → Estudo de Viabilidade → Comercialização → Legalização", correct: false }
    ]
  },
  {
    question: "Por que o Gráfico Sequencial de Falconi é especialmente útil no setor da construção civil?",
    answers: [
      { text: "Porque permite calcular automaticamente o custo por metro quadrado", correct: false },
      { text: "Porque monitora processos ao longo do tempo, essencial para controlar prazos com cartórios e prefeituras", correct: true },
      { text: "Porque substitui o contrato de trabalho dos funcionários operacionais", correct: false },
      { text: "Porque gera relatórios financeiros integrados ao sistema bancário", correct: false }
    ]
  },
  {
    question: "Clécio Pereira, diretor da VCA, afirma que aprendeu a valorizar as pessoas acima dos processos em qual empresa anterior?",
    answers: [
      { text: "Itaú Unibanco", correct: false },
      { text: "Petrobras", correct: false },
      { text: "Coca-Cola", correct: true },
      { text: "Ambev", correct: false }
    ]
  },
  {
    question: "Segundo o diagnóstico organizacional da VCA, qual prática de remuneração variável estava sendo estudada para engajar a equipe?",
    answers: [
      { text: "Stock options para todos os cargos", correct: false },
      { text: "Comissão por metro quadrado entregue", correct: false },
      { text: "Programa de participação nos lucros (PLR)", correct: true },
      { text: "Bônus anual atrelado ao NPS do cliente", correct: false }
    ]
  },
  {
    question: "No modelo de Falconi, o que diferencia uma empresa de alto desempenho de uma empresa comum?",
    answers: [
      { text: "O alto investimento em marketing e branding", correct: false },
      { text: "A capacidade de contratar gestores com MBA internacional", correct: false },
      { text: "Processos padronizados, metas claras e melhoria contínua baseada em dados", correct: true },
      { text: "O uso de tecnologias de inteligência artificial na operação", correct: false }
    ]
  },
  {
    question: "O Campos Vivant possui aproximadamente quantos hectares e qual o total de área construída?",
    answers: [
      { text: "150 ha e 1 milhão de m²", correct: false },
      { text: "300 ha e 3 milhões de m²", correct: true },
      { text: "500 ha e 5 milhões de m²", correct: false },
      { text: "200 ha e 2,5 milhões de m²", correct: false }
    ]
  },
  {
    question: "De acordo com o estudo de extensão, qual é o principal desafio de gestão enfrentado por empresas que crescem rapidamente como a VCA?",
    answers: [
      { text: "Reduzir o quadro de funcionários para aumentar a margem de lucro", correct: false },
      { text: "Manter a padronização dos processos e a comunicação entre departamentos em múltiplas cidades", correct: true },
      { text: "Criar um departamento de marketing antes de expandir para outros estados", correct: false },
      { text: "Substituir gestores locais por executivos vindos de grandes centros", correct: false }
    ]
  }
];
 
// Selecionando os Elementos
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const quizProgress = document.getElementById("quiz-progress");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const questionNumber = document.getElementById("question-number");
const headerSubtitle = document.getElementById("header-subtitle");
const resultScoreNum = document.getElementById("result-score-num");
const scoreText = document.getElementById("score-text");
 
let currentQuestionIndex = 0;
let score = 0;
 
// Evento Inicial
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  quizProgress.classList.remove("hidden");
  headerSubtitle.innerText = "Responda as perguntas abaixo com bastante atenção.";
  startQuiz();
});
 
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}
 
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  
  questionNumber.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionElement.innerText = currentQuestion.question;
  
  // Atualiza Barra de Progresso
  const progressPercentage = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
 
  // Renderiza Alternativas
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.innerHTML = `
      <span>${answer.text}</span>
      <span>
        <i class="fa-solid fa-circle-check feedback-icon feedback-icon-correct"></i>
        <i class="fa-solid fa-circle-xmark feedback-icon feedback-icon-wrong"></i>
      </span>
    `;
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersElement.appendChild(button);
  });
}
 
function resetState() {
  nextBtn.classList.add("hidden");
  answersElement.innerHTML = "";
}
 
function selectAnswer(selectedButton, isCorrect) {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);
  
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }
 
  // Mostra Gabarito
  const currentAnswers = questions[currentQuestionIndex].answers;
  buttons.forEach((btn, index) => {
    if (currentAnswers[index].correct) {
      btn.classList.add("correct");
    }
  });
 
  nextBtn.classList.remove("hidden");
}
 
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});
 
function showResult() {
  questionScreen.classList.add("hidden");
  quizProgress.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  headerSubtitle.innerText = "Quiz finalizado com sucesso!";
  progressBar.style.width = "100%";
  resultScoreNum.innerText = score;
  
  let feedbackMsg = "";
  if (score <= 4) {
    feedbackMsg = "Recomendamos revisar os materiais do projeto para alinhar os conhecimentos!";
  } else if (score <= 7) {
    feedbackMsg = "Muito bom! Você demonstrou uma sólida compreensão da VCA e da metodologia Falconi.";
  } else {
    feedbackMsg = "Excelente desempenho! Você domina com maestria os conceitos do projeto e da organização.";
  }
 
  scoreText.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.<br><br>${feedbackMsg}`;
}
