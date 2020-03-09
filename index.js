// Base a ser utilizada
const alunosDaEscola = [
    {nome:"Henrique", notas:[], cursos:[], faltas:5},
    {nome:"Edson", notas:[], cursos:[], faltas:2},
    {nome:"Bruno", notas:[10,9.8,9.6], cursos:[], faltas:0},
    {nome:"Guilherme", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}], faltas:0},
    {nome:"Carlos", notas:[], cursos:[], faltas:0},
    {nome:"Lucca", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}], faltas:3}
];
// implementação

function buscarAluno(nomeDoAluno){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
        console.log("----------------------------------------------------------------------------");
        console.log("Aluno encontrado!\n");
        console.log("                    Informações do aluno:\n");
        console.log(resultado[0]);
        console.log("----------------------------------------------------------------------------");
    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log("Aluno não encontrado!");
        console.log("----------------------------------------------------------------------------");
    }
}  

// buscarAluno("Henrique")

function listarAlunos(){
    for(let i = 0; i < alunosDaEscola.length; i++){
        console.log("----------------------------------------------------------------------------");
        console.log("                    Informações dos alunos:\n");
        console.log(alunosDaEscola[i]);
    }
}

// listarAlunos()

function adicionarAluno(nomeDoAluno){
    let novo = {nome:nomeDoAluno, notas:[], cursos:[],faltas:0};
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 0){
        alunosDaEscola.push(novo);
        console.log("----------------------------------------------------------------------------\n");
        console.log(`${nomeDoAluno} foi adicionado ao banco de dados!\n`);
        console.log("----------------------------------------------------------------------------");

    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log(`${nomeDoAluno} já consta no banco de dados!`);
        console.log("----------------------------------------------------------------------------");

    }
}

// adicionarAluno("Eric")


function matricularAluno(nomeDoAluno, curso){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
        resultado[0].cursos = [{nomeDoCurso: curso, dataMatricula: new Date}];
        console.log("----------------------------------------------------------------------------");
        console.log("  Aluno matriculado conforme curso e data de matricula apresentados abaixo:");
        console.log(resultado[0]);
        console.log("----------------------------------------------------------------------------");

    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log(`${nomeDoAluno} não foi encontrado no banco de dados!`);
        console.log("----------------------------------------------------------------------------");

    }
}

// matricularAluno("Bruno", "FullStack")

function aplicarFalta(nomeDoAluno){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
        resultado[0].faltas += 1;
        console.log("----------------------------------------------------------------------------");
        console.log(`           Uma falta foi adicionada ao aluno ${nomeDoAluno}:\n`);
        console.log(resultado[0]);
        console.log("----------------------------------------------------------------------------");

    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log(`${nomeDoAluno} não foi encontrado no banco de dados!`);
        console.log("----------------------------------------------------------------------------");

    }
}

// aplicarFalta("Edson")

function aplicarNota(nomeDoAluno, nota){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
        resultado[0].notas.push(nota);
        console.log("----------------------------------------------------------------------------");
        console.log(`         A seguinte nota (${nota}) foi adicionada ao aluno ${nomeDoAluno}:\n`);
        console.log(resultado[0]);
        console.log("----------------------------------------------------------------------------");

    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log(`${nomeDoAluno} não foi encontrado no banco de dados!`);
        console.log("----------------------------------------------------------------------------");

    }
}

function mediaAluno(nomeDoAluno){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
       let soma = resultado[0].notas.reduce(function(accumulator, currentValue){
           return (accumulator + currentValue);
        })
        return soma/resultado[0].notas.length;
        }
    }

    // mediaAluno("Lucca")

// aplicarNota("Lucca", 2)

function aprovarAluno(nomeDoAluno){
    let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nomeDoAluno));
    if (resultado.length == 1){
        if (resultado[0].cursos.length != 0 && resultado[0].faltas <= 3 && mediaAluno(nomeDoAluno) >= 7){
        console.log("----------------------------------------------------------------------------\n");
        console.log(`O aluno ${nomeDoAluno} foi aprovado!`);
        console.log(`Total de faltas: ${resultado[0].faltas}   Média final = ${mediaAluno(nomeDoAluno)}`);
        console.log("----------------------------------------------------------------------------");
    }else if (resultado[0].cursos.length != 0 && resultado[0].faltas > 3){
        console.log("----------------------------------------------------------------------------\n");
        console.log(`O aluno ${nomeDoAluno} foi reprovado por excesso de faltas!`);
        console.log("----------------------------------------------------------------------------");
    }else if (resultado[0].cursos.length != 0 && resultado[0].faltas <= 3 && mediaAluno(nomeDoAluno) < 7){
        console.log("----------------------------------------------------------------------------\n");
        console.log(`O aluno ${nomeDoAluno} foi reprovado por não ter atingido média 7!`);
        console.log(`Média final = ${mediaAluno(nomeDoAluno)}`);

        console.log("----------------------------------------------------------------------------");
    }else{
        console.log("----------------------------------------------------------------------------\n");
        console.log(`O aluno ${nomeDoAluno} ainda não está matriculado em um curso!`);
        console.log("----------------------------------------------------------------------------");
    }
    }else{
        console.log("----------------------------------------------------------------------------");
        console.log("                 O seguinte erro foi encontrado:\n");
        console.log(`${nomeDoAluno} não foi encontrado no banco de dados!`);
        console.log("----------------------------------------------------------------------------");
    }
}

aprovarAluno("Lucca")