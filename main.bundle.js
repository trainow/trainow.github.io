webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* .fundo{\r\n    background: rgba(252,234,187,1);\r\n    background: -moz-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,234,187,1) 16%, rgba(251,223,147,1) 44%, rgba(252,205,77,1) 100%);\r\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(16%, rgba(252,234,187,1)), color-stop(44%, rgba(251,223,147,1)), color-stop(100%, rgba(252,205,77,1)));\r\n    background: -webkit-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,234,187,1) 16%, rgba(251,223,147,1) 44%, rgba(252,205,77,1) 100%);\r\n    background: -o-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,234,187,1) 16%, rgba(251,223,147,1) 44%, rgba(252,205,77,1) 100%);\r\n    background: -ms-linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,234,187,1) 16%, rgba(251,223,147,1) 44%, rgba(252,205,77,1) 100%);\r\n    background: linear-gradient(45deg, rgba(252,234,187,1) 0%, rgba(252,234,187,1) 16%, rgba(251,223,147,1) 44%, rgba(252,205,77,1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fccd4d', GradientType=1 );\r\n}\r\n\r\n.teste{\r\n\r\n\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formulario_editar_formulario_editar_formulario_component__ = __webpack_require__("./src/app/formulario/editar-formulario/editar-formulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formulario_formulario_component__ = __webpack_require__("./src/app/formulario/formulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topo_topo_component__ = __webpack_require__("./src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__criar_conta_criar_conta_component__ = __webpack_require__("./src/app/criar-conta/criar-conta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_mask__ = __webpack_require__("./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_page_meus_alunos_meus_alunos_component__ = __webpack_require__("./src/app/home-page/meus-alunos/meus-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_page_adicionar_aluno_adicionar_aluno_component__ = __webpack_require__("./src/app/home-page/adicionar-aluno/adicionar-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__formulario_pergunta_texto_pergunta_texto_component__ = __webpack_require__("./src/app/formulario/pergunta-texto/pergunta-texto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__formulario_pergunta_radio_pergunta_radio_component__ = __webpack_require__("./src/app/formulario/pergunta-radio/pergunta-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__formulario_pergunta_mult_escolha_pergunta_mult_escolha_component__ = __webpack_require__("./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__inicio_inicio_component__ = __webpack_require__("./src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__inicio_topo_inicio_topo_inicio_component__ = __webpack_require__("./src/app/inicio/topo-inicio/topo-inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__inicio_quemsomos_quemsomos_component__ = __webpack_require__("./src/app/inicio/quemsomos/quemsomos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inicio_saibamais_saibamais_component__ = __webpack_require__("./src/app/inicio/saibamais/saibamais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_page_meus_alunos_criar_treino_criar_treino_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_page_meus_alunos_criar_treino_escolher_membro_escolher_membro_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_page_meus_alunos_criar_treino_escolher_musculo_escolher_musculo_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_page_meus_alunos_criar_treino_escolher_exercicio_escolher_exercicio_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_page_cadastrar_exercicio_personalizado_cadastrar_exercicio_personalizado_component__ = __webpack_require__("./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { guardaDados } from './home-page/meus-alunos/criar-treino/servicoLista';
// import { ModalFormComponent } from './formulario/modal-form/modal-form.component';





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__criar_conta_criar_conta_component__["a" /* CriarContaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_page_meus_alunos_meus_alunos_component__["a" /* MeusAlunosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_page_adicionar_aluno_adicionar_aluno_component__["a" /* AdicionarAlunoComponent */],
                __WEBPACK_IMPORTED_MODULE_3__formulario_formulario_component__["a" /* FormularioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__formulario_pergunta_texto_pergunta_texto_component__["a" /* PerguntaTextoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__formulario_pergunta_radio_pergunta_radio_component__["a" /* PerguntaRadioComponent */],
                __WEBPACK_IMPORTED_MODULE_19__formulario_pergunta_mult_escolha_pergunta_mult_escolha_component__["a" /* PerguntaMultEscolhaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_21__inicio_topo_inicio_topo_inicio_component__["a" /* TopoInicioComponent */],
                __WEBPACK_IMPORTED_MODULE_22__inicio_quemsomos_quemsomos_component__["a" /* QuemsomosComponent */],
                __WEBPACK_IMPORTED_MODULE_23__inicio_saibamais_saibamais_component__["a" /* SaibamaisComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_page_meus_alunos_criar_treino_criar_treino_component__["a" /* CriarTreinoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__home_page_meus_alunos_criar_treino_escolher_membro_escolher_membro_component__["a" /* EscolherMembroComponent */],
                __WEBPACK_IMPORTED_MODULE_26__home_page_meus_alunos_criar_treino_escolher_musculo_escolher_musculo_component__["a" /* EscolherMusculoComponent */],
                __WEBPACK_IMPORTED_MODULE_27__home_page_meus_alunos_criar_treino_escolher_exercicio_escolher_exercicio_component__["a" /* EscolherExercicioComponent */],
                __WEBPACK_IMPORTED_MODULE_0__formulario_editar_formulario_editar_formulario_component__["a" /* EditarFormularioComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_page_cadastrar_exercicio_personalizado_cadastrar_exercicio_personalizado_component__["a" /* CadastrarExercicioPersonalizadoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* ROUTES */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__formulario_pergunta_texto_pergunta_texto_component__["a" /* PerguntaTextoComponent */], __WEBPACK_IMPORTED_MODULE_18__formulario_pergunta_radio_pergunta_radio_component__["a" /* PerguntaRadioComponent */], __WEBPACK_IMPORTED_MODULE_19__formulario_pergunta_mult_escolha_pergunta_mult_escolha_component__["a" /* PerguntaMultEscolhaComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_page_meus_alunos_criar_treino_escolher_membro_escolher_membro_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_page_meus_alunos_criar_treino_criar_treino_component__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__criar_conta_criar_conta_component__ = __webpack_require__("./src/app/criar-conta/criar-conta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_page_meus_alunos_meus_alunos_component__ = __webpack_require__("./src/app/home-page/meus-alunos/meus-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_adicionar_aluno_adicionar_aluno_component__ = __webpack_require__("./src/app/home-page/adicionar-aluno/adicionar-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio_component__ = __webpack_require__("./src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inicio_quemsomos_quemsomos_component__ = __webpack_require__("./src/app/inicio/quemsomos/quemsomos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inicio_saibamais_saibamais_component__ = __webpack_require__("./src/app/inicio/saibamais/saibamais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__formulario_formulario_component__ = __webpack_require__("./src/app/formulario/formulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__formulario_editar_formulario_editar_formulario_component__ = __webpack_require__("./src/app/formulario/editar-formulario/editar-formulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_page_cadastrar_exercicio_personalizado_cadastrar_exercicio_personalizado_component__ = __webpack_require__("./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.ts");













var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'quemsomos', component: __WEBPACK_IMPORTED_MODULE_8__inicio_quemsomos_quemsomos_component__["a" /* QuemsomosComponent */] },
    { path: 'saibamais', component: __WEBPACK_IMPORTED_MODULE_9__inicio_saibamais_saibamais_component__["a" /* SaibamaisComponent */] },
    { path: 'criarFormulario', component: __WEBPACK_IMPORTED_MODULE_10__formulario_formulario_component__["a" /* FormularioComponent */] },
    { path: 'editarFormulario', component: __WEBPACK_IMPORTED_MODULE_11__formulario_editar_formulario_editar_formulario_component__["a" /* EditarFormularioComponent */] },
    { path: 'exercicio', component: __WEBPACK_IMPORTED_MODULE_12__home_page_cadastrar_exercicio_personalizado_cadastrar_exercicio_personalizado_component__["a" /* CadastrarExercicioPersonalizadoComponent */] },
    { path: 'meusAlunos', component: __WEBPACK_IMPORTED_MODULE_5__home_page_meus_alunos_meus_alunos_component__["a" /* MeusAlunosComponent */] },
    { path: 'addAluno', component: __WEBPACK_IMPORTED_MODULE_6__home_page_adicionar_aluno_adicionar_aluno_component__["a" /* AdicionarAlunoComponent */] },
    { path: 'criarConta', component: __WEBPACK_IMPORTED_MODULE_4__criar_conta_criar_conta_component__["a" /* CriarContaComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'criarTreino', component: __WEBPACK_IMPORTED_MODULE_1__home_page_meus_alunos_criar_treino_criar_treino_component__["a" /* CriarTreinoComponent */] },
    { path: 'escolherExercicios', component: __WEBPACK_IMPORTED_MODULE_0__home_page_meus_alunos_criar_treino_escolher_membro_escolher_membro_component__["a" /* EscolherMembroComponent */] }
];


/***/ }),

