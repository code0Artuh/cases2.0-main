function casesNotes() {

  function criaStyle(atr) {
    const style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', atr)
    document.head.appendChild(style)
  }
  criaStyle('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');
  criaStyle('https://filipesanches.github.io/cases2.0/style.css');

  notes.id = 'notes'
  notes.innerHTML += `
  <barra id='notesmove'>
  <span>Cases Note 2.0</span>
  <i class="fa-solid fa-moon" id='tema'></i>
  <i class="fa-solid fa-window-minimize"></i>
  <i class="fa-solid fa-window-maximize"></i>
  <i class="fa-solid fa-rectangle-xmark"></i>
  
  </barra>
  <section>
  <p>
    <label for="sepekeasy">Speakeasy ID:</label>
    <input data-comentario="comentario" type="text" name="sepekeasy" id="sepekeasy">
  </p>
  <p>
    <label for="substatus">Substatus:</label>
    <select data-comentario="comentario" name="substatus" id="substatus">
    </select>
  </p>
  <p>
    <label for="reason">Reason/Comments:</label>
    <input data-comentario="comentario" type="text" name="reason" id="reason">
  </p>
  <p>
    <label for="comments">On Call Comments:</label>
    <textarea data-comentario="comentario" name="comments" id="comments" cols="30" rows="10"></textarea>
  </p>
  <p>
    <label for="">Tags Implemented:</label>
    <input data-comentario="comentario" type="text" name="valor" id="valor" style="display: none;">
  </p>
  <div id="tags-implement">
    <p>
      <input type="checkbox" name="tag" id="tag">
      <label for="tag"><input type="text" name="other" id="other" placeholder="Other"></label>
    </p>
  </div>
  <p>
    <label for="screenshots">Screenshots:</label>
    <textarea data-comentario="comentario" name="screenshots" id="screenshots" cols="30" rows="10">Ads Screenshot:

GTM Screenshot:

Tag Assistant Screenshot:</textarea>
  </p>
  <p>
    <label for="mcids">Multiple CIDs:</label>
    <input data-comentario="comentario" type="text" name="mcids" id="mcids">
  </p>
  <p>
    <label for="oncall">On Call( Call Started) signaled on time?:</label>
    <input data-comentario="comentario" type="text" name="oncall" id="oncall">
  </p>
  <p>
    <label for="">*Bad Lead:</label>
    <input data-comentario="comentario" name="bad" id="bad" style="display: none;">
  </p>
  <div id="bads">
    <p>
      <input type="checkbox" name="bval" id="bval">
      <label for="bval"><input type="text" name="bval-other" id="bval-other" placeholder="Other"></label>
    </p>
  </div>
  <p id = "buttons">
    <hotkey><span id="hotkey"></span></hotkey>
    <button id="reset-note" title="Apagar todos os campos!">RESET</button>
    <!--<button id="reload-note" onclick='preencherCampos()' title="Recuperar última nota preenchida!">RECOVER</button>-->
    <button id="gerar-note" title="Gerar nota!">GERAR</button>
  </p>
  </section>
  `




  // Controle botões note theme minimize maximize close
  const tema = document.querySelector('#tema');
  tema.addEventListener('click', theme)
  function theme() {
    notes.classList.toggle('invert');
    if (tema.classList.contains('fa-moon')) {
      tema.classList.replace('fa-moon', 'fa-sun');
    } else {
      tema.classList.replace('fa-sun', 'fa-moon');
    }
  }

  const minimize = document.querySelector('.fa-window-minimize');
  minimize.addEventListener('click', minimizar);
  function minimizar() {
    notes.style.width = '250px';
    notes.style.height = '40px'
    notes.style.padding = '0'
    notes.querySelector('section').style.display = 'none';
    tema.style.display = 'none'
  }

  const maxmize = document.querySelector('.fa-window-maximize');
  maxmize.addEventListener('click', maxmizar);
  function maxmizar() {
    notes.style.width = '500px';
    notes.style.height = '600px';
    notes.querySelector('section').style.padding = '40px 10px 10px 10px';
    notes.querySelector('section').style.display = 'block';
    tema.style.display = 'block'
  }

  const xmark = document.querySelector('.fa-rectangle-xmark');
  xmark.addEventListener('click', close);
  function close() {
    notes.style.display = 'none';
  }

  document.querySelector('overflow-layout-item').addEventListener('click', function () {
    notes.style.display = 'block';
  })
  // FIm Controle botões note

  //lista de email e pupula select
  const emailList = [
    '-',
    'NRP - SO - IN Not Reachable ',
    'New - Confirmation Email',
    'AS - Work in Progress',
    'AS - Reschedule 1',
    'AS - Acceptable Reschedule',
    'AS - Agent Reschedule',
    'NI - Awaiting Inputs',
    'NI - In Consult',
    'NI - Awaiting Validation',
    'NI - Attempted Contact',
    'NI - Other',
    'IN - Infeasible',
    'IN - Not Reachable',
    'IN - Not Interested',
    'IN - Not Ready',
    'IN - Out of Scope - Rerouted to Internal Team',
    'IN - Out of Scope - Unable to Transfer',
    'IN - Out of Scope - Email to Seller',
    'IN - Other',
    'SO - Verified',
    'SO - Verified No Recent Conversion',
    'SO - Unverified',
    'SO - Verification Not Needed'
  ];
  const hotkeystr = [
    '-',
    'ts no res',
    'ts as new',
    '-',
    'ts as resched1',
    'ts as reschedok',
    'ts as reschedok',
    'ts ni ai',
    'ts ni ic',
    'ts ni av',
    'ts ni ac',
    'ts ni oth',
    'ts in inf',
    'ts in nrch',
    'ts in ni',
    'ts in nrdy',
    'ts in oost',
    'ts in oosu',
    'ts in oos seller',
    'ts in oth',
    'ts so verif',
    'ts so verif nrc',
    'ts so unv',
    'ts so vnn'
  ];
  const tagsImplement = [
    'Ads Conversion Tracking',
    'Ads Conversion Tracking Troubleshooting',
    'Ads Dynamic Remarketing',
    'Ads Enhanced Conversions',
    'Ads Remarketing',
    'Ads Website Call Conversion',
    'Analytics Cross Domain Tracking',
    'Analytics Dynamic Remarketing',
    'Analytics E-Commerce Tracking',
    'Analytics Enhanced E-Commerce Tracking',
    'Analytics Event Tracking',
    'Analytics Health Check',
    'Analytics Remarketing',
    'Analytics Setup',
    'Analytics Troubleshooting',
    'Consent Mode',
    'Fix Sitewide Tagging (OGT & CT)',
    'Google Analytics 4 - Migration',
    'Google Analytics 4 E-Commerce Migration',
    'Google Tag Manager Installation'
  ];

  const badList = [
    "Informações de contato erradas |	BAD LEAD - Wrong contact information",
    "Informações de contato ausentes |	BAD LEAD - Missing contact information",
    "Task incorreta | BAD LEAD - Wrong task",
    "Cliente não estava ciente da consultoria | BAD LEAD - Client wasn't aware of the appointment",
    "URL incorreta | BAD LEAD - Wrong URL",
    "URL ausente | BAD LEAD - URL not provided",
    "Nome do cliente errado | BAD LEAD - Wrong client's name",
    "Cliente não está interessado na consultoria | BAD LEAD - Client is not interested",
    "Cliente não possui acessos administrativos | BAD LEAD - No admin access",
    "Task sem detalhes necessários para a implementação | BAD LEAD - Task without details/instructions",
    "Conta suspensa por política | BAD LEAD - Account suspended",
    "CID Errado | BAD LEAD - Wrong CID",
    "Pedido fora de escopo | BAD LEAD - Solicitation Out of Scope",
    "Idioma Errado | BAD LEAD - Wrong Language",
    "AM não explicou a importância da nossa consultoria | BAD LEAD - Account manager didn't explain the importance of the service",
    "Quando o email sobre a consultoria vai para a caixa de Spam | SPAM - <Email Client></Email>"
  ]
  const badvalue = [
    "BAD LEAD - Wrong contact information",
    "BAD LEAD - Missing contact information",
    "BAD LEAD - Wrong task",
    "BAD LEAD - Client wasn't aware of the appointment",
    "BAD LEAD - Wrong URL",
    "BAD LEAD - URL not provided",
    "BAD LEAD - Wrong client's name",
    "BAD LEAD - Client is not interested",
    "BAD LEAD - No admin access",
    "BAD LEAD - Task without details/instructions",
    "BAD LEAD - Account suspended",
    "BAD LEAD - Wrong CID",
    "BAD LEAD - Solicitation Out of Scope",
    "BAD LEAD - Wrong Language",
    "BAD LEAD - Account manager didn't explain the importance of the service",
    "SPAM - &#60;Email Client&#62;&#60;/Email&#62;"
  ]

  for (let i = 0; i < emailList.length; i++) {
    const option = document.createElement('option')
    option.value = emailList[i]
    option.innerText = emailList[i]
    substatus.appendChild(option)
  }

  const tags = document.querySelector("#tags-implement")
  for (let i = 0; i < tagsImplement.length; i++) {
    const p = document.createElement('p')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'tag' + [i])
    checkbox.setAttribute('name', 'tag' + [i])
    checkbox.value = tagsImplement[i]
    const label = document.createElement('label')
    label.setAttribute('for', 'tag' + [i])
    label.innerText = tagsImplement[i]
    p.appendChild(checkbox)
    p.appendChild(label)
    tags.appendChild(p)
  }
  const outraTag = document.querySelector('#other');
  outraTag.addEventListener('click', function () {
    if (document.querySelector('#tag').checked) {
      document.querySelector('#tag').checked = false
    } else {
      document.querySelector('#tag').checked = true
    }
  })
  outraTag.addEventListener('input', function (e) {
    document.querySelector('#tag').value = e.target.value;
  })
  const bads = document.querySelector("#bads")
  for (let i = 0; i < badvalue.length; i++) {
    const p = document.createElement('p')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'bval' + [i])
    checkbox.setAttribute('name', 'bval' + [i])
    checkbox.value = badvalue[i]
    const label = document.createElement('label')
    label.setAttribute('for', 'bval' + [i])
    label.innerText = badList[i]
    p.appendChild(checkbox)
    p.appendChild(label)
    bads.appendChild(p)
  }
  const bad = document.querySelector('#bval-other');
  bad.addEventListener('click', function () {
    if (document.querySelector('#bval').checked) {
      document.querySelector('#bval').checked = false
    } else {
      document.querySelector('#bval').checked = true
    }
  })
  bad.addEventListener('input', function (e) {
    document.querySelector('#bval').value = e.target.value;
  })
  //Fim lista de email e pupula select

  const hotkey = document.querySelector('#hotkey')
  const option = document.querySelectorAll('option');
  document.querySelector('select').addEventListener('change', function () {
    for (let i = 0; i < hotkeystr.length; i++) {
      if (option[i].selected == true) {
        if (option[i].value == 'IN - Out of Scope - Unable to Transfer' ||
          option[i].value == 'IN - Out of Scope - Email to Seller') {
          hotkey.innerHTML = `
             <b>Hotkey:</b> <span style='color: #ff0000;'>Atenção envie o email para o anunciante (ts in oosu) e AM (ts in oos seller)</span><br>
             <p>
             <span id="copy3">ts in oosu<span>
             <button class="copy3" data-clipboard-target="#copy3" onclick="noteEmail('ts in oosu')">
               <i class="fa-regular fa-copy"></i>
             </button>
             </p><p>
             <span id="copy4">ts in oos seller<span>
             <button class="copy4" data-clipboard-target="#copy4" onclick="noteEmail('ts in oos seller')">
               <i class="fa-regular fa-copy"></i>
             </button>
             </p>
             <divLanguage></divLanguage>`
          radio('Spanish', 'sp', 'divLanguage');
          radio('Spanish (Latin America)', 'sp-lt', 'divLanguage');
          radio('Portuguese', 'pt', 'divLanguage');
          radio('Portuguese (Brazil)', 'pt-br', 'divLanguage');
        } else {
          //aqui
          hotkey.innerHTML = `<p><b>Hotkey:</b> <span id="copy2">${hotkeystr[i]}<span>
             <button class="copy2" data-clipboard-target="#copy2" onclick="noteEmail('${hotkeystr[i]}')">
               <i class="fa-regular fa-copy"></i>
             </button></p>
             <divLanguage></divLanguage>`
          radio('Spanish', 'sp', 'divLanguage');
          radio('Spanish (Latin America)', 'sp-lt', 'divLanguage');
          radio('Portuguese', 'pt', 'divLanguage');
          radio('Portuguese (Brazil)', 'pt-br', 'divLanguage');
        }
      }
    }
  })

  //gera note
  const gerarButton = document.querySelector('#gerar-note')
  gerarButton.addEventListener('click', gerarNote);
  //reset note
  const resetButton = document.getElementById('reset-note');
  resetButton.addEventListener('click', function () {
    const inputs = notes.querySelectorAll('input, textarea, select');

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.type === 'checkbox') {
        input.checked = false;
      } else {
        input.value = '';
      }
    }
    document.querySelector('#screenshots').value = 'Ads Screenshot:\n\nGTM Screenshot:\n\nTag Assistant Screenshot:'
    document.getElementById("substatus").selectedIndex = 0;
  });



  //move window
  dragElement(notes);

  //resize window
  resizeWindow();

}
casesNotes();

