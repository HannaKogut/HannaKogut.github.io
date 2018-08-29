(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-comments/app-comments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/app-comments/app-comments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-size: 13px;\n}\n\n.card {\n    box-shadow: 2px -2px 10px 0px rgba(49, 50, 50, 0.73);\n}\n\n.commentBox .form-group:first-child,\n.actionBox .form-group:first-child {\n    width: 80%;\n}\n\n.commentBox .form-group:nth-child(2),\n.actionBox .form-group:nth-child(2) {\n    width: 100%;\n}\n\n.actionBox .form-group * {\n    width: 80%;\n}\n\n.commentList {\n    padding: 0;\n    list-style: none;\n    overflow: auto;\n    text-align: justify\n}\n\n.commentList li {\n    margin: 0;\n    margin-top: 10px;\n}\n\n.commentList li>div {\n    display: table-cell;\n}\n\n.commenterImage {\n    width: 30px;\n    margin-right: 5px;\n    height: 100%;\n    float: left;\n}\n\n.commenterImage img {\n    width: 100%;\n    border-radius: 50%;\n}\n\n.commentText p,\n{\n    width: 100%;\n}\n\n.actionBox {\n    border-top: 1px dotted #bbb;\n    padding: 10px;\n}\n\ntextarea {\n    width: 90%;\n}"

/***/ }),

/***/ "./src/app/app-comments/app-comments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app-comments/app-comments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-5\">\n    <div class=\"card\" style=\"width: 30rem;\">\n        <div class=\"card-header\">\n            <h1>#Comments</h1>\n        </div>\n        <div class=\"card-body\">\n\n            <ul class=\"commentList\" *ngFor=\"let comment of comments\">\n                <li>\n                    <div class=\"commenterImage\">\n                        <img src=\"http://placekitten.com/50/50\" />\n                    </div>\n                    <div class=\"commentText\">\n                        <p class=\"\">{{comment}}</p>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"commenterImage\">\n                <img src=\"http://placekitten.com/40/40\" />\n            </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" #comment rows=\"3\" cols=\"40\" (keydown.control.enter)=\"addComment(comment.value)\" id=\"comment\"></textarea>\n            </div>\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/app-comments/app-comments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-comments/app-comments.component.ts ***!
  \********************************************************/
/*! exports provided: AppCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommentsComponent", function() { return AppCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-items.service */ "./src/app/get-items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCommentsComponent = /** @class */ (function () {
    function AppCommentsComponent(getItems) {
        this.getItems = getItems;
        this.items = [];
        this.comments = [];
    }
    AppCommentsComponent.prototype.addComment = function (comment) {
        if (comment) {
            this.comments.push(comment);
            localStorage.setItem('comments', JSON.stringify(comment));
        }
    };
    AppCommentsComponent.prototype.getComments = function () {
        // this.getItems.getItems().subscribe(item => {
        //   this.comments = item.comments;
        //   this.items = item;
        //   console.log(item);
        // });
    };
    AppCommentsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('comments') === null) {
            this.comments = [];
        }
        else {
            var comments = localStorage.getItem('items');
            var parsedData = JSON.parse(comments);
            this.comments = parsedData;
        }
        this.getComments();
    };
    AppCommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-comments',
            template: __webpack_require__(/*! ./app-comments.component.html */ "./src/app/app-comments/app-comments.component.html"),
            styles: [__webpack_require__(/*! ./app-comments.component.css */ "./src/app/app-comments/app-comments.component.css")]
        }),
        __metadata("design:paramtypes", [_get_items_service__WEBPACK_IMPORTED_MODULE_1__["GetItemsService"]])
    ], AppCommentsComponent);
    return AppCommentsComponent;
}());



/***/ }),

/***/ "./src/app/app-items/app-items.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-items/app-items.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    float: right;\n}\n\n.card {\n    box-shadow: 2px -2px 10px 0px rgba(49, 50, 50, 0.73);\n}\n\nul li .itemActive {\n    border-left: 2px solid red;\n}"

/***/ }),