/***/ "./src/app/criar-conta/criar-conta.component.css":
/***/ (function(module, exports) {

module.exports = ".principal{\r\n    height: 100%;\r\n    border-style: solid\r\n}\r\n.m-top{\r\n    margin-top: 10%;\r\n}\r\n.autenticacao{\r\n    margin: 3% 3% 3% 3%\r\n}\r\n.label-obrigatorio{\r\n    display: block;\r\n    margin: auto;\r\n    color: red;\r\n}\r\n.label-autenticacao{\r\n    color: darkblue;\r\n    font-weight: bold;\r\n    width: 5;\r\n    display: block;\r\n    text-align: right;\r\n    margin: auto\r\n}\r\n.label-warning{\r\n    display: inline;\r\n    margin: auto;\r\n    color: red;\r\n}\r\n.centro-texto{\r\n    text-align: center;\r\n    display: block;\r\n    margin: auto;\r\n    margin-top: 2%;\r\n}\r\n.div-autentica{\r\n    margin-top: 0;\r\n}\r\n.botao{\r\n    margin-left:  3%;\r\n    margin-top: 3%;\r\n}\r\n.alinhar{\r\n    display: block;\r\n    margin: auto\r\n}\r\n.rodape {\r\n    margin: auto;\r\n    width: 100%;\r\n    bottom: 2%;\r\n    position: fixed;\r\n}\r\n.margin-do-label{\r\n    margin-top: 2%;\r\n}\r\n.margin-a{\r\n    padding-bottom: 2%;\r\n}\r\n.estilo-a{\r\n    color: lightseagreen;\r\n}\r\n.fotinho {\r\n    max-width:200px;\r\n    max-height:150px;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n.fundoTelaCadastro{\r\n    border:0px;\r\n    border-style:solid;\r\n    background-color:ghostwhite;\r\n    max-width: 100%;\r\n    /* border-radius: 10px; */\r\n    /* margin-top: 30px; */\r\n}\r\n@media (max-width: 600px)\r\n{\r\n    .margin-do-label{\r\n        margin-top: 5%;\r\n    }\r\n    .margin-a{\r\n        padding-bottom: 5%;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/criar-conta/criar-conta.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo-inicio></app-topo-inicio>\r\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md\">\r\n            <h3>Junte-se a nós!</h3>\r\n            <div class=\"col-md\">\r\n                <label>Gostaria de se juntar a mais nova ferramenta feita para agilizar e organizar os treinos dos seus alunos?</label>\r\n                <label>Crie uma conta agora e não deixe essa chance escapar!</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container fundoTelaCadastro resume-section p-3 p-lg-5 d-flex flex-column\">\r\n        <form class=\"form-group\"[formGroup]=\"form\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputNomeCompleto\" class=\"\">Nome Completo</label>\r\n                    <input type=\"text\" class=\"form-control input-estilo\" id=\"inputNomeCompleto\" placeholder=\"Digite seu nome...\" formControlName=\"nome\" [(ngModel)]=\"nome\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['nome'].touched && !form.controls['nome'].valid\">Digite um nome válido</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputNomeCompleto\">Usuário</label>\r\n                    <input type=\"text\" class=\"form-control input-estilo\" name=\"userid\" id=\"userid\" placeholder=\"Digite seu usuário...\" formControlName=\"userid\" [(ngModel)]=\"userid\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['userid'].touched && !form.controls['userid'].valid\">O campo é obrigatório</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputEmail\">E-mail</label>\r\n                    <input type=\"email\" class=\"form-control input-estilo\" name=\"email\" id=\"inputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Digite seu email...\" formControlName=\"email\" [(ngModel)]=\"email\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['email'].touched && !form.controls['email'].valid\">Digite um e-mail válido</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-auto\">\r\n                            <label for=\"inputNumeroCref\">Número CREF</label>\r\n                            <input type=\"text\" class=\"form-control input-estilo\" name=\"cref\" mask=\"999999\" id=\"inputNumeroCref\" placeholder=\"Digite seu CREF...\" formControlName=\"numeroCref\" [(ngModel)]=\"numeroCref\">\r\n                            <label class=\"label-warning\" *ngIf=\"form.controls['numeroCref'].touched && !form.controls['numeroCref'].valid\">O campo é obrigatório</label>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <label for=\"selectDigito\">Digito CREF</label>\r\n                            <select class=\"form-control input-estilo\" id=\"selectDigito\" formControlName=\"digitoCref\" [(ngModel)]=\"digitoCref\">\r\n                                <option value=\"0\" selected=\"true\"></option>\r\n                                <option>P</option>\r\n                                <option>G</option>\r\n                            </select>\r\n                            <label class=\"label-warning\" *ngIf=\"form.controls['digitoCref'].touched && !form.controls['digitoCref'].valid\">O campo é obrigatório</label>\r\n                        </div>\r\n\r\n                        <div class=\"col-auto\">\r\n                            <label for=\"selectEstado\">Estado (UF)</label>\r\n                            <select class=\"form-control input-estilo\" id=\"selectEstado\" formControlName=\"estadoCref\" [(ngModel)]=\"estadoCref\" >\r\n                                <option value=\"0\" selected=\"true\"></option>\r\n                                <option>AC</option>\r\n                                <option>AL</option>\r\n                                <option>AP</option>\r\n                                <option>AM</option>\r\n                                <option>BA</option>\r\n                                <option>CE</option>\r\n                                <option>DF</option>\r\n                                <option>ES</option>\r\n                                <option>GO</option>\r\n                                <option>MA</option>\r\n                                <option>MT</option>\r\n                                <option>MS</option>\r\n                                <option>MG</option>\r\n                                <option>PA</option>\r\n                                <option>PB</option>\r\n                                <option>PR</option>\r\n                                <option>PE</option>\r\n                                <option>PI</option>\r\n                                <option>RJ</option>\r\n                                <option>RN</option>\r\n                                <option>RS</option>\r\n                                <option>RO</option>\r\n                                <option>RR</option>\r\n                                <option>SC</option>\r\n                                <option>SP</option>\r\n                                <option>SE</option>\r\n                                <option>TO</option>\r\n                            </select>\r\n                            <label class=\"label-warning\" *ngIf=\"form.controls['estadoCref'].touched && !form.controls['estadoCref'].valid\">O campo é obrigatório</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputTelefone\">Celular</label>\r\n                    <input type=\"text\" class=\"form-control input-estilo\" name=\"telefone\" id=\"inputTelefone\" placeholder=\"Digite seu telefone...\" mask=\"99-99999-9999\" formControlName=\"telefone\" [(ngModel)]=\"telefone\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['telefone'].touched && !form.controls['telefone'].valid\">Digite um telefone válido</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputDataNasc\">Data de Nascimento</label>\r\n                    <input type=\"string\" class=\"form-control input-estilo\" name=\"dataNasc\" id=\"inputDataNasc\" formControlName=\"dataNasc\" [(ngModel)]=\"dataNasc\" placeholder=\"dd/mm/aaaa\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['dataNasc'].touched && !form.controls['dataNasc'].valid\">Digite uma data válida</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputSenha\">Senha</label>\r\n                    <input type=\"password\" class=\"form-control input-estilo\" name=\"senha\" id=\"inputSenha\" formControlName=\"senha\"placeholder=\"Digite sua senha...\" [(ngModel)]=\"senha\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['senha'].touched && !form.controls['senha'].valid\">O campo é obrigatório</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"inputConfirmarSenha\">Confirmar Senha</label>\r\n                    <input type=\"password\" class=\"form-control input-estilo\" name=\"senha2\" id=\"inputConfirmarSenha\" formControlName=\"confirmaSenha\" placeholder=\"Confirme sua senha...\"  [(ngModel)]=\"confirmaSenha\">\r\n                    <label class=\"label-warning\" *ngIf=\"form.controls['confirmaSenha'].touched && form.controls.confirmaSenha.errors?.MatchPassword\">Informe a mesma senha</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top:10px;\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"cadastrar()\">Cadastar</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/criar-conta/criar-conta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarContaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_valida__ = __webpack_require__("./src/app/shared/valida.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_usuario_model__ = __webpack_require__("./src/app/shared/usuario.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CriarContaComponent = /** @class */ (function () {
    function CriarContaComponent(formBuilder, router, service) {
        this.router = router;
        this.service = service;
        this.form = formBuilder.group({
            nome: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/)
                ]],
            userid: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email
                ]],
            numeroCref: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(6)
                ]],
            digitoCref: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    this.selecionouAlgo
                ]],
            estadoCref: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    this.selecionouAlgo
                ]],
            telefone: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(11),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(11),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^(0|[1-9][0-9]*)$/)
                ]],
            dataNasc: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
                ]],
            senha: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
                ]],
            confirmaSenha: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
                ]]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_0__shared_valida__["a" /* Valida */].validaSenha
        });
    }
    CriarContaComponent.prototype.ngOnInit = function () {
    };
    CriarContaComponent.prototype.selecionouAlgo = function (input) {
        if (input.value !== 0) {
            return null;
        }
        else {
            return { erro: true };
        }
    };
    CriarContaComponent.prototype.cadastrar = function () {
        var _this = this;
        this.personal = new __WEBPACK_IMPORTED_MODULE_3__shared_usuario_model__["a" /* Usuario */];
        this.personal.nome = this.nome;
        this.personal.userid = this.userid;
        this.personal.email = this.email;
        this.personal.registroPersonal = this.numeroCref + '-' + this.digitoCref + '/' + this.estadoCref;
        this.personal.telefone = this.telefone;
        this.personal.dataNascimento = this.dataNasc;
        this.personal.password = this.senha;
        this.personal.typeUser = "personal";
        this.service.servico("POST", "/user", this.personal).subscribe(function (data) {
            console.log(_this.personal);
            alert('Conta criada com sucesso');
            _this.router.navigate(['/login']);
        }, function (error) {
            alert(error);
        });
    };
    CriarContaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-criar-conta',
            template: __webpack_require__("./src/app/criar-conta/criar-conta.component.html"),
            styles: [__webpack_require__("./src/app/criar-conta/criar-conta.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_usuario_model__["a" /* Usuario */], __WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__["a" /* ServerServices */]])
    ], CriarContaComponent);
    return CriarContaComponent;
}());