//gera nota
let arrTags = [];
let arrBads = [];

function gerarNote() {
  //limpa e insere tags selecionados em um array 
  arrTags = [];
  document.querySelectorAll('[name*=tag]').forEach((tag, i) => {
    if (tag.checked) {
      arrTags.push(tag.value);
    }
  })
  //Fim limpa e insere tags selecionados em um array 

  //limpa e insere bad leads selecionadoss em um array
  arrBads = [];
  document.querySelectorAll('[name*=bval]').forEach((bad, i) => {
    if (bad.checked) {
      arrBads.push(bad.value);
    }
  })
  //Fim limpa e insere bad leads selecionadoss em um array

  noteMenu();
  setTimeout(activeSave, 1000)


}
//Fim gera nota


function activeSave() {
  //Formata comentario, tags, screenshots e bad lead
  const arrTagsFormated = arrTags.join('<br>')
  const arrBadsFormated = arrBads.join('<br>')
  const comentarios = document.querySelector("#comments").value.replaceAll('\n', '<br>')
  const screenshots = document.querySelector("#screenshots").value.replaceAll('\n', '<br>')
  //Fim Formata comentario, tags, screenshots e bad lead

  //Formata nota para cases
  const noteHTML = `
     <br>
     <p><b>Date:</b> ${dataAtualFormatada()}</p>
     <p><b>Speakeasy ID:</b> ${sepekeasy.value}</p>
     <p><b>Substatus:</b> ${substatus.value}</p>
     <p><b>Reason/Comments:</b> ${reason.value}</p>
     <p><b>On Call Comments:</b><br>${comentarios}</p>
     <p><b>Tags Implemented:</b><br>${arrTagsFormated}</p>
     <p><b>Screenshots:</b><br>${screenshots}</p>
     <p><b>Multiple CIDs:</b> ${mcids.value}</p>
     <p><b>On Call( Call Started) signaled on time?:</b> ${oncall.value}</p>
     <p><b>*Bad Lead: </b><br>${arrBadsFormated}</p>
   `;
  //Fim Formata nota para cases

  // Seleciona a ultima nota e repassa os dados
  const caseNote = document.querySelectorAll('[aria-label="Case Note"]')
  caseNote[caseNote.length - 1].innerHTML = noteHTML;
  document.execCommand('insertText', false, ' ')
  console.log('salvo');
  //Fim Seleciona a ultima nota e repassa os dados
}

