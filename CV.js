//selecao dos botoes
var btnObjProfissional = document.querySelector(".btnOP");
var btnPerfil = document.querySelector(".btnPerfil");
var btnExpProfissional = document.querySelector(".btnEP");
var btnCapacitacao = document.querySelector(".btnCapacitacao");
var btnDadosContato = document.querySelector(".btnContato");
//Agrupamento dos botoes em um array
var botoes = [btnObjProfissional, btnPerfil, btnExpProfissional, btnCapacitacao, btnDadosContato];

//selecao das seções
var objProfissional = document.querySelector(".objProfissional");
var perfil = document.querySelector(".perfil");
var expProfissional = document.querySelector(".expProfissional");
var capacitacao = document.querySelector(".capacitacao");
var dadosContato = document.querySelector(".dadosContato");
//agrupamento secoes
var secoes = [objProfissional,perfil,expProfissional,capacitacao,dadosContato];

botoes.forEach(element => {

    element.addEventListener("click", () => {
        secoes.forEach(element => {
            element.style.display = "none";
        });

        secoes[botoes.indexOf(element)].style.display = "inline-block";
    });
})