/***/ }),

/***/ "./src/app/formulario/editar-formulario/editar-formulario.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formulario/editar-formulario/editar-formulario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n<div class=\"container\" #editar></div>"

/***/ }),

/***/ "./src/app/formulario/editar-formulario/editar-formulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pergunta_mult_escolha_pergunta_mult_escolha_component__ = __webpack_require__("./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pergunta_radio_pergunta_radio_component__ = __webpack_require__("./src/app/formulario/pergunta-radio/pergunta-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pergunta_texto_pergunta_texto_component__ = __webpack_require__("./src/app/formulario/pergunta-texto/pergunta-texto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarFormularioComponent = /** @class */ (function () {
    function EditarFormularioComponent(service, resolver) {
        this.service = service;
        this.resolver = resolver;
        this.perguntaTexto = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__pergunta_texto_pergunta_texto_component__["a" /* PerguntaTextoComponent */]);
        this.perguntaRadio = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__pergunta_radio_pergunta_radio_component__["a" /* PerguntaRadioComponent */]);
        this.perguntaCheck = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__pergunta_mult_escolha_pergunta_mult_escolha_component__["a" /* PerguntaMultEscolhaComponent */]);
    }
    EditarFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.servico("GET", "/form", null).subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                if (element.tipo == "1") {
                    _this.controlador = _this.entry.createComponent(_this.perguntaTexto);
                    _this.controlador.instance.tituloPergunta == element.texto;
                }
                else if (element.tipo == "2") {
                    _this.controlador = _this.entry.createComponent(_this.perguntaRadio);
                    _this.percorreArray(element.pergunta);
                }
                else if (element.tipo == "3") {
                    _this.controlador = _this.entry.createComponent(_this.perguntaCheck);
                    console.log(element);
                    _this.percorreArray(element.pergunta);
                }
            });
        });
    };
    EditarFormularioComponent.prototype.percorreArray = function (subComp) {
        var _this = this;
        subComp.forEach(function (componente) {
            console.log(componente.valor);
            if (componente.id == 1) {
                _this.controlador.instance.componentes[0].valor = componente.valor;
            }
            else {
                console.log("ASDASD");
                _this.controlador.instance.adicionar();
                _this.controlador.instance.componentes[componente.id - 1].valor = componente.valor;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('editar', { read: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */])
    ], EditarFormularioComponent.prototype, "entry", void 0);
    EditarFormularioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-editar-formulario',
            template: __webpack_require__("./src/app/formulario/editar-formulario/editar-formulario.component.html"),
            styles: [__webpack_require__("./src/app/formulario/editar-formulario/editar-formulario.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ComponentFactoryResolver */]])
    ], EditarFormularioComponent);
    return EditarFormularioComponent;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n<div class=\"container text-center\" >\r\n    <div class=\"text-center  w-100\" #entrada>\r\n\r\n    </div>\r\n    <select name=\"asdasd\"  [(ngModel)]=\"selecao\">\r\n            <option *ngFor=\"let opt of opcao\" [selected]=\"opt.valor == 1\" name=\"Opcao\" [value]=\"opt.valor\">{{opt.tipo}}</option>\r\n        </select>\r\n        <button (click)=\"adicionar()\">Adicionar</button>\r\n        <button (click)=\"serializar()\">asda</button>\r\n</div>"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pergunta_mult_escolha_pergunta_mult_escolha_component__ = __webpack_require__("./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pergunta_radio_pergunta_radio_component__ = __webpack_require__("./src/app/formulario/pergunta-radio/pergunta-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pergunta_texto_pergunta_texto_component__ = __webpack_require__("./src/app/formulario/pergunta-texto/pergunta-texto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(resolver, servico) {
        this.resolver = resolver;
        this.servico = servico;
        this.referencias = { id: 1, tipo: 'String', referencia: 0 };
        this.componentes = [{ id: 0, tipo: 'asd', referencia: 0 }];
        this.contador = 0;
        this.filhoJ = [{}];
        this.opcao = [
            { 'valor': 1, 'tipo': 'Texto' },
            { 'valor': 2, 'tipo': 'Escolha' },
            { 'valor': 3, 'tipo': 'Multipla Escolha' }
        ];
    }
    FormularioComponent.prototype.adicionar = function () {
        var perguntaTexto = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__pergunta_texto_pergunta_texto_component__["a" /* PerguntaTextoComponent */]);
        var perguntaRadio = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__pergunta_radio_pergunta_radio_component__["a" /* PerguntaRadioComponent */]);
        var perguntaMultEscolha = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__pergunta_mult_escolha_pergunta_mult_escolha_component__["a" /* PerguntaMultEscolhaComponent */]);
        this.contador += 1;
        this.referencias.id = this.contador;
        console.log(this.selecao);
        if (this.selecao == 1) {
            this.componentes.push({ "id": this.contador,
                "tipo": "Texto", "referencia": this.entry.createComponent(perguntaTexto) });
            console.log(this.componentes);
        }
        else if (this.selecao == 2) {
            this.componentes.push({ "id": this.contador,
                "tipo": "Radio", "referencia": this.entry.createComponent(perguntaRadio) });
            console.log(this.componentes);
        }
        else if (this.selecao == 3) {
            this.componentes.push({ "id": this.contador,
                "tipo": "CheckBox", "referencia": this.entry.createComponent(perguntaMultEscolha) });
            console.log(this.componentes);
        }
        console.log(this.componentes);
    };
    FormularioComponent.prototype.serializar = function () {
        var _this = this;
        this.componentes.forEach(function (x) {
            if (x.tipo == "Texto") {
                _this.filhoJ.push({ "tipo": "1", "pergunta": x.referencia.instance.tituloPergunta });
            }
            else if (x.tipo == "Radio") {
                _this.filhoJ.push({ "tipo": "2", "pergunta": x.referencia.instance.radios });
            }
            else if (x.tipo == "CheckBox") {
                _this.filhoJ.push({ "tipo": "3", "pergunta": x.referencia.instance.check });
            }
        });
        console.log(this.filhoJ);
        this.servico.servico("POST", "/form", this.filhoJ).subscribe(function (data) {
        });
    };
    FormularioComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('entrada', { read: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */])
    ], FormularioComponent.prototype, "entry", void 0);
    FormularioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-formulario',
            template: __webpack_require__("./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__("./src/app/formulario/formulario.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]])
    ], FormularioComponent);
    return FormularioComponent;
}());



/***/ }),

/***/ "./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.css":
/***/ (function(module, exports) {

module.exports = "input{\r\n    max-width: 50%;\r\n    width: auto;\r\n}\r\n@media (max-width: 600px)\r\n{\r\n    input{\r\n        max-width: 100%;\r\n    }\r\n}\r\n.conteudo{\r\n    margin: auto;\r\n    padding: auto;\r\n    padding-top: 2%;\r\n    margin-bottom: 10px\r\n}\r\n.Texto {\r\n    background:rgba(0,0,0,0);\r\n    border-width: 1px;\r\n    border-style: none none solid none;\r\n\r\n\r\n    /*\r\n    border: none;\r\n    border-bottom: 2px, solid, black;\r\n    border-color:black */\r\n\r\n   }"

/***/ }),

/***/ "./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 mx-0 \" style=\"background: ghostwhite\">\r\n  <div class=\"col-12 text-center conteudo\">\r\n    <div>\r\n      <input placeholder=\"Insira a pergunta\" [(ngModel)]=\"tituloPergunta\" class=\"Texto\" style=\"width: 50%\">\r\n    </div>\r\n      <div class=\"conteudo col-auto text-center\" *ngFor=\"let lista of componentes\" [id]=\"lista.id\">\r\n        <input type=\"checkbox\" [id]=\"'Opcoes' + lista.id\" >\r\n        <input class=\"Texto\" [id]=\"'Texto' + lista.id\" [(ngModel)]=\"lista.valor\" placeholder=\"Insira a Opcao\">\r\n        <button (click)=\"deletar(lista.id)\" [id]=\"lista.id\">Deletar</button>\r\n      </div>\r\n    </div>\r\n  <br>\r\n  <div class=\"text-center col-12\">\r\n    <button (click)=\"adicionar()\" style=\"float:center\">Adicionar Opcao</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntaMultEscolhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerguntaMultEscolhaComponent = /** @class */ (function () {
    function PerguntaMultEscolhaComponent() {
        this.contador = 1;
        this.componentes = [{ "id": this.contador, "valor": "" }];
    }
    PerguntaMultEscolhaComponent.prototype.deletar = function (valorIndex) {
        console.log(valorIndex);
        var objeto = this.componentes.find(function (x) { return x.id == valorIndex; });
        console.log(this.componentes);
        console.log(objeto);
        this.componentes.splice(this.componentes.indexOf(objeto), 1);
    };
    PerguntaMultEscolhaComponent.prototype.ngOnInit = function () {
    };
    PerguntaMultEscolhaComponent.prototype.adicionar = function () {
        this.contador += 1;
        this.componentes.push({ "id": this.contador, "valor": "" });
    };
    PerguntaMultEscolhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pergunta-mult-escolha',
            template: __webpack_require__("./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.html"),
            styles: [__webpack_require__("./src/app/formulario/pergunta-mult-escolha/pergunta-mult-escolha.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerguntaMultEscolhaComponent);
    return PerguntaMultEscolhaComponent;
}());



