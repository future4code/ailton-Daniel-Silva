// Exercícios de interpretação de código ========================================

// [QUESTÃO 1] 

// a. undefined

// b. null

// c. 11

// d. Erro, pois array não foi definida

// e. Erro, pois array não foi definida

// f. Erro, pois array não foi definida

// [QUESTÃO 2]

// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código =================================================

// [QUESTÃO 1]

const nomeDoUsuario = prompt("Qual seu nome?");
const emailDoUsuario = prompt("Qual seu e-mail?");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. 
Seja bem-vinda(o) ${nomeDoUsuario}.`);

// [QUESTÃO 2]

let comidasPreferidas = ["Strogonoff", "Feijoada", "Pão de Queijo",
 "Lasanha", "Hamburguer"];

// a)

console.log(comidasPreferidas);

// b)

console.log(`Essas são minhas comidas favoritas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`);

// c)

let comidaUsuario = prompt("Qual sua comida favorita?");
comidasPreferidas.splice(1, 1);
comidasPreferidas.splice(1, 0, comidaUsuario);
console.log(comidasPreferidas);

// [QUESTÃO 3]

// a)

let listaDeTarefas = []

// b)

const tarefa1 = prompt("Diga uma tarefa que deve realizar hoje");
const tarefa2 = prompt("Diga uma segunda tarefa que deve realizar hoje");
const tarefa3 = prompt("Diga uma terceira tarefa que deve realizar hoje");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

// c)

console.log(listaDeTarefas);

// d)

const tarefaJaRealizada = prompt(`Digite o índice de uma tarefa que você já realizou:
0 - Primeira Tarefa
1 - Segunda Tarefa
2 - Terceira Tarefa`);

// e)

listaDeTarefas.splice(tarefaJaRealizada, 1);

// f)

console.log(listaDeTarefas);