//abre menu e seciona nova nota
function noteMenu() {
  document.querySelector('[debug-id="dock-item-home"]').click()
  document.querySelector('[role="menu"]').dispatchEvent(new Event('focus', { 'bubbles': true }))
  setTimeout(function () {
    document.querySelector('[aria-label="Create new case note"]').click()
  }, 500)
}
//Fim abre menu e seciona nova nota



/**
 * editado pra baixo
 * 
 * 
 */

//Cria email seleciona hotkey
function noteEmail(keyHot) {
  return setCustumer()
    .then(setEmailLanguage)
    .then(() => wait(4000))
    .then(criaEmail)
    .then(() => wait(4000))
    .then(fromEmail)
    .then(() => wait(1000))
    .then(abreHotkey)
    .then(() => wait(1000))
    .then(() => colaHotkey(keyHot))
    .then(() => wait(5000))
    .then(clicaHotkey)
    .then(() => 'E-mail enviado com sucesso!');
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function setCustumer() {
  return new Promise((resolve) => {
    document.querySelector('span[class*="button-text"]').click();
    setTimeout(() => {
      const customer = Array.from(document.querySelectorAll('span[class*="label"]')).find(
        (e) => e.innerText === 'Customer'
      );
      customer.click();
      console.log('Custumer Selecionado');
      resolve();
    }, 500);
  });
}

function setEmailLanguage() {
  return new Promise((resolve) => {
    const opcaoSelecionada = document.querySelector('input[name="language"]:checked');
    if (opcaoSelecionada) {
      const valorSelecionado = opcaoSelecionada.value;
      console.log('Opção selecionada:', valorSelecionado);
      document.querySelector("[aria-label='Locale']").dispatchEvent(new Event('focus', { 'bubbles': true }));
      setTimeout(() => {
        const option = Array.from(document.querySelectorAll('material-select-dropdown-item')).find(
          (e) => e.innerText === valorSelecionado
        );
        option.click();
        resolve();
      }, 500);
    } else {
      console.log('Nenhuma opção selecionada');
      resolve();
    }
  });
}

function criaEmail() {
  return new Promise((resolve) => {
    document.querySelector('[debug-id="dock-item-home"]').click();
    document.querySelector('[role="menu"]').dispatchEvent(new Event('focus', { 'bubbles': true }));
    setTimeout(() => {
      const newEmail = document.querySelector('[aria-label="Create new email"]');
      newEmail.click();
      console.log('Email criado!');
      resolve();
    }, 1000);
  });
}

function fromEmail() {
  return new Promise((resolve) => {
    const address = document.querySelectorAll('[buttoncontent][class*="address"]');
    const email = address[address.length - 1];
    email.click();
    setTimeout(() => {
      const technicalSolutionsEmail = document.querySelector('[id="email-address-id--technical-solutions@google.com"]');
      technicalSolutionsEmail.click();
      console.log('Endereço alterado!');
      resolve();
    }, 1000);
  });
}

function abreHotkey() {
  return new Promise((resolve) => {
    const email = document.querySelectorAll("#email-body-content-top-content")
    email[email.length - 1].innerText = ''
    document.querySelector('[aria-label="Insert canned response"]').click();
    console.log('Abre hotkey e email limpo!');
    resolve();
  });
}

function colaHotkey(keyHot) {
  return new Promise((resolve) => {
    const meuInput = document.querySelectorAll('[aria-haspopup="listbox"]');
    meuInput[meuInput.length - 1].value = keyHot;
    const eventoInput = new Event('input', { bubbles: true });
    meuInput[meuInput.length - 1].dispatchEvent(eventoInput);
    console.log('Hotkey colada!');
    resolve();
  });
}

function clicaHotkey() {
  return new Promise((resolve) => {
    const span = document.querySelectorAll('span.text-segment')
    span[span.length - 1].click();
    console.log('Hotkey clicada!');
    resolve();
  });
}
//Fim Cria email seleciona hotkey


//Formata Data
function dataAtualFormatada() {
  const data = new Date();
  const diaF = data.getDate().toString().padStart(2, '0');
  const mesF = (data.getMonth() + 1).toString().padStart(2, '0');
  const anoF = data.getFullYear();
  return `${diaF}/${mesF}/${anoF}`;
}
//Fim Formata Data


//Inicio Mover note
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "move")) {
    document.getElementById(elmnt.id + "move").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Get the window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Get the maximum allowed position of the element
    var maxPosX = windowWidth - elmnt.offsetWidth;
    var maxPosY = windowHeight - elmnt.offsetHeight;

    // Set the new position of the element
    var newPosX = elmnt.offsetLeft - pos1;
    var newPosY = elmnt.offsetTop - pos2;
    elmnt.style.left = Math.min(Math.max(newPosX, 0), maxPosX) + "px";
    elmnt.style.top = Math.min(Math.max(newPosY, 0), maxPosY) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// Fim Mover note

//editado
//resize
function resizeWindow() {
  const element = document.getElementById('notes');
  const resizer = document.createElement('div');
  resizer.className = 'resizer';
  resizer.style.width = '10px';
  resizer.style.height = '10px';
  resizer.style.background = 'none';
  resizer.style.position = 'absolute';
  resizer.style.right = 0;
  resizer.style.bottom = 0;
  resizer.style.cursor = 'se-resize';
  element.appendChild(resizer);
  resizer.addEventListener('mousedown', initResize, false);

  function initResize(e) {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
  }

  function Resize(e) {
    const maxWidth = window.innerWidth - element.offsetLeft;
    const maxHeight = window.innerHeight - element.offsetTop;
    const newWidth = Math.min(e.clientX - element.offsetLeft, maxWidth);
    const newHeight = Math.min(e.clientY - element.offsetTop, maxHeight);
    element.style.width = newWidth + 'px';
    element.style.height = newHeight + 'px';
  }

  function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
  }
}
// Fim resize