/***/ }),

/***/ "./src/app/formulario/pergunta-radio/pergunta-radio.component.css":
/***/ (function(module, exports) {

module.exports = "input{\r\n    max-width: 50%;\r\n    width: auto;\r\n}\r\n@media (max-width: 600px)\r\n{\r\n    input{\r\n        max-width: 100%;\r\n    }\r\n}\r\n.conteudo{\r\n    margin: auto;\r\n    padding: auto;\r\n    padding-top: 2%;\r\n    margin-bottom: 10px\r\n}\r\n.Texto {\r\n    background:rgba(0,0,0,0);\r\n    border-width: 1px;\r\n    border-style: none none solid none;\r\n\r\n\r\n    /*\r\n    border: none;\r\n    border-bottom: 2px, solid, black;\r\n    border-color:black */\r\n\r\n   }"

/***/ }),

/***/ "./src/app/formulario/pergunta-radio/pergunta-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 mx-0\" style=\"background: ghostwhite\">\r\n  <div class=\"col-12 text-center conteudo\">\r\n    <div>\r\n      <input placeholder=\"Insira a Pergunta\" [(ngModel)]=\"tituloPergunta\" class=\"Texto\" style=\"width:50%\">\r\n    </div>\r\n    <div class=\"conteudo col-auto text-center\" *ngFor=\"let lista of componentes\" [id]=\"'Div'+lista\">\r\n      <input type=\"radio\"  name=\"radio\" [id]=\" 'Opcao'+ lista\" [value]=\"lista\" >\r\n      <input class=\"Texto\" [id]= \"'Opcao'+ lista\" [(ngModel)]=\"lista.valor\" placeholder=\"Insira a Opcao\">\r\n      <button (click)=\"deletar(lista.id)\" [id]=\"'Del'+ lista\">Deletar</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"text-center col-12\">\r\n      <button (click)=\"adicionar()\"  style=\"float:center\">Adicionar Opção</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/formulario/pergunta-radio/pergunta-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntaRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerguntaRadioComponent = /** @class */ (function () {
    function PerguntaRadioComponent() {
        this.contador = 1;
        this.componentes = [{ "id": 1, "valor": "" }];
    }
    PerguntaRadioComponent.prototype.ngOnInit = function () {
    };
    PerguntaRadioComponent.prototype.deletar = function (valorIndex) {
        var objeto = this.componentes.find(function (x) { return x.id == valorIndex; });
        this.componentes.splice(this.componentes.indexOf(objeto), 1);
    };
    PerguntaRadioComponent.prototype.adicionar = function () {
        this.contador += 1;
        this.componentes.push({ "id": this.contador, "valor": "" });
    };
    PerguntaRadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pergunta-radio',
            template: __webpack_require__("./src/app/formulario/pergunta-radio/pergunta-radio.component.html"),
            styles: [__webpack_require__("./src/app/formulario/pergunta-radio/pergunta-radio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerguntaRadioComponent);
    return PerguntaRadioComponent;
}());



/***/ }),

/***/ "./src/app/formulario/pergunta-texto/pergunta-texto.component.css":
/***/ (function(module, exports) {

module.exports = "input{\r\n    max-width: 50%;\r\n    width: auto;\r\n}\r\n@media (max-width: 600px)\r\n{\r\n    input{\r\n        max-width: 100%;\r\n    }\r\n}\r\n.Texto {\r\n    background:rgba(0,0,0,0);\r\n    border-width: 1px;\r\n    border-style: none none solid none;\r\n    width: 50%;\r\n    margin: auto\r\n   }\r\ntextarea{\r\n    resize: none;\r\n}\r\n.conteudo{\r\n    margin: auto;\r\n    padding: auto;\r\n    padding-top: 2%;\r\n    margin-bottom: 10px\r\n}\r\n"

/***/ }),