/***/ "./src/app/app-items/app-items.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-items/app-items.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-5\">\n    <div class=\"card\" style=\"width: 30rem;\">\n        <div class=\"card-header\">\n            <h1>Items1</h1>\n        </div>\n\n        <div class=\"card-body\">\n            <div class=\"input-group mb-2\">\n                <input type=\"text\" class=\"form-control\" #itemName placeholder=\"Type name here...\" aria-describedby=\"basic-addon2\">\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"addNewItem(itemName.value)\">Add new</button>\n                </div>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" (click)=\"selectItem(item)\" *ngFor=\"let item of items\" [ngClass]=\"item.isActive ? 'itemActive': 'itemStatic' ? 'green' : 'red'\">{{item.name}}\n                    <span class=\" badge badge-primary badge-pill \">d045415</span>\n                    <button type=\"button \" class=\"btn btn-outline-danger \" (click)=\"deleteItem(item) \">Delete</button>\n\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- <div class=\"card \">\n    <div class=\"card-header \">\n        Items\n    </div>\n    <div class=\"card-body \">\n        <div class=\"input-group mb-3 \">\n            <input type=\"text \" class=\"form-control \" #itemName placeholder=\"Recipient 's username\" aria-label=\"'Type name here... \" aria-describedby=\"basic-addon2 \">\n            <div class=\"input-group-append \">\n                <button class=\"btn btn-success \" type=\"button \" (click)=\"addNewItem(itemName.value) \">Add new</button>\n            </div>\n        </div>\n        <ul class=\"list-group \" *ngFor=\"let item of items \">\n            <li class=\"list-group-item \">{{item}}</li>\n        </ul>\n    </div> [ngClass]=\" item.isSelected ? 'sensorSelected' : 'sensorStatic'\"\n</div> -->"

/***/ }),

/***/ "./src/app/app-items/app-items.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-items/app-items.component.ts ***!
  \**************************************************/
/*! exports provided: AppItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppItemsComponent", function() { return AppItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-items.service */ "./src/app/get-items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppItemsComponent = /** @class */ (function () {
    function AppItemsComponent(getItems) {
        this.getItems = getItems;
        this.isActive = false;
        this.items = [];
    }
    AppItemsComponent.prototype.addNewItem = function (text) {
        if (text) {
            var comments = localStorage.getItem('comments');
            var itemObject = {
                'name': text,
                'comments': comments
            };
            this.items.push(itemObject);
            localStorage.setItem('items', JSON.stringify(this.items));
            console.log(comments);
        }
    };
    AppItemsComponent.prototype.deleteItem = function (item) {
        var deletedItem = this.items.indexOf(item);
        this.items.splice(deletedItem, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
    };
    AppItemsComponent.prototype.selectItem = function (item) {
        this.getItems.saveItems(item);
        this.isActive = !this.isActive;
    };
    AppItemsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('items') === null) {
            this.items = [];
        }
        else {
            var names = localStorage.getItem('items');
            var parsedData = JSON.parse(names);
            this.items = parsedData;
        }
    };
    AppItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-items',
            template: __webpack_require__(/*! ./app-items.component.html */ "./src/app/app-items/app-items.component.html"),
            styles: [__webpack_require__(/*! ./app-items.component.css */ "./src/app/app-items/app-items.component.css")]
        }),
        __metadata("design:paramtypes", [_get_items_service__WEBPACK_IMPORTED_MODULE_1__["GetItemsService"]])
    ], AppItemsComponent);
    return AppItemsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\n    background-color: #09083b;\n    color: white;\n    height: 650px;\n}\n\napp-app-items,\napp-app-comments {\n    margin-top: 1%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-2 left\">\n            <h1>Diary app</h1>\n            <h6>Comments with no sense</h6>\n        </div>\n        <app-app-items></app-app-items>\n        <app-app-comments></app-app-comments>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_items_app_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-items/app-items.component */ "./src/app/app-items/app-items.component.ts");
/* harmony import */ var _app_comments_app_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-comments/app-comments.component */ "./src/app/app-comments/app-comments.component.ts");
/* harmony import */ var _get_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-items.service */ "./src/app/get-items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_items_app_items_component__WEBPACK_IMPORTED_MODULE_3__["AppItemsComponent"],
                _app_comments_app_comments_component__WEBPACK_IMPORTED_MODULE_4__["AppCommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_get_items_service__WEBPACK_IMPORTED_MODULE_5__["GetItemsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/get-items.service.ts":
/*!**************************************!*\
  !*** ./src/app/get-items.service.ts ***!
  \**************************************/
/*! exports provided: GetItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsService", function() { return GetItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetItemsService = /** @class */ (function () {
    function GetItemsService() {
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    GetItemsService.prototype.saveItems = function (items) {
        this.state$.next(items);
    };
    GetItemsService.prototype.getItems = function () {
        return this.state$.asObservable();
    };
    GetItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GetItemsService);
    return GetItemsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hanna/Desktop/test-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map