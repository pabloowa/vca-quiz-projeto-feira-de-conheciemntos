// Banco de Questões com Português Otimizado
const questions = [
  {
    question: "Segundo o roteiro apresentado, quais são as duas coisas mais importantes para tornar a gestão possível dentro de uma empresa?",
    answers: [
      { text: "Tecnologia e marketing", correct: false },
      { text: "Cada colaborador saber seu papel e os processos serem padronizados", correct: true },
      { text: "Contratação e demissão estratégica", correct: false },
      { text: "Reuniões frequentes e relatórios mensais", correct: false }
    ]
  },
  {
    question: "O que Falconi afirma que a padronização dos processos permite fazer dentro de uma empresa?",
    answers: [
      { text: "Reduzir o número de colaboradores necessários", correct: false },
      { text: "Rastrear erros e melhorar a qualidade, pois todos estão alinhados", correct: true },
      { text: "Eliminar a necessidade de treinamentos periódicos", correct: false },
      { text: "Garantir que apenas gestores tomem decisões", correct: false }
    ]
  },
  {
    question: "Como Falconi chama os problemas que surgem mesmo depois que os processos já estão padronizados?",
    answers: [
      { text: "Falhas críticas", correct: false },
      { text: "Desvios operacionais", correct: false },
      { text: "Anomalias", correct: true },
      { text: "Gargalos sistêmicos", correct: false }
    ]
  },
  {
    question: "O PDCA é uma das ferramentas apresentadas para tratar anomalias. Qual é a sequência correta do ciclo?",
    answers: [
      { text: "Planejar → Verificar → Executar → Agir", correct: false },
      { text: "Identificar → Planejar → Documentar → Corrigir", correct: false },
      { text: "Planejar → Executar → Verificar → Agir corretivamente", correct: true },
      { text: "Agir → Planejar → Executar → Documentar", correct: false }
    ]
  },
  {
    question: "Qual foi a frase marcante dita pelo Clécio Pereira sobre o erro dentro da empresa?",
    answers: [
      { text: "\"Errar é humano, mas errar duas vezes é gestão ruim\"", correct: false },
      { text: "\"Faz parte da jornada o erro. O que não faz parte é a permanência do erro\"", correct: true },
      { text: "\"Prefiro um time sem erros a um time que aprende com eles\"", correct: false },
      { text: "\"Todo erro tem um culpado, e é papel do gestor identificá-lo\"", correct: false }
    ]
  },
  {
    question: "Segundo o roteiro, o que Falconi orienta fazer após corrigir um erro — em vez de apenas resolver na hora?",
    answers: [
      { text: "Registrar o nome do responsável pelo erro", correct: false },
      { text: "Padronizar a solução e monitorar os resultados para que se mantenham", correct: true },
      { text: "Apresentar o erro em reunião para toda a equipe", correct: false },
      { text: "Contratar um consultor externo para revisão", correct: false }
    ]
  },
  {
    question: "Na visão do Clécio, existe um ponto máximo de excelência que uma empresa pode atingir e manter para sempre?",
    answers: [
      { text: "Sim, quando todos os processos estão 100% padronizados", correct: false },
      { text: "Sim, quando a empresa atinge liderança de mercado", correct: false },
      { text: "Não — ele afirma que não existe um \"ápice\" definitivo", correct: true },
      { text: "Sim, mas apenas em empresas de pequeno porte", correct: false }
    ]
  },
  {
    question: "Para que tudo funcione — padrões, PDCA e inovação — o que Falconi aponta como elemento fundamental?",
    answers: [
      { text: "Investimento constante em tecnologia", correct: false },
      { text: "O treinamento e o desenvolvimento das pessoas", correct: true },
      { text: "A expansão para novos mercados", correct: false },
      { text: "A criação de um departamento de qualidade", correct: false }
    ]
  },
  {
    question: "Segundo o Clécio, além das competências técnicas, o que as grandes empresas mais valorizam em um profissional?",
    answers: [
      { text: "O histórico acadêmico e as certificações obtidas", correct: false },
      { text: "A experiência prévia em empresas conhecidas", correct: false },
      { text: "A vontade de realizar, de fazer — a iniciativa", correct: true },
      { text: "O domínio de idiomas estrangeiros", correct: false }
    ]
  },
  {
    question: "Qual recado o roteiro deixa para os estudantes universitários, conectando a fala do Clécio com a realidade da faculdade?",
    answers: [
      { text: "Focar apenas nas notas para garantir o diploma com louvor", correct: false },
      { text: "Especializar-se em uma única área desde o primeiro semestre", correct: false },
      { text: "Tomar iniciativa e ir além do que é pedido, para desenvolver competências reais", correct: true },
      { text: "Priorizar estágios em detrimento das disciplinas obrigatórias", correct: false }
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