/***/ "./src/app/formulario/pergunta-texto/pergunta-texto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 mx-0 my-0\" style=\"background: ghostwhite; margin-bottom: 0\">\r\n    <div style=\"background: ghostwhite\" class=\"row text-center conteudo\">\r\n        <input class=\"Texto \" placeholder=\"Insira a Pergunta\" [(ngModel)]=\"tituloPergunta\" id=\"Pergunta\">\r\n    </div>\r\n    <div class=\"conteudo row text-center\" style=\"background: ghostwhite\">\r\n        <textarea class=\"Texto\" placeholder=\"Resposta do Aluno\" disabled id=\"Resposta\" rows=3 maxlength=\"250\"></textarea>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/formulario/pergunta-texto/pergunta-texto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntaTextoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerguntaTextoComponent = /** @class */ (function () {
    function PerguntaTextoComponent() {
    }
    PerguntaTextoComponent.prototype.ngOnInit = function () {
    };
    PerguntaTextoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pergunta-texto',
            template: __webpack_require__("./src/app/formulario/pergunta-texto/pergunta-texto.component.html"),
            styles: [__webpack_require__("./src/app/formulario/pergunta-texto/pergunta-texto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerguntaTextoComponent);
    return PerguntaTextoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/adicionar-aluno/adicionar-aluno.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/adicionar-aluno/adicionar-aluno.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\r\n    <h2>Adicione um aluno</h2>\r\n    <p>Adicione um aluno para cadastrar um ou mais treinos para ele!</p>\r\n</div>\r\n\r\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: ghostwhite;\">\r\n  <form class=\"form-group\" [formGroup]=\"form\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputNome\">Nome do Aluno</label>\r\n      <input type=\"text\" class=\"form-control input-estilo\" [(ngModel)]=\"nome\" formControlName=\"nome\" id=\"inputNome\" placeholder=\"Digite o nome...\">\r\n      <label class=\"label-obrigatorio\" *ngIf=\"form.controls['nome'].touched && !form.controls['nome'].valid\">Digite um nome válido</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"inputDataNasc\">Data de Nascimento</label>\r\n        <input type=\"string\" class=\"form-control input-estilo\" name=\"dataNasc\" id=\"inputDataNasc\" formControlName=\"dataNasc\" [(ngModel)]=\"dataNasc\" placeholder=\"dd/mm/aaaa\">\r\n        <label class=\"label-obrigatorio\" *ngIf=\"form.controls['dataNasc'].touched && !form.controls['dataNasc'].valid\">Digite uma data válida</label>    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmail\">E-mail</label>\r\n      <input type=\"email\" class=\"form-control input-estilo\" [(ngModel)]=\"email\" formControlName=\"email\"  id=\"inputEmail\" placeholder=\"Digite o e-mail...\">\r\n      <label class=\"label-obrigatorio\" *ngIf=\"form.controls['email'].touched && !form.controls['email'].valid\">Digite um email válido</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"inputTelefone\">Celular</label>\r\n        <input type=\"text\" class=\"form-control input-estilo\" name=\"telefone\" id=\"inputTelefone\" placeholder=\"Digite seu telefone...\" mask=\"99-99999-9999\" formControlName=\"telefone\" [(ngModel)]=\"telefone\">\r\n        <label class=\"label-obrigatorio\" *ngIf=\"form.controls['telefone'].touched && !form.controls['telefone'].valid\">Digite um telefone válido</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"cadastrar()\">Cadastrar</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/adicionar-aluno/adicionar-aluno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarAlunoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_aluno_model__ = __webpack_require__("./src/app/shared/aluno.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdicionarAlunoComponent = /** @class */ (function () {
    function AdicionarAlunoComponent(service, router, formBuilder) {
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.form = formBuilder.group({
            nome: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/)
                ]],
            dataNasc: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].email
                ]],
            telefone: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].maxLength(11),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].minLength(11),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(/^(0|[1-9][0-9]*)$/)
                ]],
        });
    }
    AdicionarAlunoComponent.prototype.ngOnInit = function () {
        console.log(window.localStorage.getItem('userid'));
    };
    AdicionarAlunoComponent.prototype.cadastrar = function () {
        var _this = this;
        this.aluno = new __WEBPACK_IMPORTED_MODULE_2__shared_aluno_model__["a" /* Aluno */];
        this.aluno.nome = this.nome;
        this.aluno.email = this.email;
        this.aluno.telefone = this.telefone;
        this.aluno.dataNascimento = this.dataNasc;
        this.aluno.personal = window.localStorage.getItem('userid');
        this.service.servico('POST', '/aluno', this.aluno).subscribe(function (data) {
            alert('Aluno cadastrado com sucesso');
            _this.router.navigate(['/meusAlunos']);
        }, function (error) {
            alert(error);
        });
    };
    AdicionarAlunoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-adicionar-aluno',
            template: __webpack_require__("./src/app/home-page/adicionar-aluno/adicionar-aluno.component.html"),
            styles: [__webpack_require__("./src/app/home-page/adicionar-aluno/adicionar-aluno.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], AdicionarAlunoComponent);
    return AdicionarAlunoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.css":
/***/ (function(module, exports) {

module.exports = ".fundo {\r\n    border:0px;\r\n    border-style:solid;\r\n    background-color:ghostwhite;\r\n    max-width: 100%;\r\n    border-radius: 10px;\r\n    margin-top: 30px;\r\n}\r\n.m-top{\r\n    margin-top: 5px;\r\n}\r\n@media (max-width: 600px) {\r\n    .fundo{\r\n        border:0px;\r\n        border-style:solid;\r\n        background-color:ghostwhite;\r\n        max-width: 100%;\r\n        margin-top: 30px;\r\n    }\r\n    input{\r\n        max-width: 100%;\r\n    }\r\n    .margin-do-label{\r\n        margin-top: 5%;\r\n    }\r\n    .margin-a{\r\n        padding-bottom: 5%;\r\n    }\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\n  <h2>Crie o seu próprio exercício</h2>\n</div>\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\n  <div class=\"row\">\n      <h4>Adicione seu exercício personalizado abaixo: </h4>\n  </div>\n</div>\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: ghostwhite;\">\n  <div class=\"fundo\">\n      <form class=\"form-group\" [formGroup]=\"form\">\n        <div class=\"col-auto\">\n            <label for=\"inputNome\">Nome do Exercício</label>\n            <input type=\"text\"  class=\"form-control input-estilo\" formControlName=\"nome\" placeholder=\"Coloque o nome....\" [(ngModel)]=\"nome\" >\n            <label class=\"label-obrigatorio\" *ngIf=\"form.controls['nome'].touched && !form.controls['nome'].valid\">Digite um nome válido</label>\n        </div>\n\n        <div class=\"col-auto\">\n          <label for=\"dropMembro\">Membro</label>\n          <select name=\"selectMembro\"  class=\"form-control input-estilo\" id=\"dropMembro\" formControlName=\"membro\" [(ngModel)]=\"selectMembro\" (change)=\"preencheMusculos($event.target.value)\" >\n            <option value=\"0\">Superior</option>\n            <option value=\"1\">Inferior</option>\n          </select>\n          <label class=\"label-obrigatorio\" *ngIf=\"form.controls['membro'].touched && !form.controls['membro'].valid\">O campo é obrigatório</label>\n        </div>\n\n        <div class=\"col-auto\">\n          <label for=\"dropMusculo\">Escolha o músculo</label>\n          <select name=\"selectMusculo\" id=\"dropMusculo\" class=\"form-control input-estilo\" formControlName=\"musculo\" [(ngModel)]=\"musculo\" (change)=\"pegaItem($event.target.value)\">\n            <option></option>\n            <option *ngFor=\"let item of musculos\">\n              {{item}}\n            </option>\n          </select>\n          <label class=\"label-obrigatorio\" *ngIf=\"form.controls['musculo'].touched && !form.controls['musculo'].valid\">O campo é obrigatório</label>\n        </div>\n        <div class=\"col-auto\">\n          <button type=\"submit\"  [disabled]=\"!form.valid\" (click)=\"enviar()\" class=\"btn btn-primary m-top\">Cadastrar</button>\n        </div>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarExercicioPersonalizadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_exercicio_model__ = __webpack_require__("./src/app/shared/exercicio.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastrarExercicioPersonalizadoComponent = /** @class */ (function () {
    function CadastrarExercicioPersonalizadoComponent(service, router, formBuilder) {
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.musculosSuperiores = ["Peito", "Bíceps", "Tríceps", "Ombro", "Costas", "Antebraço", "Abdomen"];
        this.musculosInferiores = ["Perna", "Gluteos", "Panturrilha"];
        this.form = formBuilder.group({
            nome: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/)
                ]],
            membro: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                ]],
            musculo: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                ]]
        });
    }
    CadastrarExercicioPersonalizadoComponent.prototype.ngOnInit = function () {
    };
    CadastrarExercicioPersonalizadoComponent.prototype.enviar = function () {
        this.exercicio.nome = this.nome;
        this.exercicio.musculo = this.musculo;
        console.log(this.exercicio);
        this.service.servico('POST', 'exercicios', this.exercicio).subscribe(function (res) {
            console.log('RESPOSTA ', res);
        }, function (error) {
            console.log('DEU RUIM ', error);
        });
    };
    // Preenche dinamicamente a dropdown do musculo
    CadastrarExercicioPersonalizadoComponent.prototype.preencheMusculos = function ($event) {
        this.exercicio = new __WEBPACK_IMPORTED_MODULE_0__shared_exercicio_model__["a" /* Exercicio */]();
        this.selectMembro = $event;
        if (this.selectMembro == 0) {
            this.exercicio.membro = "Superior";
            this.musculos = this.musculosSuperiores;
        }
        else {
            this.exercicio.membro = "Inferior";
            this.musculos = this.musculosInferiores;
        }
        console.log(this.exercicio.membro);
    };
    CadastrarExercicioPersonalizadoComponent.prototype.pegaItem = function ($event) {
        console.log(this.musculo);
    };
    CadastrarExercicioPersonalizadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-cadastrar-exercicio-personalizado',
            template: __webpack_require__("./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.html"),
            styles: [__webpack_require__("./src/app/home-page/cadastrar-exercicio-personalizado/cadastrar-exercicio-personalizado.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastrarExercicioPersonalizadoComponent);
    return CadastrarExercicioPersonalizadoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".alinhar{\r\n    display: block;\r\n    margin: auto\r\n}\r\n\r\n.cor-a{\r\n    color: lightseagreen\r\n}\r\n\r\nh2 {\r\n    color: limegreen\r\n}\r\n\r\n.x-body {\r\n    padding-top: 54px;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .x-body {\r\n      padding-top: 0;\r\n      padding-left: 17rem;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<!-- <a href=\"\">Voltar</a> -->\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\n    <h2>Bem vindo {{nomePersonal}}</h2>\n</div>\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\n    <h4>Não perca tempo! Adicione já seus alunos e monte treino para eles.</h4>\n    <!-- <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-primary\">Adicionar Aluno</button>\n            </div>\n            <div class=\"col-md-4\"></div>\n    </div>\n    <div class=\"row\">\n        <button class=\"btn btn-primary\">Ver Alunos</button>\n    </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_usuario_model__ = __webpack_require__("./src/app/shared/usuario.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.nomePersonal = window.localStorage.getItem('nomePersonal');
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.pegarNomePersonal();
        console.log(this.nomePersonal);
    };
    HomePageComponent.prototype.pegarNomePersonal = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_usuario_model__["a" /* Usuario */], __WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n\r\n <!-- Esse container da responsividade a side bar da tela -->\r\n <div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\r\n     <h2>Cadastrar Treino</h2>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"text-center mt-4\">\r\n    <div class=\"row\">\r\n        <label class=\"col-3 font-weight-bold \">Nome</label>\r\n        <input class=\"w-50 form-Control\">\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n        <Label class=\"col-3 font-weight-bold\">Duração (Semanas)</Label>\r\n        <input class=\"form-Control w-25\">\r\n    </div>\r\n    <button class=\"mt-4\" (click)=\"chamarExercicios\">Adicionar Exercícios</button>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarTreinoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CriarTreinoComponent = /** @class */ (function () {
    function CriarTreinoComponent() {
    }
    CriarTreinoComponent.prototype.ngOnInit = function () {
    };
    CriarTreinoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-criar-treino',
            template: __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.html"),
            styles: [__webpack_require__("./src/app/home-page/meus-alunos/criar-treino/criar-treino.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CriarTreinoComponent);
    return CriarTreinoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div [class.modal-backdrop]=\"mostraModal\" [class.show]=\"mostraModal\" ></div>\r\n<div id=\"modalOpcao\" class=\"modal modal-wide\" [class.show]=\"mostraModal\" [style.padding-right]=\"mostraModal? '17px' : '0px'\"\r\n  [style.display]=\"mostraModal? 'block' : 'none'\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lgg\">\r\n    <div class=\"modal-content col-12\">\r\n      <div class=\"modal-body \">\r\n            <div class=\"text-center\">\r\n                <div *ngFor=\"let ex of exercicios.exercicios\" >\r\n                  <div class=\"text-center row custom-control custom-checkbox\">\r\n                    <input  (change)=\"selecionado($event, ex)\" [id]='ex.nome' type=\"checkbox\"  class=\"d-inline col-2 custom-control-input\">\r\n                    <label class=\"col-7 custom-control-label\" [for]='ex.nome'>{{ex.nome}}</label>\r\n                  </div>\r\n                </div>\r\n              <button (click)=\"emitirLista()\">Adicionar Exercicios</button>\r\n            </div>\r\n        <div class=\"text-left divisao\">\r\n          <ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <input type=\"button\" class=\"mt-3 btn btn-primary botao col-sm-4\" (click)=\"amostra()\" value=\"Cancelar\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherExercicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscolherExercicioComponent = /** @class */ (function () {
    function EscolherExercicioComponent(service) {
        this.service = service;
        this.toggleModal = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.checkeds = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.selecionados = [];
        this.exercicios = [];
    }
    EscolherExercicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.servico("GET", "/exercicio/padroes", null).subscribe(function (data) {
            switch (_this.grupoMuscular) {
                case 1:
                    _this.exercicios = data.grupoMuscular.superior.Peito;
                    break;
                case 2:
                    _this.exercicios = data.grupoMuscular.superior.Costas;
                    break;
                case 3:
                    _this.exercicios = data.grupoMuscular.superior.Biceps;
                    break;
                case 4:
                    _this.exercicios = data.grupoMuscular.superior.Triceps;
                    break;
                case 5:
                    _this.exercicios = data.grupoMuscular.superior.Abdomen;
                    break;
                case 6:
                    _this.exercicios = data.grupoMuscular.superior.Antebraço;
                    break;
                case 7:
                    _this.exercicios = data.grupoMuscular.superior.Ombro;
                    break;
                case 8:
                    _this.exercicios = data.grupoMuscular.inferior.Perna;
                    break;
                case 9:
                    _this.exercicios = data.grupoMuscular.inferior.Gluteos;
                    break;
                case 10:
                    _this.exercicios = data.grupoMuscular.inferior.Panturrilha;
                    break;
            }
        });
    };
    EscolherExercicioComponent.prototype.emitirLista = function () {
        this.checkeds.emit(this.selecionados);
        this.toggleModal.emit(false);
    };
    EscolherExercicioComponent.prototype.amostra = function () {
        this.toggleModal.emit(false);
    };
    EscolherExercicioComponent.prototype.selecionado = function (e, valor) {
        console.log(e.target.checked);
        console.log(valor);
        if (e.target.checked) {
            this.selecionados.push(valor);
        }
        else {
            this.selecionados.splice(this.selecionados.indexOf(valor), 1);
        }
        console.log(this.selecionados[0]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EscolherExercicioComponent.prototype, "grupoMuscular", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EscolherExercicioComponent.prototype, "mostraModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])('toggleModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], EscolherExercicioComponent.prototype, "toggleModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])('checkeds'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], EscolherExercicioComponent.prototype, "checkeds", void 0);
    EscolherExercicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-escolher-exercicio',
            template: __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.html"),
            styles: [__webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-exercicio/escolher-exercicio.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]])
    ], EscolherExercicioComponent);
    return EscolherExercicioComponent;
}());



