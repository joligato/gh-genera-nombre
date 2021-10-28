(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documento-child-routing-module"],{

/***/ "qBhN":
/*!*************************************************************!*\
  !*** ./src/app/documento/documento-child-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentoChildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoChildRoutingModule", function() { return DocumentoChildRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certificado_certificado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificado/certificado.component */ "k/4U");
/* harmony import */ var _enviar_enviar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enviar/enviar.component */ "Klkw");
/* harmony import */ var _excel_excel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./excel/excel.component */ "+jeY");







const routes = [
    { path: '', redirectTo: 'ver' },
    { path: 'ver', component: _certificado_certificado_component__WEBPACK_IMPORTED_MODULE_2__["CertificadoComponent"] },
    { path: 'enviar', component: _enviar_enviar_component__WEBPACK_IMPORTED_MODULE_3__["EnviarComponent"] },
    { path: 'excel', component: _excel_excel_component__WEBPACK_IMPORTED_MODULE_4__["ExcelComponent"] },
];
class DocumentoChildRoutingModule {
}
DocumentoChildRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DocumentoChildRoutingModule });
DocumentoChildRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DocumentoChildRoutingModule_Factory(t) { return new (t || DocumentoChildRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentoChildRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentoChildRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=documento-child-routing-module.js.map