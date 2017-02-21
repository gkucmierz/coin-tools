webpackJsonp([1,4],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toolbarReducer; });
var SET_TITLE = 'SET_TITLE';
var INITIAL_STATE = {
    title: 'Coin Tools'
};
var toolbarReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case (SET_TITLE):
            return Object.assign({}, state, {
                title: action.payload
            });
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/toolbarReducer.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qrReaderReducer; });
var ADD_ITEM = 'ADD_ITEM';
var CLEAN = 'CLEAN';
var INITIAL_STATE = {
    items: []
};
var qrReaderReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case (ADD_ITEM):
            return Object.assign({}, state, {
                items: [action.payload].concat(state.items)
            });
        case (CLEAN):
            return Object.assign({}, state, {
                items: []
            });
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/qrReaderReducer.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http, slimLoadingBarService) {
        this.http = http;
        this.slimLoadingBarService = slimLoadingBarService;
        this.corsProxyEndpoint = 'https://free-cors-proxy.herokuapp.com/';
    }
    DataService.prototype.get = function (url, opts) {
        if (opts === void 0) { opts = {}; }
        if (opts.corsProxy)
            url = this.proxyUrl(url);
        this.slimLoadingBarService.start();
        return this.http.get(url)
            .map(this.extractData.bind(this))
            .catch(this.handleError);
    };
    DataService.prototype.post = function (url, data, opts) {
        if (data === void 0) { data = {}; }
        if (opts === void 0) { opts = {}; }
        if (opts.corsProxy)
            url = this.proxyUrl(url);
        return this.http.post(url, data, null)
            .map(this.extractData.bind(this))
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        this.slimLoadingBarService.complete();
        try {
            return res.json();
        }
        catch (e) {
            return {};
        }
    };
    DataService.prototype.handleError = function (error) {
        console.log(this.slimLoadingBarService);
        this.slimLoadingBarService.complete();
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DataService.prototype.proxyUrl = function (url) {
        return "" + this.corsProxyEndpoint + encodeURIComponent(url);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === 'function' && _b) || Object])
    ], DataService);
    return DataService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/data.service.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/environment.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 509;


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(675);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/main.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.tools = [
            {
                route: 'sign-message',
                name: 'Sign Message'
            },
            {
                route: 'check-signature',
                name: 'Check Signature'
            },
            {
                route: 'ecies',
                name: 'ECIES'
            },
            {
                route: 'send-from-privkey',
                name: 'Send from Privkey'
            },
            {
                route: 'qr-reader',
                name: 'QR Reader'
            },
            {
                route: 'vanity-address',
                name: 'Vanity Address'
            }
        ];
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Coin Tools' });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('toolbar').subscribe(function (store) {
            _this.title = store['title'];
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(854),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/app.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_core_compose__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngrx_store_freeze__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reducers_qrReaderReducer__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sign_message_sign_message_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__check_signature_check_signature_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ecies_ecies_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ecies_ecies_encrypt_ecies_encrypt_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ecies_ecies_decrypt_ecies_decrypt_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__send_from_privkey_send_from_privkey_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__qr_reader_qr_reader_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vanity_address_vanity_address_component__ = __webpack_require__(685);
/* unused harmony export appReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var reducers = {
    toolbar: __WEBPACK_IMPORTED_MODULE_15__reducers_toolbarReducer__["a" /* toolbarReducer */],
    qrReader: __WEBPACK_IMPORTED_MODULE_16__reducers_qrReaderReducer__["a" /* qrReaderReducer */]
};
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_14_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["a" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__ngrx_store__["a" /* combineReducers */])(reducers);
var INITIAL_APPLICATION_STATE = {};
function appReducer(state, action) {
    if (state === void 0) { state = INITIAL_APPLICATION_STATE; }
    if (__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
var routeConfig = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'sign-message',
        component: __WEBPACK_IMPORTED_MODULE_19__sign_message_sign_message_component__["a" /* SignMessageComponent */]
    },
    {
        path: 'check-signature',
        component: __WEBPACK_IMPORTED_MODULE_20__check_signature_check_signature_component__["a" /* CheckSignatureComponent */]
    },
    {
        path: 'ecies',
        component: __WEBPACK_IMPORTED_MODULE_21__ecies_ecies_component__["a" /* EciesComponent */],
        children: [
            { path: '', redirectTo: 'encrypt', pathMatch: 'full' },
            { path: 'encrypt', component: __WEBPACK_IMPORTED_MODULE_22__ecies_ecies_encrypt_ecies_encrypt_component__["a" /* EciesEncryptComponent */] },
            { path: 'decrypt', component: __WEBPACK_IMPORTED_MODULE_23__ecies_ecies_decrypt_ecies_decrypt_component__["a" /* EciesDecryptComponent */] }
        ]
    },
    {
        path: 'send-from-privkey',
        component: __WEBPACK_IMPORTED_MODULE_24__send_from_privkey_send_from_privkey_component__["a" /* SendFromPrivkeyComponent */]
    },
    {
        path: 'qr-reader',
        component: __WEBPACK_IMPORTED_MODULE_25__qr_reader_qr_reader_component__["a" /* QrReaderComponent */]
    },
    {
        path: 'vanity-address',
        component: __WEBPACK_IMPORTED_MODULE_26__vanity_address_vanity_address_component__["a" /* VanityAddressComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sign_message_sign_message_component__["a" /* SignMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__check_signature_check_signature_component__["a" /* CheckSignatureComponent */],
                __WEBPACK_IMPORTED_MODULE_21__ecies_ecies_component__["a" /* EciesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__ecies_ecies_encrypt_ecies_encrypt_component__["a" /* EciesEncryptComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ecies_ecies_decrypt_ecies_decrypt_component__["a" /* EciesDecryptComponent */],
                __WEBPACK_IMPORTED_MODULE_24__send_from_privkey_send_from_privkey_component__["a" /* SendFromPrivkeyComponent */],
                __WEBPACK_IMPORTED_MODULE_25__qr_reader_qr_reader_component__["a" /* QrReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__vanity_address_vanity_address_component__["a" /* VanityAddressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routeConfig),
                __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["b" /* StoreModule */].provideStore(appReducer)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_bitcore_service__["a" /* BitcoreService */],
                __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/app.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckSignatureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckSignatureComponent = (function () {
    function CheckSignatureComponent(bitcore, store) {
        this.bitcore = bitcore;
        this.store = store;
        this.signedMsg = "-----BEGIN BITCOIN SIGNED MESSAGE-----\nSignature test\n-----BEGIN SIGNATURE-----\n1AStMhq3k957K3dVtGv5WPVXbUWdHacX7k\nIPPSaoJkUyCpAVFLctuyDd2VF+0rfOCuoteOMF6xQtrBV5zJTXYqNt9/cSYahIGntL5ibZgS+tp6Jp/QUMxlrIA=\n-----END BITCOIN SIGNED MESSAGE-----";
        this.valid = true;
    }
    CheckSignatureComponent.prototype.change = function () {
        var Message = this.bitcore.message;
        var parts = (this.signedMsg + '').split(/\-{5}[\w\s]+\-{5}/i);
        if (parts.length === 4) {
            var msg = parts[1];
            var _a = parts[2].split(/\n/), nil = _a[0], addr = _a[1], sig = _a[2];
            try {
                this.valid = new Message(msg.trim()).verify(addr, sig);
            }
            catch (e) {
                this.valid = false;
            }
        }
        else {
            this.valid = false;
        }
    };
    CheckSignatureComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Check Signature' });
    };
    CheckSignatureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-check-signature',
            template: __webpack_require__(855),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */]) === 'function' && _b) || Object])
    ], CheckSignatureComponent);
    return CheckSignatureComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/check-signature.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EciesDecryptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var base64 = __webpack_require__(452);
