//PROGRAMA EXERCICIO DE BASE DE DADOS IMPLEMENTACAO BASICA

const db = ['inter', 'gremio', 'caxias', 'juventude', 'zequinha', 'ypiranga'];

console.log(`\n times iniciais: ${db.sort()}`);

function createData(equipe) {
  db.push(equipe);
  db.sort();
  console.log(`\nA equipe: ${equipe} foi criada e adicionada com sucesso`);
  console.log(`db updated is ${db}`);
}

function readData(equipe) {
  console.log(`\nBuscando equipe...`);

  const timeExiste = () =>
    console.log(
      `\nA equipe do '${equipe}' foi encontrada em ${db.indexOf(equipe)}`
    );

  const timeNaoExiste = () => {
    console.log(
      '\ntime nao existe, irei adicionar este novo time na base de dados'
    );
    createData(equipe);
  };
  //para ler o dado, preciso retornar ele
  return db.includes(equipe) ? timeExiste() : timeNaoExiste();
}

function updateData(equipe, novaEquipe) {
  console.log(`\nAtualizando equipe...`);

  deleteData(equipe);
  console.log(`\nA equipe: ${equipe}, sera trocada`);
  createData(novaEquipe);
}

function deleteData(equipe) {
  console.log(`\nApagando equipe...`);

  const position = db.indexOf(equipe);
  db.splice(position, 1);
  console.log(`\nA equipe do ${equipe} foi deletada`);
}

//create data
setTimeout(() => {
  createData('avenida');
}, 1000);

// readData
setTimeout(() => {
  readData('avenida');
}, 3000);

// readData
setTimeout(() => {
  readData('brasil');
}, 5000);

// updateData
setTimeout(() => {
  updateData('gremio', 'flamengo');
}, 7000);

// deleteData
setTimeout(() => {
  deleteData('flamengo');
}, 9000);

//print database
setTimeout(() => {
  console.log(`\n${db}`);
}, 11000);
