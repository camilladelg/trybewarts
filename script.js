const getSubmitBtn = document.getElementById('submit-btn');

function login() {
  const getName = document.getElementById('name').value;
  const getSenha = document.getElementById('senha').value;
  if (getName === 'tryber@teste.com' && getSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function loginButton() {
  const getButtonLogin = document.getElementById('botao-login');
  getButtonLogin.addEventListener('click', login);
}
loginButton();

const getAgreement = document.getElementById('agreement');
function addChecked() {
  console.log(getAgreement.checked);
  if (getAgreement.checked === true) {
    getSubmitBtn.removeAttribute('disabled');
    console.log('retirou disabled');
    getSubmitBtn.style.backgroundColor = 'rgb(81, 34, 134)';
    getSubmitBtn.style.color = 'white';
  } else {
    console.log('coloca disabled');
    getSubmitBtn.setAttribute('disabled', '');
    getSubmitBtn.style.backgroundColor = 'rgb(224, 223, 223)';
    getSubmitBtn.style.color = 'grey';
  }
}
getAgreement.addEventListener('click', addChecked);

function disabledButton() {
  if (getAgreement.checked === false) {
    getSubmitBtn.setAttribute('disabled', '');
    getSubmitBtn.style.backgroundColor = 'rgb(224, 223, 223)';
    getSubmitBtn.style.color = 'grey';
  }
}
disabledButton();

function contadorTexArea() {
  const getTextArea = document.getElementById('textarea').value.length;
  const getCounter = document.getElementById('counter');
  getCounter.innerText = 500 - getTextArea;
  console.log(getCounter);
}

function eventKeyUp() {
  const getTextArea = document.getElementById('textarea');
  getTextArea.addEventListener('keyup', contadorTexArea);
}
eventKeyUp();

function recuperaFamilia() {
  const getFamilia = document.getElementsByClassName('familia');
  let minhaFamilia;
  for (let i = 0; i < getFamilia.length; i += 1) {
    if (getFamilia[i].checked) {
      minhaFamilia = getFamilia[i].value;
    }
  }
  return minhaFamilia;
}

function recuperaMaterias() {
  const getMaterias = document.getElementsByClassName('subject');
  const arrayMinhasMaterias = [];
  let minhasMaterias;
  for (let i = 0; i < getMaterias.length; i += 1) {
    if (getMaterias[i].checked) {
      arrayMinhasMaterias.push(getMaterias[i].value);
      minhasMaterias = arrayMinhasMaterias.join(', ');
    }
  }
  return minhasMaterias;
}
function recuperaAvaliação() {
  const getAvaliação = document.getElementsByName('rate');
  let avaliação;
  for (let i = 0; i < getAvaliação.length; i += 1) {
    if (getAvaliação[i].checked) {
      avaliação = getAvaliação[i].value;
    }
  }
  return avaliação;
}

function criaArrayInfo() {
  const getNome = document.getElementById('input-name').value;
  const getSobreNome = document.getElementById('input-lastname').value;
  const getEmail = document.getElementById('input-email').value;
  const getCasa = document.getElementById('house').value;
  const getComentario = document.getElementById('textarea').value;

  const infoForm = [
    `Nome: ${getNome} ${getSobreNome}`,
    `Email: ${getEmail}`,
    `Casa: ${getCasa}`,
    `Família: ${recuperaFamilia()}`,
    `Matérias: ${recuperaMaterias()}`,
    `Avaliação: ${recuperaAvaliação()}`,
    `Observações: ${getComentario}`,
  ];
  return infoForm;
}

function criaParagrafo() {
  const getMain1 = document.getElementById('main-container');
  const criaFielset = document.createElement('fieldset');
  criaFielset.id = 'evaluation-form';
  getMain1.appendChild(criaFielset);
  const arrayInfo = criaArrayInfo();

  for (let i = 0; i < arrayInfo.length; i += 1) {
    const criaP = document.createElement('p');
    criaP.innerHTML = arrayInfo[i];
    criaFielset.appendChild(criaP);
  }
  const criaImg = document.createElement('img');
  criaImg.src = './images/trybewarts-colored.svg';
  criaImg.id = 'trybewarts-forms-logo';
  getMain1.appendChild(criaImg);
}

function apagaForm() {
  const getMain = document.getElementById('main-container');
  getMain.children[1].remove();
  getMain.children[0].remove();
}

function juntaFunções() {
  criaArrayInfo();
  criaParagrafo();
  apagaForm();
}

function botaoEnviar() {
  const getBotao = document.getElementById('submit-btn');
  getBotao.addEventListener('click', juntaFunções);
}
botaoEnviar();