var EciesDecryptComponent = (function () {
    function EciesDecryptComponent(bitcore, store) {
        this.bitcore = bitcore;
        this.store = store;
        this.encryptedMsg = "A06fJAU2G2iejL+89LIVOfYNKQMaIBgRJ3b96QxBhpDY+MaXsOPuZgnIjksj7WfhLIlbTExswwQVP9Je82+ai/SAr8VosOEBi7cn/TQsu5bKmKBljS8wJ9ZGqZXI9/bncY/fSGKjn1iNXYPTpbXr37/jSvyHnbTC1NaIfruqC9+HUxn14yG3c6dDmPL2hO13L2xtV8X2vwGk/2RdbyMlWXiaeRVKs7sJWJE7sBgOvXv64ZUqSI0kMYNO8lS8hMSCbYMdjdfuLoq/qHqS3NBbc1HKv3s0sNonaowFcJ3p3kLKCSH1K65fIl5/ulWwJC3Loax2yqaV70SoZEvzWQqSaRkXqFU2Yylex3DoYMGpcOcg39KXU6q5nqb3xYR4Yr9W6Nd/QUMUf/11W1o+bZELqdvjORvwzTxm5YEyn4n8FbBR9S9Q5eG74eWVXbF44M1Q0zWgEDHsupUL8gllHlO2/y8x5/P3BaLltf+Q4B3cFzPK";
        this.recipientPriv = 'L49Xk4WCeYFeMBBzsa9B4sdWANTi5eRA9JCEq8gZjCn19xqjrzYP';
        // KwSfvc92pxP9KMEMBNSn2YHuV8GV5XsRp8mah1mcnmWz33sdYGvU
        this.senderPub = '034e9f2405361b689e8cbfbcf4b21539f60d29031a2018112776fde90c418690d8';
    }
    EciesDecryptComponent.prototype.update = function () {
        var _a = this.bitcore.lib, PrivateKey = _a.PrivateKey, PublicKey = _a.PublicKey;
        var ECIES = this.bitcore.ecies;
        var Message = this.bitcore.message;
        try {
            var msgBuff = base64.toByteArray(this.encryptedMsg.trim());
            var privkey = PrivateKey.fromString(this.recipientPriv);
            var pubkey = new PublicKey(this.senderPub);
            var Buffer = ECIES().privateKey(privkey).publicKey(pubkey).encrypt('').constructor;
            var recipient = ECIES()
                .privateKey(privkey)
                .publicKey(pubkey);
            this.msg = recipient.decrypt(new Buffer(msgBuff)).toString();
        }
        catch (e) {
            this.msg = '';
            console.error(e);
        }
        ;
    };
    EciesDecryptComponent.prototype.reset = function () {
        this.encryptedMsg = '';
        this.recipientPriv = '';
        this.senderPub = '';
        this.update();
    };
    EciesDecryptComponent.prototype.ngOnInit = function () {
        this.update();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Decrypt Message' });
    };
    EciesDecryptComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-ecies-decrypt',
            template: __webpack_require__(856),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */]) === 'function' && _b) || Object])
    ], EciesDecryptComponent);
    return EciesDecryptComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/ecies-decrypt.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EciesEncryptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var base64 = __webpack_require__(452);