/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-membro/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var SlideInOutAnimation = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('in => out', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('700ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'visible'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '500px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.css":
/***/ (function(module, exports) {

module.exports = ".tamBotao{\r\n    width: 20%\r\n}\r\n\r\n\r\n/* The switch - the box around the slider */\r\n\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n\r\n.switch input {display:none;}\r\n\r\n\r\n/* The slider */\r\n\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: seagreen;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n\r\n\r\ninput:checked + .slider {\r\n    background-color: seagreen;\r\n  }\r\n\r\n\r\ninput:focus + .slider {\r\n    -webkit-box-shadow: 0 0 1px seagreen;\r\n            box-shadow: 0 0 1px seagreen;\r\n  }\r\n\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n\r\n <!-- Esse container da responsividade a side bar da tela -->\r\n <div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\r\n     <h2>Escolha o Membro</h2>\r\n</div>\r\n<div class=\"text-center mt-3\">\r\n    <label class=\"text-center w-100 d-inline align-top mr-3\">Superior</label>\r\n    <label class=\"switch\">\r\n        <input type=\"checkbox\" (click)=\"trocarGrupo()\">\r\n        <span class=\"slider round\"></span>\r\n    </label>\r\n    <label class=\"text-center w-100 d-inline align-top ml-3  \">Inferior</label>\r\n</div>\r\n<div class=\" mt-2 text-center\" [ngSwitch]=\"grupo\">\r\n    <div class=\" text-center\" *ngSwitchCase=\"true\" >\r\n        <h2>Musculos Superiores</h2>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(1)\">Peito</button>\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(2)\">Costas</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(3)\">Biceps</button>\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(4)\">Triceps</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(5)\">Abdomen</button>\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(6)\">Antebraço</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(7)\" >Ombro</button>\r\n        </div>\r\n    </div>\r\n    <div class=\" text-center\" *ngSwitchCase=\"false\">\r\n        <h2>Musculos Inferiores</h2>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(8)\">Perna</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(9)\">Gluteo</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <button class=\"tamBotao\" (click)=\"chamarExercicios(10)\">Panturrilha</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n<div class=\"text-center float-center h-100\">\r\n    <app-escolher-exercicio *ngIf=\"mostraModal\"  [grupoMuscular]=\"grupoMuscular\"\r\n    (toggleModal)=\"MostrarModal($event)\" [mostraModal]=\"mostraModal\" (checkeds)=\"novosExercicios($event)\"></app-escolher-exercicio>\r\n</div>\r\n</div>\r\n<div class=\"text-center mt-3\" >\r\n    <h4>Exercicios na lista</h4>\r\n    <div class=\"text-center  pt-2  mx-0\" style=\"background: ghostwhite\" *ngFor=\"let sel of selecionados\" >\r\n        <div class=\"row pt-2 col mx-0\">\r\n            <div class=\"text-center col\">\r\n            <label class=\"d-block \"> {{sel.exercicios.nome}}</label>\r\n            </div>\r\n                <div class=\"mb-3\">\r\n                    <div class=\"row h-50 d-block\">\r\n                        <div class=\"col d-inline\">\r\n                            <label class=\"\">Nº de Séries</label>\r\n                        </div>\r\n                        <div class=\"col d-inline\">\r\n                            <label class=\"\">Nº de Repetições</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row h-50 d-inline\">\r\n                        <div class=\"col  d-inline mb-3\">\r\n                            <input class=\"w-25 text-center\" [(ngModel)]=\"sel.exercicios.serie\" mask=\"999\" >\r\n                        </div>\r\n                        <div class=\"col d-inline\">\r\n                            <input class=\"w-25 text-center\" [(ngModel)]=\"sel.exercicios.repeticoes\" [id]=\"sel.id\" mask=\"999\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                    <button  (click)=\"animar(sel)\"  ></button>\r\n                </div>\r\n                <div></div>\r\n        <hr class=\"w-100 my-0\">\r\n\r\n        </div>\r\n        <div *ngIf=\"sel.buul  \">\r\n            <div     [@slideInOut]=\"sel.estado\" class=\"h-100\">\r\n                <label class=\"col\">Descrição de execução</label>\r\n                <textarea  [(ngModel)]=\"sel.descricao\" style=\"resize: none\" class=\"col w-50 my-3\"></textarea>\r\n                <hr class=\"w-100 my-0\">\r\n            </div>\r\n          </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherMembroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation__ = __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-membro/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscolherMembroComponent = /** @class */ (function () {
    function EscolherMembroComponent(service) {
        this.service = service;
        this.lista_musculos = [];
        this.grupo = true;
        this.mostraModal = false;
        this.selecionados = [];
        this.estadoAnimacao = 'out';
        this.contador = 0;
    }
    EscolherMembroComponent.prototype.MostrarModal = function (valor) {
        this.mostraModal = valor;
    };
    EscolherMembroComponent.prototype.animar = function (e) {
        var _this = this;
        if (e.estado === 'in') {
            this.selecionados[this.selecionados.indexOf(e)].estado = 'out';
            setTimeout(function () {
                _this.selecionados[_this.selecionados.indexOf(e)].buul = false;
            }, 1000);
        }
        else {
            this.selecionados[this.selecionados.indexOf(e)].buul = true;
            setTimeout(function () {
                _this.selecionados[_this.selecionados.indexOf(e)].estado = 'in';
            }, 50);
        }
    };
    EscolherMembroComponent.prototype.novosExercicios = function (e) {
        var _this = this;
        e.forEach(function (exerc) {
            _this.selecionados.push({ "exercicios": exerc, "buul": false, "estado": 'out', "id": _this.contador });
            _this.contador++;
        });
    };
    EscolherMembroComponent.prototype.chamarExercicios = function (grupo) {
        this.grupoMuscular = grupo;
        this.MostrarModal(true);
    };
    EscolherMembroComponent.prototype.trocarGrupo = function () {
        this.grupo = !this.grupo;
    };
    EscolherMembroComponent.prototype.ngOnInit = function () {
    };
    EscolherMembroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-escolher-membro',
            template: __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.html"),
            styles: [__webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-membro/escolher-membro.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__["a" /* ServerServices */]],
            animations: [__WEBPACK_IMPORTED_MODULE_0__animation__["a" /* SlideInOutAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_serverServices_service__["a" /* ServerServices */]])
    ], EscolherMembroComponent);
    return EscolherMembroComponent;
}());