//cria radio
function radio(value, id, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Element "${containerSelector}" not found`);
    return;
  }

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = value;

  const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.name = 'language';
  radioInput.id = id;
  radioInput.value = value;

  container.appendChild(radioInput);
  container.appendChild(label);
  container.appendChild(document.createElement('br'));
}
//Fim cria radio





//recover
// // Seleciona todos os campos de entrada
// const inputs = notes.querySelectorAll('input, select, textarea');
// // Função para salvar informações no localStorage
// function salvarCampos() {
//   // Percorre todos os campos de entrada
//   inputs.forEach(input => {
//     // Salva o valor ou estado atual do campo de entrada no localStorage
//     if (input.type === 'checkbox') {
//       localStorage.setItem(input.id, input.checked);
//     } else {
//       localStorage.setItem(input.id, input.value);
//     }
//   });
// }

// // Adiciona um ouvinte de evento para cada campo de entrada
// inputs.forEach(input => {
//   input.addEventListener('change', salvarCampos);
// });
// // Função para preencher os campos de entrada com informações do localStorage
// function preencherCampos() {
//   // Percorre todos os campos de entrada
//   inputs.forEach(input => {
//     // Verifica se há informações armazenadas no localStorage para o campo de entrada atual
//     const valorArmazenado = localStorage.getItem(input.id);
//     if (valorArmazenado !== null) {
//       // Preenche o campo de entrada com as informações armazenadas no localStorage
//       if (input.type === 'checkbox') {
//         input.checked = (valorArmazenado === 'true');
//       } else {
//         input.value = valorArmazenado;
//       }
//     }
//   });
// } 