var EciesEncryptComponent = (function () {
    function EciesEncryptComponent(bitcore, store) {
        this.bitcore = bitcore;
        this.store = store;
        this.msg = "\nThis tool allows you to encrypt any message using your bitcoin private key for specified recipient using his bitcoin public key.\nThen only your recipient can decrypt this message and also he can be sure that this message was created by you (owner of encryption private key).\n  ";
        this.senderPriv = 'KwSfvc92pxP9KMEMBNSn2YHuV8GV5XsRp8mah1mcnmWz33sdYGvU';
        // L49Xk4WCeYFeMBBzsa9B4sdWANTi5eRA9JCEq8gZjCn19xqjrzYP
        this.recipientPubkey = '027570f6a541a5af6f84d32665f1747f9740b132aa5a7f2728b76b5b0513ba7695';
    }
    EciesEncryptComponent.prototype.update = function () {
        var _a = this.bitcore.lib, PrivateKey = _a.PrivateKey, PublicKey = _a.PublicKey;
        var ECIES = this.bitcore.ecies;
        try {
            var privkey = PrivateKey.fromString(this.senderPriv);
            var pubkey = new PublicKey(this.recipientPubkey);
            var sender = ECIES()
                .privateKey(privkey)
                .publicKey(pubkey);
            this.encryptedMsg = base64.fromByteArray(sender.encrypt(this.msg || ''));
        }
        catch (e) {
            this.encryptedMsg = '';
            console.error(e);
        }
        ;
    };
    EciesEncryptComponent.prototype.reset = function () {
        this.msg = '';
        this.senderPriv = '';
        this.recipientPubkey = '';
        this.update();
    };
    EciesEncryptComponent.prototype.ngOnInit = function () {
        this.update();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Encrypt Message' });
    };
    EciesEncryptComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-ecies-encrypt',
            template: __webpack_require__(857),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */]) === 'function' && _b) || Object])
    ], EciesEncryptComponent);
    return EciesEncryptComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/ecies-encrypt.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EciesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EciesComponent = (function () {
    function EciesComponent() {
    }
    EciesComponent.prototype.ngOnInit = function () {
    };
    EciesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-ecies',
            template: __webpack_require__(858),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [])
    ], EciesComponent);
    return EciesComponent;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/ecies.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Coin Tools' });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(859),
            styles: [__webpack_require__(851)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/home.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = (function () {
    function NotFoundComponent(store) {
        this.store = store;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Page not found' });
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(860),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object])
    ], NotFoundComponent);
    return NotFoundComponent;
    var _a;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/not-found.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_qrReaderReducer__ = __webpack_require__(449);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var jsQR = __webpack_require__(840);