/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n\n <!-- Esse container da responsividade a side bar da tela -->\n <div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\n</div>"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherMusculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EscolherMusculoComponent = /** @class */ (function () {
    function EscolherMusculoComponent() {
    }
    EscolherMusculoComponent.prototype.ngOnInit = function () {
    };
    EscolherMusculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-escolher-musculo',
            template: __webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.html"),
            styles: [__webpack_require__("./src/app/home-page/meus-alunos/criar-treino/escolher-musculo/escolher-musculo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EscolherMusculoComponent);
    return EscolherMusculoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/meus-alunos/meus-alunos.component.css":
/***/ (function(module, exports) {

module.exports = ".texto{\r\n    color: lightseagreen\r\n}"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/meus-alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\r\n    <h2>Meus Alunos</h2>\r\n    <div *ngIf=\"!temAlunos\" class=\"text-center\">\r\n        <div>Você não possui alunos cadastrados, gostaria de cadastrar um aluno?</div>\r\n        <label (click)=\"irParaCadastro()\" class=\"texto\"><u>Cadastrar um aluno</u></label>\r\n    </div>\r\n</div>\r\n\r\n    <div   class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" *ngFor=\"let aluno of alunos\" style=\"background: seagreen\">\r\n        <div class=\"row\">\r\n            <label>\r\n                {{ aluno.nome }}\r\n            </label>\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/home-page/meus-alunos/meus-alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusAlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeusAlunosComponent = /** @class */ (function () {
    function MeusAlunosComponent(service, router) {
        this.service = service;
        this.router = router;
        this.temAlunos = true;
    }
    MeusAlunosComponent.prototype.irParaCadastro = function () {
        this.router.navigate(['/addAluno']);
    };
    MeusAlunosComponent.prototype.ngOnInit = function () {
        this.getAlunos();
    };
    MeusAlunosComponent.prototype.getAlunos = function () {
        var _this = this;
        this.service.servico('GET', '/aluno', null).subscribe(function (res) {
            if (res[0] == null) {
                _this.temAlunos = false;
                console.log(_this.alunos);
            }
            _this.alunos = res;
        }),
            function (error) {
                console.log('deu ruim');
            };
    };
    MeusAlunosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-meus-alunos',
            template: __webpack_require__("./src/app/home-page/meus-alunos/meus-alunos.component.html"),
            styles: [__webpack_require__("./src/app/home-page/meus-alunos/meus-alunos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MeusAlunosComponent);
    return MeusAlunosComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = "h5, p {\r\n    text-align: center\r\n}\r\n\r\n.teste1 {\r\n    /* background-color: aquamarine; */\r\n    background: \"./assets/halteres.png\";\r\n}\r\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo-inicio></app-topo-inicio>\r\n\r\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\r\n    <h2>TraiNow</h2>\r\n    <h4>Treine. Trabalhe. Transforme.</h4>\r\n</div>\r\n<!-- \r\n<div class=\"col-auto\">\r\n        <img src=\"./assets/mulher.jpg\" style=\"max-width:100%\">\r\n</div> -->\r\n\r\n\r\n\r\n<div class=\"container d-flex flex-column\" >\r\n    <div class=\"row\" style=\"background: #177F7A\">\r\n            <div class=\"col-md-6 p-3 p-lg-5\">\r\n                    <!-- <div class=\"col-md-6\"> -->\r\n                        <h5>Largue o Papel de vez e valorize sua horas de trabalho</h5>\r\n                        <p>Pare de perder tempo escrevendo em fichas de treino, criando planilhas absurdas no Excel.</p>\r\n            </div>\r\n            <div class=\"col-md-6 p-0\">\r\n                    <img src=\"./assets/halteres.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n            </div>\r\n\r\n                \r\n    </div>\r\n</div>\r\n<div class=\"container d-flex flex-column\"style=\"background:ghostwhite\">\r\n        <div class=\"row\">\r\n                <div class=\"col-md-6 p-3 p-lg-5\">\r\n            <h5>Agilize os treinos dos seus alunos</h5>\r\n                <p>Crie sua prória anamnese.</p>\r\n                <p>Adicione seus exercícios.</p>\r\n        </div>\r\n        <div class=\"col-md-6 p-0\">\r\n                <img src=\"./assets/barra-ombro.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container d-flex flex-column\" style=\"background: #1C9992\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 p-3 p-lg-5\">\r\n            <h5>Cadastre-se agora e junte-se a nós!</h5>\r\n            <h5>Temos o melhor preço do mercado e o primeiro mês é grátis!</h5>\r\n        </div>\r\n        <div class=\"col-md-6 p-0\">\r\n                <img src=\"./assets/mulher.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n        </div>\r\n    </div>  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicio',
            template: __webpack_require__("./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__("./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/inicio/quemsomos/quemsomos.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/inicio/quemsomos/quemsomos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo-inicio></app-topo-inicio>\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\n        <h2>Quem somos</h2>\n</div>\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\n    <p class=\".text-justify\">Lançada no ano de 2018, e iniciando suas atividades no estado de São Paulo,\n    a plataforma TraiNow foi fundada por 5 estudantes de tecnologia, que viram no mercado de educação física\n    (mais voltado para o ramo de academias) uma oportunidade de investir em novas ferramentas que auxiliam e facilitam a vida\n    dos profissionais que atuam nesse ramo. </p>\n    <p>\n    O TraiNow hoje conta uma estrutura sólida e uma equipe de primeira,\n    que ouve e atende as demandas dos usuários, e que trabalha constantemente para que a plataforma seja melhorada sempre\n    visando a facilidade e a produtividade no dia-a-dia dos usuários.</p>\n</div>\n\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: lightgreen\">\n    <div class=\"row\">\n        <h2>Nossa equipe</h2>\n    </div>\n</div>\n\n\n<div class=\"container resume-section\" style=\"background:lightgreen\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"../../assets/diogo.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Diogo</h5>\n                    <p class=\"card-text\">Possui o dom de imitar o grito do tom</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"../../assets/diego.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Diego</h5>\n                    <p class=\"card-text\">Responsável pelo marketing e financeiro</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"../../assets/giovanni.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Giovanni</h5>\n                    <p class=\"card-text\">Responsável pelo back-end</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"../../assets/pacheco.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Gustavo</h5>\n                    <p class=\"card-text\">Resposável pelo front-end</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=\"../../assets/farias.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Lucas</h5>\n                        <p class=\"card-text\">Reposável pelo front-end e negócios</p>\n                    </div>\n                </div>\n            </div>\n        <div class=\"col-sm-6\"></div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/inicio/quemsomos/quemsomos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuemsomosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuemsomosComponent = /** @class */ (function () {
    function QuemsomosComponent() {
    }
    QuemsomosComponent.prototype.ngOnInit = function () {
    };
    QuemsomosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quemsomos',
            template: __webpack_require__("./src/app/inicio/quemsomos/quemsomos.component.html"),
            styles: [__webpack_require__("./src/app/inicio/quemsomos/quemsomos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuemsomosComponent);
    return QuemsomosComponent;
}());



/***/ }),

/***/ "./src/app/inicio/saibamais/saibamais.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/saibamais/saibamais.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo-inicio></app-topo-inicio>\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\" style=\"background: white\">\n    <h2>Saiba mais</h2>\n</div>\n\n<div class=\"container resume-section p-3 p-lg-5 d-flex flex-column\">\n    <p>\n        Lorem ipsum aenean dapibus facilisis per volutpat, iaculis scelerisque rhoncus vitae scelerisque tincidunt, lacinia lorem nam sodales etiam. viverra est lacus rutrum vulputate fermentum sodales bibendum enim, posuere platea libero curabitur metus aliquet pretium vestibulum, nunc odio semper lectus lacus eu ut. odio libero rhoncus purus placerat sociosqu proin placerat condimentum, orci conubia ut consectetur pharetra euismod tortor, aliquet tristique viverra augue lacinia platea aenean. ut aptent suscipit duis aenean porttitor viverra nam hendrerit, ornare porttitor id eleifend ipsum sociosqu ornare praesent, semper nisi donec volutpat diam placerat inceptos. quam erat cras interdum ullamcorper adipiscing lacus venenatis ut volutpat sagittis tristique, placerat congue lacus eros proin semper tellus senectus convallis molestie malesuada, felis nibh inceptos lacus feugiat vitae cursus neque turpis sagittis.\n    </p>\n    <p>\n        Ante non laoreet enim sagittis libero ornare sed mollis tincidunt, rhoncus pretium duis ultrices dictum maecenas eu curabitur vehicula netus, vitae feugiat pellentesque elementum orci semper placerat porta. convallis molestie tristique accumsan lectus orci imperdiet eget suscipit euismod faucibus donec, curabitur dictum luctus duis potenti diam porta in phasellus. cras malesuada augue pharetra sociosqu varius aliquam lorem eu convallis vel, porttitor dictumst auctor vestibulum aptent nisi primis justo scelerisque, hac sit magna rhoncus diam vulputate blandit hac integer.\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/inicio/saibamais/saibamais.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaibamaisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaibamaisComponent = /** @class */ (function () {
    function SaibamaisComponent() {
    }
    SaibamaisComponent.prototype.ngOnInit = function () {
    };
    SaibamaisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saibamais',
            template: __webpack_require__("./src/app/inicio/saibamais/saibamais.component.html"),
            styles: [__webpack_require__("./src/app/inicio/saibamais/saibamais.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaibamaisComponent);
    return SaibamaisComponent;
}());



/***/ }),

/***/ "./src/app/inicio/topo-inicio/topo-inicio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/topo-inicio/topo-inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"\">\r\n      <span class=\"d-none d-lg-block\">\r\n        <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"../../assets/biceps.png\" alt=\"\">\r\n      </span>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link js-scroll-trigger\" routerLink=\"\">Página Inicial</a>\r\n            </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/quemsomos\">Quem Somos</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/saibamais\">Saiba Mais</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/criarConta\">Criar Conta</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/inicio/topo-inicio/topo-inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoInicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopoInicioComponent = /** @class */ (function () {
    function TopoInicioComponent() {
    }
    TopoInicioComponent.prototype.ngOnInit = function () {
    };
    TopoInicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topo-inicio',
            template: __webpack_require__("./src/app/inicio/topo-inicio/topo-inicio.component.html"),
            styles: [__webpack_require__("./src/app/inicio/topo-inicio/topo-inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopoInicioComponent);
    return TopoInicioComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".principal{\r\n    height: 100%;\r\n    border-style: solid\r\n}\r\n\r\n.m-top{\r\n    margin-top: 5px;\r\n}\r\n\r\n.autenticacao{\r\n    margin: 3% 3% 3% 3%\r\n}\r\n\r\n.label-obrigatorio{\r\n    display: block;\r\n    margin: auto;\r\n    color: red;\r\n}\r\n\r\n.label-warning{\r\n    display: inline;\r\n    margin: auto;\r\n    color: red;\r\n}\r\n\r\n.div-autentica{\r\n    margin-top: 0;\r\n}\r\n\r\n.botao{\r\n    margin-left:  3%;\r\n    margin-top: 3%;\r\n}\r\n\r\n.alinhar{\r\n    display: block;\r\n    margin: auto\r\n}\r\n\r\n.fotinho {\r\n    max-width:200px;\r\n    max-height:150px;\r\n    width: auto;\r\n    height: auto;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.rodape {\r\n    margin: auto;\r\n    width: 100%;\r\n    bottom: 2%;\r\n    position: fixed;\r\n}\r\n\r\n.fundoTelaLogin{\r\n    border:0px;\r\n    border-style:solid;\r\n    background-color:ghostwhite;\r\n    max-width: 50%;\r\n    border-radius: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput{\r\n    max-width: 100%;\r\n}\r\n\r\n.margin-do-label{\r\n    margin-top: 2%;\r\n}\r\n\r\n.margin-a{\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.estilo-a{\r\n    color: #040f1b;\r\n}\r\n\r\n.input-estilo{\r\n    max-width: 100%;\r\n    background: rgb(0, 0,0,0);\r\n    border-style: none none solid none;\r\n}\r\n\r\n@media (max-width: 600px)\r\n{\r\n    .fundoTelaLogin{\r\n        border:0px;\r\n        border-style:solid;\r\n        background-color:ghostwhite;\r\n        max-width: 90%;\r\n        margin-top: 30px;\r\n    }\r\n    input{\r\n        max-width: 100%;\r\n    }\r\n    .margin-do-label{\r\n        margin-top: 5%;\r\n    }\r\n    .margin-a{\r\n        padding-bottom: 5%;\r\n    }\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo-inicio></app-topo-inicio>\r\n<img class=\"fotinho\" src=\"../../assets/biceps.png\" alt=\"\">\r\n<div class=\"main-content\">\r\n  <div class=\"container m-top fundoTelaLogin\">\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"col-auto\">\r\n        <label for=\"inputEmail\" class=\"margin-do-label\">E-mail</label>\r\n        <input type=\"email\" class=\"form-control input-estilo\" id=\"email\" placeholder=\"Digite seu email...\" formControlName=\"email\" [(ngModel)]=\"email\">\r\n        <label class=\"label-warning\" *ngIf=\"form.controls['email'].touched && !form.controls['email'].valid\">Digite um e-mail válido</label>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <label for=\"inputSenha\">Senha</label>\r\n        <input type=\"password\" class=\"form-control input-estilo\" [(ngModel)]=\"password\" formControlName=\"password\"  id=\"password\" placeholder=\"Digite sua senha...\">\r\n        <label class=\"label-warning\" *ngIf=\"form.controls['password'].touched && !form.controls['password'].valid\">O campo senha é obrigatório</label>\r\n      </div>\r\n      <div class=\"col-auto margin-do-label\">\r\n          <button type=\"submit\"  [disabled]=\"!form.valid\" class=\"btn btn-primary\" (click)=\"logar()\">Entrar</button>\r\n      </div>\r\n  </form>\r\n    <div class=\"col-auto margin-a\">\r\n        <a class=\"estilo-a\" routerLink=\"/criarConta\">Criar Conta</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_usuario_model__ = __webpack_require__("./src/app/shared/usuario.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Usuario } from '../shared/usuario.model';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, usuario, servico) {
        this.router = router;
        this.usuario = usuario;
        this.servico = servico;
        this.form = formBuilder.group({
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].email
                ]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.localStorage.clear();
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        this.usuario.email = this.email;
        this.usuario.password = this.password;
        this.servico.servico("POST", "/user/login", this.usuario).subscribe(function (data) {
            var a = window.localStorage.setItem('nomePersonal', data.nome);
            var b = window.localStorage.setItem('userid', data.userid);
            _this.router.navigate(['/home']);
        }, function (error) {
            alert("ATENÇÃO: " + error.mensagem);
        });
    };
    LoginComponent.prototype.criarConta = function () {
        this.router.navigate(['/criarConta']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_usuario_model__["a" /* Usuario */], __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__shared_usuario_model__["a" /* Usuario */], __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/aluno.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aluno; });
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    return Aluno;
}());



/***/ }),