var QrReaderComponent = (function () {
    function QrReaderComponent(store, el) {
        this.store = store;
        this.el = el;
        this.items = [];
    }
    QrReaderComponent.prototype.decodedSuccess = function (str) {
        if (str !== this.items[0]) {
            console.log('dispatch');
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_qrReaderReducer__["b" /* ADD_ITEM */], payload: str });
        }
    };
    QrReaderComponent.prototype.stop = function () {
        this.stream.getTracks().map(function (track) { return track.stop(); });
        this.stopped = true;
    };
    QrReaderComponent.prototype.clean = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_qrReaderReducer__["c" /* CLEAN */] });
    };
    QrReaderComponent.prototype.startJsqr = function () {
        var _this = this;
        var querySelector = function (sel) { return _this.el.nativeElement.querySelector(sel); };
        this.video = querySelector('video');
        this.canvas = querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        var width = parseInt(this.canvas.style.width);
        var height = parseInt(this.canvas.style.height);
        this.canvas.width = width;
        this.canvas.height = height;
        navigator['getUserMedia'] = navigator['getUserMedia'] ||
            navigator['webkitGetUserMedia'] ||
            navigator['mozGetUserMedia'];
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true }, this.successCallback.bind(this), this.errorCallback.bind(this));
            requestAnimationFrame(this.tick.bind(this));
        }
    };
    QrReaderComponent.prototype.successCallback = function (stream) {
        this.stream = stream;
        var URL = window['URL'] || window['webkitURL'];
        if (URL) {
            this.video.src = URL.createObjectURL(stream);
        }
        else if (this.video.mozSrcObject !== undefined) {
            this.video.mozSrcObject = stream;
        }
        else {
            this.video.src = stream;
        }
    };
    QrReaderComponent.prototype.errorCallback = function () { };
    QrReaderComponent.prototype.tick = function () {
        if (!this.stopped) {
            requestAnimationFrame(this.tick.bind(this));
        }
        var width = parseInt(this.canvas.style.width);
        var height = parseInt(this.canvas.style.height);
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            // Load the video onto the canvas
            this.context.drawImage(this.video, 0, 0, width, height);
            // Load the image data from the canvas
            var imageData = this.context.getImageData(0, 0, width, height);
            var decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height);
            if (decoded) {
                this.decodedSuccess(decoded);
            }
        }
    };
    QrReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startJsqr();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'QR Reader' });
        this.store.select('qrReader').subscribe(function (store) {
            _this.items = store['items'];
        });
    };
    QrReaderComponent.prototype.ngOnDestroy = function () {
        this.stop();
    };
    QrReaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-qr-reader',
            template: __webpack_require__(861),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === 'function' && _b) || Object])
    ], QrReaderComponent);
    return QrReaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/qr-reader.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendFromPrivkeyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendFromPrivkeyComponent = (function () {
    function SendFromPrivkeyComponent(bitcore, data, store) {
        this.bitcore = bitcore;
        this.data = data;
        this.store = store;
        this.privkey = '';
        this.networkFee = 0.0001;
        this.serviceFee = 0.0005 * 1e8;
        this.serviceFeeAddr = '1BTCuX3D27RoZ1g3TENnTMEkbYfGyusFHb';
        this.unspentsUrlTpl = 'https://blockchain.info/pl/unspent?active=';
        this.pushUrl = 'http://btc.blockr.io/api/v1/tx/push';
    }
    SendFromPrivkeyComponent.prototype.privkeyUpdate = function () {
        var _this = this;
        var PrivateKey = this.bitcore.lib.PrivateKey;
        try {
            var priv = PrivateKey.fromString(this.privkey.trim());
            this.srcAddr = priv.toAddress().toString();
            this.unspents = null;
            this.getUnspents(this.srcAddr).subscribe(function (data) {
                var utxos = data['unspent_outputs'] || [];
                _this.unspents = utxos.map(function (out) {
                    return {
                        txId: out.tx_hash_big_endian,
                        outputIndex: out.tx_output_n,
                        address: _this.srcAddr,
                        script: out.script,
                        satoshis: out.value
                    };
                });
                _this.updateSummary();
            });
        }
        catch (e) {
            this.srcAddr = '';
            this.unspents = null;
        }
        this.updateSummary();
    };
    SendFromPrivkeyComponent.prototype.sumSatoshis = function (unspents) {
        return unspents.reduce(function (acc, u) { return acc + u.satoshis; }, 0);
    };
    SendFromPrivkeyComponent.prototype.sumValue = function (unspents) {
        return (this.sumSatoshis(unspents) * 1e-8).toFixed(8);
    };
    SendFromPrivkeyComponent.prototype.updateSummary = function () {
        var Address = this.bitcore.lib.Address;
        if (!this.unspents) {
            this.receiveAmount = '';
            return;
        }
        var res = this.sumSatoshis(this.unspents);
        if (this.doServiceFee) {
            res -= this.serviceFee;
        }
        if (this.networkFee) {
            res -= (+this.networkFee) * 1e8;
        }
        try {
            var isValidAddr = Address.isValid(this.address.trim());
            if (isValidAddr) {
                this.receiveAmount = res > 0 ? this.formatBTC(res) : '';
            }
            else {
                this.receiveAmount = '';
            }
        }
        catch (e) {
            this.receiveAmount = '';
        }
    };
    SendFromPrivkeyComponent.prototype.formatBTC = function (satoshis) {
        return (satoshis * 1e-8).toFixed(8);
    };
    SendFromPrivkeyComponent.prototype.send = function () {
        var _this = this;
        var Transaction = this.bitcore.lib.Transaction;
        try {
            var tx_1 = new Transaction()
                .from(this.unspents);
            if (this.doServiceFee) {
                tx_1.to(this.serviceFeeAddr, this.serviceFee);
            }
            tx_1.change(this.address)
                .fee((+this.networkFee) * 1e8)
                .sign(this.privkey);
            console.log(tx_1.toString());
            this.pushtx(tx_1.toString())
                .subscribe(function (res) {
                _this.txHash = tx_1.hash;
            });
        }
        catch (e) {
            console.error('something went wrong', e);
        }
    };
    SendFromPrivkeyComponent.prototype.clean = function () {
        this.privkey = '';
        this.address = '';
        this.networkFee = 0;
        this.doServiceFee = false;
        this.privkeyUpdate();
    };
    SendFromPrivkeyComponent.prototype.pushtx = function (hex) {
        var url = this.pushUrl;
        return this.data.post(url, { hex: hex }, { corsProxy: true });
    };
    SendFromPrivkeyComponent.prototype.getUnspents = function (address) {
        var url = this.unspentsUrlTpl + address;
        return this.data.get(url, { corsProxy: true });
    };
    SendFromPrivkeyComponent.prototype.ngOnInit = function () {
        this.privkeyUpdate();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Send from Privkey' });
    };
    SendFromPrivkeyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-send-from-privkey',
            template: __webpack_require__(862),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */]) === 'function' && _c) || Object])
    ], SendFromPrivkeyComponent);
    return SendFromPrivkeyComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/send-from-privkey.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignMessageComponent = (function () {
    function SignMessageComponent(bitcore, store) {
        this.bitcore = bitcore;
        this.store = store;
    }
    SignMessageComponent.prototype.keyup = function () {
        var PrivateKey = this.bitcore.lib.PrivateKey;
        var Message = this.bitcore.message;
        // L1BmvDhfzFCtcxcgSJ7pEr1mxZ82AerncJPZvzR6dzM1sbjSYwGi
        var msg = (this.msg || '').trim();
        try {
            var privkey = PrivateKey.fromString(this.privkey);
            var address = privkey.toAddress() + '';
            this.signedMsg = "-----BEGIN BITCOIN SIGNED MESSAGE-----\n" + msg + "\n-----BEGIN SIGNATURE-----\n" + address + "\n" + Message(msg).sign(privkey) + "\n-----END BITCOIN SIGNED MESSAGE-----";
        }
        catch (e) { }
    };
    SignMessageComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Sign Message' });
    };
    SignMessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-sign-message',
            template: __webpack_require__(863),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bitcore_service__["a" /* BitcoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */]) === 'function' && _b) || Object])
    ], SignMessageComponent);
    return SignMessageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/sign-message.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VanityAddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VanityAddressComponent = (function () {
    function VanityAddressComponent(store, appRef) {
        this.store = store;
        this.appRef = appRef;
        this.startsWith = '1';
        this.ignoreCase = false;
        this.limit = 20;
        this.found = [];
        this.workers = [];
        this.threads = 1;
        this.addressCnt = 0;
        this.cores = Array(navigator['hardwareConcurrency'] || 8).fill(0).map(function (a, i) { return i + 1; });
    }
    VanityAddressComponent.prototype.spawnWorker = function (startsWith, ignoreCase) {
        var _this = this;
        var worker = new Worker('/assets/vanity-address.worker.js');
        worker.onmessage = function (msg) {
            _this.workerMessage(JSON.parse(msg.data));
        };
        worker.postMessage(JSON.stringify({
            startsWith: startsWith, ignoreCase: ignoreCase
        }));
        this.workers.push(worker);
    };
    VanityAddressComponent.prototype.workerMessage = function (res) {
        if (res.found) {
            this.found.push({
                address: res.address,
                privkey: res.privkey
            });
            if (this.found.length >= this.limit) {
                this.terminateWorkers();
            }
        }
        this.addressCnt += res.cnt;
        this.appRef.tick();
    };
    VanityAddressComponent.prototype.scale = function (force) {
        var start = force || this.workers.length > 0;
        this.terminateWorkers();
        if (start) {
            while (this.workers.length < this.threads) {
                this.spawnWorker(this.startsWith, this.ignoreCase);
            }
        }
    };
    VanityAddressComponent.prototype.terminateWorkers = function () {
        this.workers.map(function (worker) { return worker.terminate(); });
        this.workers = [];
    };
    VanityAddressComponent.prototype.generate = function () {
        this.scale(true);
    };
    VanityAddressComponent.prototype.clean = function () {
        this.found = [];
        this.addressCnt = 0;
    };
    VanityAddressComponent.prototype.ngOnInit = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__reducers_toolbarReducer__["b" /* SET_TITLE */], payload: 'Vanity Address' });
    };
    VanityAddressComponent.prototype.ngOnDestroy = function () {
        this.terminateWorkers();
    };
    VanityAddressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-vanity-address',
            template: __webpack_require__(864),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ApplicationRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ApplicationRef */]) === 'function' && _b) || Object])
    ], VanityAddressComponent);
    return VanityAddressComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/vanity-address.component.js.map

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "md-sidenav-container {\n  height: 100%; }\n\n.app-sidenav {\n  min-width: 250px; }\n\n.more {\n  visibility: hidden; }\n\n[routerLink] {\n  cursor: pointer; }\n\nmd-list-item {\n  cursor: pointer; }\n\na:focus,\na:active {\n  outline: 0;\n  border: none; }\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.valid {\n  color: #090; }\n\n.not-valid {\n  color: #c00; }\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.actions {\n  text-align: right; }\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.actions {\n  text-align: right; }\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "nav {\n  width: calc(100% + 48px);\n  margin: -24px -24px 16px !important; }\n\n@media (max-width: 600px) {\n  nav {\n    width: calc(100% + 32px);\n    margin: 0 -16px !important;\n    margin-top: -24px !important; } }\n\n[md-tab-link] {\n  width: 50%; }\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".actions {\n  text-align: right; }\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.actions {\n  text-align: right; }\n\n.align-left {\n  text-align: left; }\n"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.actions {\n  text-align: right; }\n"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>\n\n<md-sidenav-container (swipeleft)=\"sidenav.close()\">\n\n  <md-sidenav #sidenav\n              [mode]=\"!pinnedMenu ? 'over':'side'\"\n              class=\"app-sidenav\"\n              align=\"start\">\n\n    <md-nav-list>\n      <a md-list-item\n         (click)=\"!pinnedMenu && sidenav.close()\"\n         routerLink=\"/\">\n        <h3>Coin Tools</h3>\n      </a>\n\n      <md-divider></md-divider>\n\n      <a md-list-item\n         *ngFor=\"let tool of tools\"\n         (click)=\"!pinnedMenu && sidenav.close()\"\n         routerLink=\"/{{tool.route}}\">\n        {{tool.name}}\n      </a>\n    </md-nav-list>\n\n    <md-card>\n      <md-slide-toggle [(ngModel)]=\"pinnedMenu\">\n        Pinned Menu\n      </md-slide-toggle>\n    </md-card>\n\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button md-icon-button (click)=\"sidenav.toggle()\">\n      <md-icon>menu</md-icon>\n    </button>\n\n    <span>{{title}}</span>\n\n    <button md-icon-button\n            class=\"more\"\n            [md-menu-trigger-for]=\"menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n  </md-toolbar>\n\n  <md-menu x-position=\"before\" #menu=\"mdMenu\">\n    <button md-menu-item>Option 1</button>\n    <button md-menu-item>Option 2</button>\n  </md-menu>\n\n  <router-outlet></router-outlet>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <md-input-container class=\"full-width\">\n    <textarea mdInput\n              [(ngModel)]=\"signedMsg\"\n              placeholder=\"signed message\"\n              (keyup)=\"change()\"\n              (change)=\"change()\"\n              rows=\"12\"></textarea>\n  </md-input-container>\n\n  <div *ngIf=\"valid\">\n    <md-icon class=\"valid\">done</md-icon>\n    <span>Message is correctly signed</span>\n  </div>\n\n  <div *ngIf=\"!valid\">\n    <md-icon class=\"not-valid\">error_outline</md-icon>\n    <span>Signature is not valid</span>\n  </div>\n\n</md-card>\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "\n<md-input-container class=\"full-width\">\n  <textarea mdInput\n            [(ngModel)]=\"encryptedMsg\"\n            placeholder=\"Encrypted Message\"\n            (keyup)=\"update()\"\n            (change)=\"update()\"\n            rows=\"5\"></textarea>\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n  <input mdInput\n         [(ngModel)]=\"recipientPriv\"\n         placeholder=\"Recipient Privkey\"\n         (keyup)=\"update()\"\n         (change)=\"update()\"\n         align=\"start\"/>\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n  <input mdInput\n         [(ngModel)]=\"senderPub\"\n         placeholder=\"Sender Pubkey\"\n         (keyup)=\"update()\"\n         (change)=\"update()\"\n         align=\"start\"/>\n</md-input-container>\n\n\n<p>Decrypted Message</p>\n\n<md-input-container class=\"full-width\">\n  <textarea mdInput\n            [(ngModel)]=\"msg\"\n            placeholder=\"Message\"\n            rows=\"8\"\n            readonly></textarea>\n</md-input-container>\n\n\n<div class=\"actions\">\n  <button md-raised-button color=\"accent\" (click)=\"reset()\">Clean</button>\n</div>\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "\n<md-input-container class=\"full-width\">\n  <textarea mdInput\n            [(ngModel)]=\"msg\"\n            placeholder=\"message\"\n            (keyup)=\"update()\"\n            (change)=\"update()\"\n            rows=\"5\"></textarea>\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n  <input mdInput\n         [(ngModel)]=\"senderPriv\"\n         placeholder=\"Sender Privkey\"\n         (keyup)=\"update()\"\n         (change)=\"update()\"\n         align=\"start\"/>\n</md-input-container>\n\n<md-input-container class=\"full-width\">\n  <input mdInput\n         [(ngModel)]=\"recipientPubkey\"\n         placeholder=\"Recipient Pubkey\"\n         (keyup)=\"update()\"\n         (change)=\"update()\"\n         align=\"start\"/>\n</md-input-container>\n\n\n<p>Encrypted Message</p>\n\n<md-input-container class=\"full-width\">\n  <textarea mdInput\n            [(ngModel)]=\"encryptedMsg\"\n            placeholder=\"Encrypted Message\"\n            rows=\"8\"\n            readonly></textarea>\n</md-input-container>\n\n\n<div class=\"actions\">\n  <button md-raised-button color=\"accent\" (click)=\"reset()\">Clean</button>\n</div>\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <nav md-tab-nav-bar>\n    <a md-tab-link\n       [routerLink]=\"['encrypt']\"\n       routerLinkActive #encrypt=\"routerLinkActive\"\n       [active]=\"encrypt.isActive\">\n      Encrypt\n    </a>\n    <a md-tab-link\n       [routerLink]=\"['decrypt']\"\n       routerLinkActive #decrypt=\"routerLinkActive\"\n       [active]=\"decrypt.isActive\">\n      Decrypt\n    </a>\n  </nav>\n\n  <md-card-content>\n    <router-outlet></router-outlet>\n  </md-card-content>\n\n</md-card>\n\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n  <h1>Bitcoin tools</h1>\n</md-card>\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h1>404 - page not found</h1>\n</md-card>\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <video appVideo autoplay=\"true\" style=\"display:none;\"></video>\n  <canvas id=\"canvas\" style=\"width:640px; height:480px;\"></canvas>\n\n  <md-grid-list cols=\"1\" rowHeight=\"30px\">\n    <md-grid-tile\n        *ngFor=\"let item of items; let i = index \">\n      {{item}}\n    </md-grid-tile>\n  </md-grid-list>\n\n  <div class=\"actions\">\n    <!-- <button md-raised-button color=\"warn\" (click)=\"stop()\">Stop</button> -->\n    <button md-raised-button color=\"accent\" (click)=\"clean()\">Clean</button>\n  </div>\n\n</md-card>\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           [(ngModel)]=\"privkey\"\n           placeholder=\"Privkey\"\n           (change)=\"privkeyUpdate()\"\n           (keyup)=\"privkeyUpdate()\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <md-card class=\"align-left\" *ngIf=\"srcAddr\">\n    <md-card-content>\n      <div>Related Address: {{srcAddr}}</div>\n      <div *ngIf=\"unspents\">Unspent Outputs: {{unspents.length}}</div>\n      <div *ngIf=\"unspents\">Unspent Value: {{sumValue(unspents)}}</div>\n    </md-card-content>\n  </md-card>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           [(ngModel)]=\"address\"\n           placeholder=\"Destination Address\"\n           (change)=\"updateSummary()\"\n           (keyup)=\"updateSummary()\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           type=\"number\"\n           min=\"0\"\n           step=\"0.0001\"\n           max=\"0.005\"\n           [(ngModel)]=\"networkFee\"\n           placeholder=\"Network Fee\"\n           (change)=\"updateSummary()\"\n           (keyup)=\"updateSummary()\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <md-slide-toggle [(ngModel)]=\"doServiceFee\"\n                   (change)=\"updateSummary()\"\n                   mdTooltip=\"If you like this tool, please pay a little fee within this transaction, because it will help developing and maintaing this and other tools.\">\n    Pay Service Fee\n  </md-slide-toggle>\n\n  <md-card *ngIf=\"receiveAmount && !txHash\">\n    <md-card-title>Transaction Summary</md-card-title>\n    <md-card-content>\n      {{receiveAmount}} BTC => {{address}}\n    </md-card-content>\n  </md-card>\n\n  <md-card *ngIf=\"txHash\">\n    <md-card-title>Transaction Sent</md-card-title>\n    <md-card-content>\n      <a href=\"https://blockchain.info/pl/tx/{{txHash}}\" target=\"_blank\">\n        https://blockchain.info/pl/tx/{{txHash}}\n      </a>\n    </md-card-content>\n    <md-card-footer>\n      <button md-raised-button\n              color=\"accent\"\n              (click)=\"txHash = ''\">\n        OK\n      </button>\n    </md-card-footer>\n  </md-card>\n\n  <div class=\"actions\">\n    <button md-raised-button\n            color=\"accent\"\n            (click)=\"clean()\">\n      Clean\n    </button>\n\n    <button md-raised-button\n            color=\"primary\"\n            (click)=\"send()\"\n            [disabled]=\"!receiveAmount || txHash\">\n      Send Transaction\n    </button>\n  </div>\n\n</md-card>\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <md-input-container class=\"full-width\">\n    <textarea mdInput\n              [(ngModel)]=\"msg\"\n              placeholder=\"message\"\n              (keyup)=\"keyup()\"\n              rows=\"5\"></textarea>\n  </md-input-container>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           [(ngModel)]=\"privkey\"\n           placeholder=\"privkey\"\n           (keyup)=\"keyup()\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <p>Signed Message</p>\n\n  <md-input-container class=\"full-width\">\n    <textarea mdInput\n              [(ngModel)]=\"signedMsg\"\n              placeholder=\"signed message\"\n              rows=\"8\"\n              readonly></textarea>\n  </md-input-container>\n\n</md-card>\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           [(ngModel)]=\"startsWith\"\n           placeholder=\"Starts With\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <md-slide-toggle [(ngModel)]=\"ignoreCase\">\n    Ignore Case\n  </md-slide-toggle>\n\n  <md-input-container class=\"full-width\">\n    <input mdInput\n           [(ngModel)]=\"limit\"\n           placeholder=\"Addresses Limit\"\n           align=\"start\"/>\n  </md-input-container>\n\n  <md-select placeholder=\"Number of Threads\"\n             class=\"full-width\"\n             [(ngModel)]=\"threads\"\n             (change)=\"scale()\"\n             name=\"threads\">\n    <md-option *ngFor=\"let core of cores\" [value]=\"core\">\n      {{core}}\n    </md-option>\n  </md-select>\n\n  <md-card>\n    <table class=\"full-width\">\n      <tr>\n        <td>Address</td>\n        <td>Privkey</td>\n      </tr>\n      <tr\n          *ngFor=\"let item of found\">\n        <td>{{item.address}}</td>\n        <td>{{item.privkey}}</td>\n      </tr>\n    </table>\n\n    <div>\n      Checked Addresses: {{addressCnt}}\n    </div>\n  </md-card>\n\n  <div class=\"actions\">\n    <button md-raised-button\n            color=\"accent\"\n            (click)=\"clean()\">\n      Clean\n    </button>\n\n    <button md-raised-button\n            *ngIf=\"workers.length === 0\"\n            color=\"primary\"\n            [disabled]=\"found.length >= limit\"\n            (click)=\"generate()\">\n      Start Generating\n    </button>\n\n    <button md-raised-button\n            *ngIf=\"workers.length !== 0\"\n            color=\"primary\"\n            (click)=\"terminateWorkers()\">\n      Stop Generating\n    </button>\n  </div>\n\n</md-card>\n"

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(510);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BitcoreService = (function () {
    function BitcoreService() {
        this.lib = window['require']('bitcore-lib');
        this.message = window['require']('bitcore-message');
        this.ecies = window['require']('bitcore-ecies');
    }
    BitcoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BitcoreService);
    return BitcoreService;
}());
//# sourceMappingURL=/Users/gkucmierz/learn/coin-tools/src/bitcore.service.js.map

/***/ })

},[915]);
//# sourceMappingURL=main.bundle.map