/***/ "./src/app/shared/exercicio.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercicio; });
var Exercicio = /** @class */ (function () {
    function Exercicio() {
    }
    return Exercicio;
}());



/***/ }),

/***/ "./src/app/shared/serverServices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Usuario } from './usuario.model';





var ServerServices = /** @class */ (function () {
    function ServerServices(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].enderecoBaseApi;
    }
    ServerServices.prototype.servico = function (method, caminho, params) {
        // this.url = 'http://localhost:3000'
        // this.url = 'http://trainow-api.herokuapp.com'
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append('Content-type', 'application/json');
        header.append('x-auth', localStorage.getItem('x-auth'));
        this.url += caminho;
        var response = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            switch (method) {
                case 'GET':
                    if (params != null) {
                        _this.concatenarUrl(params);
                    }
                    return _this.http.get(_this.url, { headers: header }).subscribe(function (res) {
                        if (res._body == "") {
                            observer.next(_this.trataRetornoSucesso(res));
                        }
                        else {
                            observer.next(_this.trataRetornoSucesso(res.json()));
                        }
                    }, function (error) {
                        console.log('AQUI É PRA DAR RUIM');
                        observer.error(_this.trataRetornoErro(error));
                    });
                case 'POST':
                    JSON.stringify(params);
                    console.log(_this.http);
                    return _this.http.post(_this.url, params, { headers: header }).subscribe(function (res) {
                        if (caminho == "/user/login") {
                            window.localStorage.setItem('x-auth', res.headers.get('x-auth'));
                        }
                        observer.next(_this.trataRetornoSucesso(res.json()));
                    }, function (error) {
                        observer.error(_this.trataRetornoErro(error));
                    });
                case 'PUT':
                    JSON.stringify(params);
                    return _this.http.put(_this.url, params, { headers: header }).subscribe(function (res) {
                        observer.next(_this.trataRetornoSucesso(res));
                    }, function (error) {
                        observer.error(_this.trataRetornoErro(error));
                    });
                case 'DELETE':
                    JSON.stringify(params);
                    return _this.http.delete(_this.url + "/" + params.id, { headers: header }).subscribe(function (res) {
                        observer.next(_this.trataRetornoSucesso(res));
                    }, function (error) {
                        observer.error(_this.trataRetornoErro(error));
                    });
            }
        });
        return response;
    };
    ServerServices.prototype.trataRetornoSucesso = function (response) {
        if (response) {
            console.log('Log do trata retorno sucesso ', response);
            return response;
        }
        return null;
    };
    ServerServices.prototype.trataRetornoErro = function (erro) {
        try {
            var error = JSON.parse(erro._body);
            var returnMessage = null;
            if (error !== null) {
                returnMessage = error;
            }
            return returnMessage;
        }
        catch (e) {
            return "Ocorreu um Erro Inesperado";
        }
    };
    ServerServices.prototype.concatenarUrl = function (params) {
        this.url += "?";
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            if (Object.keys(params)[0] == key) {
                this.url += key.toString();
                this.url += "=" + params[key];
            }
            else {
                this.url += "&" + key.toString();
                this.url += "=" + params[key];
            }
        }
    };
    ServerServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ServerServices);
    return ServerServices;
}());



/***/ }),

/***/ "./src/app/shared/usuario.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/shared/valida.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Valida; });
var Valida = /** @class */ (function () {
    function Valida(service) {
        this.service = service;
    }
    Valida.validaSenha = function (AC) {
        var senha = AC.get('senha').value;
        var confirmaSenha = AC.get('confirmaSenha').value;
        if (senha !== confirmaSenha) {
            AC.get('confirmaSenha').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return Valida;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\r\n  <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/home\">\r\n    <span class=\"d-none d-lg-block\">\r\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"../../assets/biceps.png\" alt=\"\">\r\n    </span>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\"  routerLink=\"/home\">Tela Inicial</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\"  routerLink=\"/meusAlunos\">Meus Alunos</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/addAluno\">Adicionar Aluno</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" routerLink=\"/meusAlunos\">Configurações(TODO)</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link js-scroll-trigger\" (click)=\"logout()\" href=\"\">Sair</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__ = __webpack_require__("./src/app/shared/serverServices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopoComponent = /** @class */ (function () {
    function TopoComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    TopoComponent.prototype.ngOnInit = function () {
    };
    TopoComponent.prototype.logout = function () {
        var _this = this;
        window.localStorage.clear();
        this.service.servico('DELETE', 'me/logout', null).subscribe(function (res) {
            console.log('RESPOSTA DO LOGOUT', res);
            _this.router.navigate(['']);
        }, function (error) {
            console.log('DEU RUIM NO LOGOUT', error);
        });
    };
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("./src/app/topo/topo.component.html"),
            styles: [__webpack_require__("./src/app/topo/topo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_serverServices_service__["a" /* ServerServices */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    enderecoBaseApi: 'https://trainow-api.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map