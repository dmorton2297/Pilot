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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#activecomp {\nz-index: 1;\n}\n\n#nav {\n    z-index: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation id=\"nav\"></app-navigation>\n<router-outlet id=\"activecomp\"></router-outlet>\n"

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
        this.title = 'Pilot';
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
/*! exports provided: getGoogleConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoogleConfigs", function() { return getGoogleConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task/create-task.component */ "./src/app/create-task/create-task.component.ts");
/* harmony import */ var _scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrum-board/scrum-board.component */ "./src/app/scrum-board/scrum-board.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modify-task/modify-task.component */ "./src/app/modify-task/modify-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _func_req_form_func_req_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./func-req-form/func-req-form.component */ "./src/app/func-req-form/func-req-form.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _backlog_backlog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./backlog/backlog.component */ "./src/app/backlog/backlog.component.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _create_team_create_team_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./create-team/create-team.component */ "./src/app/create-team/create-team.component.ts");
/* harmony import */ var _modify_team_modify_team_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modify-team/modify-team.component */ "./src/app/modify-team/modify-team.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _view_team_view_team_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./view-team/view-team.component */ "./src/app/view-team/view-team.component.ts");
/* harmony import */ var _teaminvitations_teaminvitations_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./teaminvitations/teaminvitations.component */ "./src/app/teaminvitations/teaminvitations.component.ts");
/* harmony import */ var _new_message_new_message_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./new-message/new-message.component */ "./src/app/new-message/new-message.component.ts");
/* harmony import */ var _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user-messages/user-messages.component */ "./src/app/user-messages/user-messages.component.ts");
/* harmony import */ var _invite_to_team_invite_to_team_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./invite-to-team/invite-to-team.component */ "./src/app/invite-to-team/invite-to-team.component.ts");
/* harmony import */ var _message_to_user_message_to_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./message-to-user/message-to-user.component */ "./src/app/message-to-user/message-to-user.component.ts");
/* harmony import */ var _manage_team_role_manage_team_role_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./manage-team-role/manage-team-role.component */ "./src/app/manage-team-role/manage-team-role.component.ts");
/* harmony import */ var _send_message_to_team_send_message_to_team_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./send-message-to-team/send-message-to-team.component */ "./src/app/send-message-to-team/send-message-to-team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var appRoutes = [
    { path: '', redirectTo: 'backlog', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'createtask', component: _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'backlog', component: _main_main_component__WEBPACK_IMPORTED_MODULE_31__["MainComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'invites', component: _teaminvitations_teaminvitations_component__WEBPACK_IMPORTED_MODULE_36__["TeaminvitationsComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'scrum', component: _scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_4__["ScrumBoardComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'modifytask/:id', component: _modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_15__["ModifyTaskComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'funcreq', component: _func_req_form_func_req_form_component__WEBPACK_IMPORTED_MODULE_24__["FuncReqFormComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'createteam', component: _create_team_create_team_component__WEBPACK_IMPORTED_MODULE_32__["CreateTeamComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'modifyteam/:id', component: _modify_team_modify_team_component__WEBPACK_IMPORTED_MODULE_33__["ModifyTeamComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_34__["TeamsComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'viewteam/:id', component: _view_team_view_team_component__WEBPACK_IMPORTED_MODULE_35__["ViewTeamComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'inviteToTeam/:teamid', component: _invite_to_team_invite_to_team_component__WEBPACK_IMPORTED_MODULE_39__["InviteToTeamComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'messages', component: _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_38__["UserMessagesComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'newmessage', component: _new_message_new_message_component__WEBPACK_IMPORTED_MODULE_37__["NewMessageComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'sendmessagetouser/:id', component: _message_to_user_message_to_user_component__WEBPACK_IMPORTED_MODULE_40__["MessageToUserComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] },
    { path: 'managerole/:userid/:teamid', component: _manage_team_role_manage_team_role_component__WEBPACK_IMPORTED_MODULE_41__["ManageTeamRoleComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"]] }
];
function getGoogleConfigs() {
    var config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_30__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_30__["GoogleLoginProvider"]("941718367028-f0550rgrm90usorok0jd3vsd9vopjqi4.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_4__["ScrumBoardComponent"],
                _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"],
                _scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_4__["ScrumBoardComponent"],
                _modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_15__["ModifyTaskComponent"],
                _backlog_backlog_component__WEBPACK_IMPORTED_MODULE_29__["BacklogComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_31__["MainComponent"],
                _func_req_form_func_req_form_component__WEBPACK_IMPORTED_MODULE_24__["FuncReqFormComponent"],
                _new_message_new_message_component__WEBPACK_IMPORTED_MODULE_37__["NewMessageComponent"],
                _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_38__["UserMessagesComponent"],
                _create_team_create_team_component__WEBPACK_IMPORTED_MODULE_32__["CreateTeamComponent"],
                _modify_team_modify_team_component__WEBPACK_IMPORTED_MODULE_33__["ModifyTeamComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_34__["TeamsComponent"],
                _view_team_view_team_component__WEBPACK_IMPORTED_MODULE_35__["ViewTeamComponent"],
                _teaminvitations_teaminvitations_component__WEBPACK_IMPORTED_MODULE_36__["TeaminvitationsComponent"],
                _invite_to_team_invite_to_team_component__WEBPACK_IMPORTED_MODULE_39__["InviteToTeamComponent"],
                _message_to_user_message_to_user_component__WEBPACK_IMPORTED_MODULE_40__["MessageToUserComponent"],
                _manage_team_role_manage_team_role_component__WEBPACK_IMPORTED_MODULE_41__["ManageTeamRoleComponent"],
                _send_message_to_team_send_message_to_team_component__WEBPACK_IMPORTED_MODULE_42__["SendMessageToTeamComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                angular5_social_login__WEBPACK_IMPORTED_MODULE_30__["SocialLoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"],
                {
                    provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"],
                    useFactory: getGoogleConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = false;
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (!this.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthService.prototype.setUserId = function (_id) {
        this.id = _id;
    };
    AuthService.prototype.setEmail = function (_email) {
        this.email = _email;
    };
    AuthService.prototype.setName = function (_name) {
        this.name = _name;
    };
    AuthService.prototype.getUserId = function () {
        return this.id;
    };
    AuthService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.setLoggedOut = function () {
        this.loggedIn = false;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.setUser = function (user) {
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/backlog/backlog.component.css":
/*!***********************************************!*\
  !*** ./src/app/backlog/backlog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n\n  #create-task {\n      float: right;\n  }\n\n  #create-funcreq {\n      float: right;\n  }"

/***/ }),

/***/ "./src/app/backlog/backlog.component.html":
/*!************************************************!*\
  !*** ./src/app/backlog/backlog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n<mat-card class=\"heading-container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n        <h1 class=\"heading\">Product Backlog</h1>\n    </div>\n    <div class=\"col-md-4\">\n        <button mat-button id=\"create-task\" (click)=\"onCreateTask()\">Create Task</button>\n        <button mat-button id=\"create-funcreq\" (click)=\"onCreateFuncReq()\">Create Functional Requirement</button>\n    </div>\n    <button mat-button (click)=\"onSortNamePressed()\">Sort by name</button>\n    <button mat-button (click)=\"onSortPrioPressed()\">Sort by priority</button>\n  </div>\n  \n</mat-card>\n\n\n<mat-card class=\"table-container\" *ngIf=\"tasks\">\n  <table mat-table [dataSource]=\"tasks\" class=\"mat-elevation-z0\">\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <span>{{element.id}}</span>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <span>{{element.name}}</span>\n        </td>\n    </ng-container>\n\n      <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef> Descriptions </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.description}}</span>\n          </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"priority\">\n          <th mat-header-cell *matHeaderCellDef> Priority </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.priority}}</span>\n          </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"created\">\n          <th mat-header-cell *matHeaderCellDef> Created </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.created_at}}</span>\n          </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef> Status </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <div *ngIf=\"element.status == 0\">\n              <button mat-button style=\"background-color: lightcoral; width: 100px;\" (click)=\"onStatusClicked(element.id)\">Not started</button>\n            </div>\n            <div *ngIf=\"element.status == 1\">\n              <button mat-button style=\"background-color: yellow; width: 100px;\" (click)=\"onStatusClicked(element.id)\">Started</button>\n            </div>\n            <div *ngIf=\"element.status == 2\">\n              <button mat-button style=\"background-color: lightgreen; width: 100px;\" (click)=\"onStatusClicked(element.id)\">Complete</button>\n            </div>\n          </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <button mat-button style=\"background-color: lightblue;\" id=\"element.id\" (click)=\"onModifyPressed(element.id)\">Modify</button>\n          <button mat-button style=\"background-color: lightcoral;\" id=\"element.id\" (click)=\"onDeletePressed(element.id)\">Delete</button>\n        </td>\n    </ng-container>\n      \n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</mat-card>\n</mat-card>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/backlog/backlog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/backlog/backlog.component.ts ***!
  \**********************************************/
/*! exports provided: BacklogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogComponent", function() { return BacklogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BacklogComponent = /** @class */ (function () {
    function BacklogComponent(http, router, auth, state) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.state = state;
        this.tasks = [];
        this.displayedColumns = ['name', 'description', 'priority', 'status', 'actions'];
        this.sortByName = true;
        this.sortByPriority = false;
        this.signalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadData();
    }
    BacklogComponent.prototype.ngOnInit = function () {
        console.log('ngoninit called here');
        this.loadData();
    };
    BacklogComponent.prototype.onCreateTask = function () {
        this.router.navigateByUrl('/createtask');
    };
    BacklogComponent.prototype.onCreateFuncReq = function () {
        this.router.navigateByUrl('/funcreq');
    };
    BacklogComponent.prototype.updateSignal = function () {
        this.signalEvent.emit("SIG_UPDATE_TASKS");
    };
    BacklogComponent.prototype.loadData = function () {
        var _this = this;
        if (this.state.getCurrentStateId() == 0) {
            console.log('here');
            this.http.get('http://localhost:8000/api/getusertasks/' + this.auth.id).subscribe(function (res) {
                _this.tasks = res.json();
                if (_this.sortByName) {
                    _this.sortTableName();
                }
                else if (_this.sortByPriority) {
                    _this.sortTablePriority();
                }
            });
        }
        else {
            this.http.get('http://localhost:8000/api/getteamtasks/' + this.state.getCurrentStateId()).subscribe(function (res) {
                _this.tasks = res.json();
                if (_this.sortByName) {
                    _this.sortTableName();
                }
                else if (_this.sortByPriority) {
                    _this.sortTablePriority();
                }
            });
        }
    };
    BacklogComponent.prototype.onStatusClicked = function (taskId) {
        var _this = this;
        var newStatus = 0;
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == taskId) {
                if (this.tasks[i].status == 0) {
                    newStatus = 1;
                }
                else if (this.tasks[i].status == 1) {
                    newStatus = 2;
                }
                else {
                    newStatus = 0;
                }
            }
        }
        var request = {
            taskId: taskId,
            status: newStatus
        };
        this.http.post('http://localhost:8000/api/changestatus', request).subscribe(function (res) {
            _this.updateSignal();
        });
    };
    BacklogComponent.prototype.onDeletePressed = function (id) {
        this.http.get('http://localhost:8000/api/deletetask/' + id).subscribe();
        this.updateSignal();
    };
    BacklogComponent.prototype.onModifyPressed = function (id) {
        this.router.navigateByUrl('/modifytask/' + id);
    };
    BacklogComponent.prototype.onSortNamePressed = function () {
        this.sortByName = true;
        this.sortByPriority = false;
        this.updateSignal();
    };
    BacklogComponent.prototype.onSortPrioPressed = function () {
        this.sortByName = false;
        this.sortByPriority = true;
        this.updateSignal();
    };
    BacklogComponent.prototype.sortTableName = function () {
        var temp = this.tasks;
        temp.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.tasks = temp;
    };
    BacklogComponent.prototype.sortTablePriority = function () {
        this.tasks.sort(function (a, b) { return a.priority - b.priority; });
    };
    BacklogComponent.prototype.sortTableStatus = function () {
        this.tasks.sort(function (a, b) { return a.status - b.status; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BacklogComponent.prototype, "signalEvent", void 0);
    BacklogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backlog',
            template: __webpack_require__(/*! ./backlog.component.html */ "./src/app/backlog/backlog.component.html"),
            styles: [__webpack_require__(/*! ./backlog.component.css */ "./src/app/backlog/backlog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], BacklogComponent);
    return BacklogComponent;
}());



/***/ }),

/***/ "./src/app/create-task/create-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-task/create-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n.myImg {\n    max-width: 20px;\n    max-height: 20px;\n}"

/***/ }),

/***/ "./src/app/create-task/create-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-task/create-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n        <mat-card-header>\n          <mat-card-title>\n            <h1>Create New Task</h1>\n          </mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n          <form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\">\n            <!-- Task name, description, and esimate -->\n            <mat-form-field> <input matInput type=\"text\" formControlName=\"name\" placeholder=\"Task Name\" required> </mat-form-field>\n            <mat-form-field> <input matInput type=\"text\" formControlName=\"description\" placeholder=\"Task Description\" required> </mat-form-field>\n            <mat-form-field> <input matInput type=\"number\" formControlName=\"estimate\" placeholder=\"Time estimate (hours)\"> </mat-form-field>\n\n            <!-- Priority level drop down box -->\n            <mat-form-field>\n            <mat-select formControlName=\"priority\"  placeholder=\"Priority Level\" required>\n                    <mat-option *ngFor=\"let p of priorities\" [value]=\"p\">{{p}}</mat-option>\n                </mat-select>\n            </mat-form-field> \n\n            <!-- Assigned user drop down box -->\n            <mat-form-field>\n                   <mat-select formControlName=\"assignedUser\" placeholder=\"Assignment\" required> \n                        <mat-option *ngFor=\"let u of users\" [value]=\"u\">{{u.name}}</mat-option>\n                    </mat-select>  \n            </mat-form-field> \n\n            <!-- Function requirement drop down box -->\n            <mat-form-field>\n              <mat-select formControlName=\"funcreq\" placeholder=\"Functional Requirements\" multiple> \n                   <mat-option *ngFor=\"let f of req\" [value]=\"f\">{{f.name}}</mat-option>\n               </mat-select>  \n            </mat-form-field> \n\n          <!-- Acceptance Critera Section -->\n          <mat-card-header>\n              <mat-card-title>\n                  <h1>Acceptance Criteria</h1>\n              </mat-card-title>\n              <div fxFlex></div>\n              <button mat-button (click)=\"addCriteria()\" type=\"button\">Add Criteria</button>\n          </mat-card-header>\n\n            <!-- Displaying input boxes for critera -->\n            <div formArrayName=\"criterian\">\n                <div *ngFor=\"let address of criterian.controls; let i=index\">\n                    <!-- The repeated template -->\n                    <mat-form-field> <input matInput type=\"text\" [formControlName]=\"i\"> </mat-form-field>\n                    <a (click)=\"removeCriteria(i)\"> <img class=\"myImg\" img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEaSURBVGhD7Zq9bQJBGESvDEIj0QWWA/fg3JGRKwBHOKQA4w4wNSASEmcUQwziZ75stFobTsytDjRPegHL7n37gJDKGFOcD7g+Y+xpNWN4vNDYW5T49JYX+AtzF/7POJN7VqrkG5zB3CVKGne4GocIlYQ8wze4gvzweB3rSv+aEXeQ8Q15SLxWU2KGQ+rQipAO5N/7K0yJNd4TZ5hWhDxCfn8DU2KN98QZxiF1cAjhECUOIRyixCGEQ5Q4hHCIEocQDlHiEMIhShxC3ETIA5yQnzAl1nhPnGFaEaLAIXW4m5Ap5CEL+CI2nskzvqCcEeQhJRxCOT24g7mBTbiFXdgI7/AAc4OV7uEANsoTnMPcHwEU/sA+NMbIqKoTPNbSVLFTyOsAAAAASUVORK5CYII=\"> </a>\n               <!--     <button mat-mini-fab  (click)=\"removeCriteria(i)\" type=\"button\">X</button> -->\n                </div>\n              </div>\n\n          <!-- Submit and cancel buttons -->\n          <div class=\"button-row\">\n                <button  mat-raised-button color=\"primary\" [disabled]=\"!taskForm.valid\" (click)=\"onSubmit\">Create Task</button>\n                <button  mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n          </div>\n        </form>\n      </mat-card-content>  \n<!--\n      <p>\n        Form Value: {{ taskForm.value | json }}\n      </p>\n      -->\n    \n  </mat-card>\n"

/***/ }),

/***/ "./src/app/create-task/create-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-task/create-task.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(fb, http, state, auth, snackBar, location, activatedRoute, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.state = state;
        this.auth = auth;
        this.snackBar = snackBar;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.taskForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: [''],
            funcreq: [''],
            estimate: [''],
            teamID: [''],
            creatorID: [''],
            assignedUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            assignedUserID: [''],
            criterian: this.fb.array([
                this.fb.control('')
            ])
        });
        this.priorities = ['1', '2', '3'];
        this.users = [];
        this.teamId = 0;
        this.http.get('http://localhost:8000/api/getfuncreqs/' + this.teamId).subscribe(function (res) {
            _this.req = res.json();
            _this.getUsers();
        });
    }
    CreateTaskComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getallusers').subscribe(function (res) {
            _this.users = res.json();
        });
    };
    Object.defineProperty(CreateTaskComponent.prototype, "criterian", {
        /**
         * Gets criterian for the view.
         */
        get: function () {
            return this.taskForm.get('criterian');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds criteria from view to criterian array.
     */
    CreateTaskComponent.prototype.addCriteria = function () {
        this.criterian.push(this.fb.control(''));
    };
    /**
     * Removes criterian from index i.
     * Ensures at least one line entry in view.
     * @param i
     */
    CreateTaskComponent.prototype.removeCriteria = function (i) {
        if (this.criterian.length == 1) {
            this.criterian.removeAt(i);
            this.criterian.push(this.fb.control(''));
            return;
        }
        this.criterian.removeAt(i);
    };
    /**
     * Removes empty criterian.
     */
    CreateTaskComponent.prototype.cleanCriteria = function () {
        for (var i = 0; i < this.criterian.length; i++) {
            if (this.criterian[i] == "") {
                this.criterian.removeAt(i);
            }
        }
    };
    CreateTaskComponent.prototype.getMembers = function () {
    };
    CreateTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cleanCriteria();
        var request = {
            name: this.taskForm.get('name').value,
            description: this.taskForm.get('description').value,
            priority: this.taskForm.get('priority').value,
            status: 0,
            funcreq: this.taskForm.get('funcreq').value,
            estimate: this.taskForm.get('estimate').value,
            timespent: 0,
            creatorid: this.auth.getUserId(),
            teamid: this.state.getCurrentStateId(),
            assigneduserid: 0,
            criterian: this.taskForm.get('criterian').value,
        };
        this.http.post('http://localhost:8000/api/savetask', request).subscribe(function (res) {
            _this.snackBar.open('Task created', 'Ok', {
                duration: 3000
            });
            _this.location.back();
        });
        //this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    };
    CreateTaskComponent.prototype.onCancel = function () {
        this.taskForm.reset();
        this.router.navigateByUrl('/');
    };
    CreateTaskComponent.prototype.openSnackBar = function (maessage) {
    };
    CreateTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-task',
            template: __webpack_require__(/*! ./create-task.component.html */ "./src/app/create-task/create-task.component.html"),
            styles: [__webpack_require__(/*! ./create-task.component.css */ "./src/app/create-task/create-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "./src/app/create-team/create-team.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-team/create-team.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n.mat-button-toggle {\n  color: white;\n  width: 120.75px;\n}\n\n.mat-button-toggle-checked {\n  color: white;\n  width: 100px;\n  opacity: 0.40;\n}\n  "

/***/ }),

/***/ "./src/app/create-team/create-team.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-team/create-team.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Create New Team</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form [formGroup]=\"teamForm\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field> <input matInput type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\" placeholder=\"Team Name\" required> </mat-form-field>\n        <mat-form-field> <input matInput type=\"text\" formControlName=\"description\" [(ngModel)]=\"description\" placeholder=\"Team Description\" required> </mat-form-field>\n        <mat-form-field> <input matInput type=\"text\" formControlName=\"invitemsg\" placeholder=\"Default Invitation Message\"> </mat-form-field>\n        <mat-form-field>\n            <mat-select formControlName=\"toInvite\" placeholder=\"Invite Users: \" multiple> \n                 <mat-option *ngFor=\"let u of users\" [value]=\"u\">{{u.name}}</mat-option>\n             </mat-select>  \n          </mat-form-field> \n        <mat-card-subtitle style=\"padding-top: 0.3cm\"> Team Color *</mat-card-subtitle>\n        <mat-button-toggle-group>\n            <mat-button-toggle style=\"background-color: #ee5253;\" (click)=\"setColor('red')\" >Red</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #ff9f43;\" (click)=\"setColor('orange')\" >Orange</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #feca57;\" (click)=\"setColor('yellow')\" >Yellow</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #1dd1a1;\" (click)=\"setColor('green')\" >Green</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #00d2d3;\" (click)=\"setColor('turquoise')\" >Torquise</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #54a0ff;\" (click)=\"setColor('lblue')\" >Light Blue</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #2e86de;\" (click)=\"setColor('dblue')\" >Dark Blue</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #5f27cd;\" (click)=\"setColor('purple')\" >Purple</mat-button-toggle>\n            <mat-button-toggle style=\"background-color: #222f3e;\" (click)=\"setColor('gray')\" >Gray</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div class=\"button-row\" style=\"padding-top: 0.4cm\">\n            <button  mat-raised-button color=\"primary\" [disabled]=\"!teamForm.valid\" (click)=\"onSubmit\">Create Team</button>\n            <button  mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n        </div>\n    </form>\n  </mat-card-content>  \n\n<!--\n  <p>\n    Form Value: {{ teamForm.value | json }}\n  </p>\n  -->\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/create-team/create-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-team/create-team.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamComponent", function() { return CreateTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(fb, http, auth, snackBar, location, activatedRoute, router) {
        this.fb = fb;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.teamForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            invitemsg: [''],
            members: [''],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toInvite: ['']
        });
        this.teamForm.get('invitemsg').setValue('I want you to join my team!');
        this.getUsers();
    }
    CreateTeamComponent.prototype.setColor = function (c) {
        this.teamForm.patchValue({ color: c });
    };
    CreateTeamComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getallusers').subscribe(function (res) {
            _this.users = res.json();
        });
    };
    CreateTeamComponent.prototype.inviteUsers = function () {
        var to_invite = this.teamForm.get('toInvite').value;
        for (var i = 0; i < to_invite.length; i++) {
            var request = {
                userid: to_invite[i].id,
                teamid: this.teamId
            };
            this.http.post('http://localhost:8000/api/inviteuser', request);
        }
    };
    CreateTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.teamForm);
        var request = {
            name: this.teamForm.get('name').value,
            description: this.teamForm.get('description').value,
            invitemsg: this.teamForm.get('invitemsg').value,
            color: this.teamForm.get('color').value,
            creatorId: this.auth.getUserId()
        };
        this.http.get('http://localhost:8000/api/findteam/' + this.teamForm.get('name').value).subscribe(function (res) {
            if (res.json() == "0") {
                _this.snackBar.open('Team name already in-use!', 'Ok', {
                    duration: 3000
                });
                return;
            }
            else {
                _this.http.post('http://localhost:8000/api/createteam', request).subscribe(function (res) {
                    _this.snackBar.open('Team Created', 'Ok', {
                        duration: 3000
                    });
                    _this.teamId = Number(_this.activatedRoute.snapshot.paramMap.get('id'));
                    _this.inviteUsers();
                });
            }
        });
    };
    CreateTeamComponent.prototype.onCancel = function () {
        this.snackBar.open('Team Creation Canceled', 'Ok', {
            duration: 3000
        });
        this.teamForm.reset();
        this.router.navigateByUrl('/teams');
    };
    CreateTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-team',
            template: __webpack_require__(/*! ./create-team.component.html */ "./src/app/create-team/create-team.component.html"),
            styles: [__webpack_require__(/*! ./create-team.component.css */ "./src/app/create-team/create-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "./src/app/func-req-form/func-req-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/func-req-form/func-req-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/func-req-form/func-req-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/func-req-form/func-req-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Add Functional Requirment</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"reqForm\" (ngSubmit)=\"onSubmit()\">\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"name\" placeholder=\"Name\" required> </mat-form-field>\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"description\" placeholder=\"Description\" required> </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Tasks\" multiple required> \n           <mat-option *ngFor=\"let f of tasks\" [value]=\"f\">{{f.name}}</mat-option>\n        </mat-select>  \n      </mat-form-field>\n      <div class=\"button-row\">\n            <button  mat-raised-button color=\"primary\"  (click)=\"onSubmit\">Create</button>\n            <button  mat-raised-button color=\"primary\" (click)=\"onBack()\" type=\"button\">Back</button>\n      </div>\n  </form>\n</mat-card-content>\n<!-- \n<p>\n  Form Value: {{ reqForm.value | json }}\n</p>\n-->\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/func-req-form/func-req-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/func-req-form/func-req-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FuncReqFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncReqFormComponent", function() { return FuncReqFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuncReqFormComponent = /** @class */ (function () {
    function FuncReqFormComponent(fb, http, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.reqForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            teamid: ['']
        });
        this.tasks = [];
        this.http.get('http://localhost:8000/api/getusertasks/0').subscribe(function (res) {
            _this.tasks = res.json();
        });
    }
    FuncReqFormComponent.prototype.onSubmit = function () {
        var request = {
            name: this.reqForm.get('name').value,
            description: this.reqForm.get('description').value,
            teamid: 0
        };
        this.http.post('http://localhost:8000/api/savereq', request).subscribe();
        window.alert('Requirement Added');
        this.reqForm.reset();
    };
    FuncReqFormComponent.prototype.onBack = function () {
        this.router.navigateByUrl('/backlog');
    };
    FuncReqFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-func-req-form',
            template: __webpack_require__(/*! ./func-req-form.component.html */ "./src/app/func-req-form/func-req-form.component.html"),
            styles: [__webpack_require__(/*! ./func-req-form.component.css */ "./src/app/func-req-form/func-req-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FuncReqFormComponent);
    return FuncReqFormComponent;
}());



/***/ }),

/***/ "./src/app/invite-to-team/invite-to-team.component.css":
/*!*************************************************************!*\
  !*** ./src/app/invite-to-team/invite-to-team.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n  \n  .button-row button,\n  .button-row a {\n    margin-right: 8px;\n  }\n  \n  mat-card {\n  width: 100%;\n}\n  \n  table {\n  width: 80%;\n}"

/***/ }),

/***/ "./src/app/invite-to-team/invite-to-team.component.html":
/*!**************************************************************!*\
  !*** ./src/app/invite-to-team/invite-to-team.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Invite Users to Team</h1>\n      <h3>{{teamName}}</h3>\n    </mat-card-title>\n  </mat-card-header>\n  <hr style=\"widows: 100%;\"/>\n\n  <mat-card-content>\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\">\n      <label>Recipient Email</label>\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"email\" placeholder=\"recipient@email.com\" required> </mat-form-field>\n      <label>Invitation message</label>\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"invmessage\" placeholder=\"Invite Message\" required> </mat-form-field>\n      <div class=\"button-row\">\n          <button  mat-raised-button color=\"primary\" [disabled]=\"!taskForm.valid\" (click)=\"onSubmit\">Invite User</button>\n          <button  mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n    </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n<mat-card *ngIf=\"currentInvites\">\n  <h3>Pending invites</h3>\n  <table mat-table [dataSource]=\"currentInvites\" class=\"mat-elevation-z0\">\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <span>{{element.email}}</span>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <span>{{element.name}}</span>\n        </td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</mat-card>"

/***/ }),

/***/ "./src/app/invite-to-team/invite-to-team.component.ts":
/*!************************************************************!*\
  !*** ./src/app/invite-to-team/invite-to-team.component.ts ***!
  \************************************************************/
/*! exports provided: InviteToTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteToTeamComponent", function() { return InviteToTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InviteToTeamComponent = /** @class */ (function () {
    function InviteToTeamComponent(fb, http, activatedRoute, auth, router, snackBar) {
        this.fb = fb;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
        this.taskForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            invmessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.teamName = 'Software Engineering Team';
        this.displayedColumns = ['name', 'email'];
        this.teamId = this.activatedRoute.snapshot.paramMap.get('teamid');
        this.loadTeamName();
        this.loadCurrentInvites();
    }
    InviteToTeamComponent.prototype.loadTeamName = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe(function (res) {
            var r = res.json();
            _this.teamName = r[0].name;
        });
    };
    InviteToTeamComponent.prototype.loadCurrentInvites = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/allsentinvites/' + this.auth.getUserId()).subscribe(function (res) {
            var r = res.json();
            _this.currentInvites = [];
            for (var i = 0; i < r.length; i++) {
                if ('' + r[i].teamid == _this.teamId) {
                    _this.currentInvites.push(r[i]);
                }
            }
        });
    };
    InviteToTeamComponent.prototype.ngOnInit = function () {
    };
    InviteToTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getuserid/' + this.taskForm.get('email').value).subscribe(function (res) {
            var temp = res.json();
            if (temp[0] == null) {
                return;
            }
            console.log(temp[0].id);
            _this.id = temp[0].id;
            var a = {
                senderid: '' + _this.auth.getUserId(),
                recipientid: '' + _this.id,
                teamid: _this.teamId
            };
            _this.http.post('http://localhost:8000/api/inviteuser', a).subscribe(function (res) {
                _this.snackBar.open('Invitation Sent', 'Ok', {
                    duration: 3000
                });
                _this.loadCurrentInvites();
            });
        });
    };
    InviteToTeamComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/viewteam/' + this.teamId);
    };
    InviteToTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite-to-team',
            template: __webpack_require__(/*! ./invite-to-team.component.html */ "./src/app/invite-to-team/invite-to-team.component.html"),
            styles: [__webpack_require__(/*! ./invite-to-team.component.css */ "./src/app/invite-to-team/invite-to-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], InviteToTeamComponent);
    return InviteToTeamComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <h1>Login with Google</h1>\n    <div id=\"googleBtn\" class=\"g-signin2\" data-onsuccess=\"onSignIn\">Google</div>\n    <meta name=\"google-signin-client_id\" content=\"941718367028-f0550rgrm90usorok0jd3vsd9vopjqi4.apps.googleusercontent.com\">\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngZone, http, auth, router) {
        var _this = this;
        this.http = http;
        this.auth = auth;
        this.router = router;
        var _self = this;
        window['onSignIn'] = function (user) { return ngZone.run(function () { return _this.onSignIn(user); }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        var id_token = googleUser.getAuthResponse().id_token;
        var profile = googleUser.getBasicProfile();
        var userRequest = {
            name: profile.getName(),
            email: profile.getEmail()
        };
        //window.alert(profile.getName())
        //window.alert(profile.getEmail())
        this.http.post('http://localhost:8000/api/saveuser', userRequest).subscribe(function (res) {
            _this.http.get('http://localhost:8000/api/getuserid/' + profile.getEmail()).subscribe(function (r) {
                var temp = r.json();
                console.log(temp);
                var id = temp[0].id;
                console.log(id);
                _this.auth.setName(profile.getName());
                _this.auth.setEmail(profile.getEmail());
                _this.auth.setUserId(id);
                _this.auth.setLoggedIn();
                _this.router.navigateByUrl('/');
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-signin',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div style=\"margin-bottom: -40px; margin-top: 8px;\" class=\"row\">\n    <div class=\"col-md-8\">\n      <span flex></span>\n    </div>\n    <div class=\"col-md-4\">\n        <button style=\"z-index: 100; float: right;\" mat-button [matMenuTriggerFor]=\"menu\" *ngIf=\"teamsLoaded\">{{selectedViewOption}}</button>\n        <mat-menu  id=\"menu\" #menu=\"matMenu\">\n            <button *ngFor=\"let a of viewOptions\" style=\"z-index: 10001; font-size: 10pt;\" mat-menu-item (click)=\"onMenuItemPressed(a)\">{{a}}</button>\n          </mat-menu>\n    </div>\n  </div>\n    \n<mat-tab-group>\n    <mat-tab label=\"Backlog\"> \n        <app-backlog (signalEvent)=\"receiveSignal($event)\"></app-backlog>\n    </mat-tab>\n    <mat-tab label=\"Scrum\"> \n      <app-scrum-board (signalEvent)=\"receiveSignal($event)\"></app-scrum-board>  \n    </mat-tab>\n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scrum-board/scrum-board.component */ "./src/app/scrum-board/scrum-board.component.ts");
/* harmony import */ var _backlog_backlog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backlog/backlog.component */ "./src/app/backlog/backlog.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = /** @class */ (function () {
    function MainComponent(http, auth, state) {
        var _this = this;
        this.http = http;
        this.auth = auth;
        this.state = state;
        this.viewOptions = ['Me'];
        this.selectedViewOption = this.viewOptions[0];
        this.teamsLoaded = false;
        this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe(function (res) {
            _this.teams = res.json();
            for (var i = 0; i < _this.teams.length; i++) {
                _this.viewOptions.push(_this.teams[i].name);
            }
            _this.teamsLoaded = true;
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        this.receiveSignal("hoopla");
    };
    MainComponent.prototype.onMenuItemPressed = function (teamName) {
        var stateId = 0;
        for (var i = 0; i < this.teams.length; i++) {
            var currTeam = this.teams[i];
            if (currTeam.name == teamName) {
                stateId = currTeam.id;
                this.state.updateState(stateId);
                console.log(stateId);
                this.selectedViewOption = teamName;
                this.receiveSignal("update");
                return;
            }
        }
        this.selectedViewOption = teamName;
        this.state.updateState(0);
        this.receiveSignal("update");
    };
    MainComponent.prototype.receiveSignal = function ($event) {
        this.backlog.loadData();
        this.scrum.loadData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_scrum_board_scrum_board_component__WEBPACK_IMPORTED_MODULE_1__["ScrumBoardComponent"]),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "scrum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_backlog_backlog_component__WEBPACK_IMPORTED_MODULE_2__["BacklogComponent"]),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "backlog", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/manage-team-role/manage-team-role.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manage-team-role/manage-team-role.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nmat-form-field {\n    width: 96%;\n  }\n\n  .button-row button,\n.button-row a {\n  margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/manage-team-role/manage-team-role.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manage-team-role/manage-team-role.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n      <h1>Manage {{username}}'s role.</h1>\n  </mat-card-header>\n  <hr style=\"widht: 100%\"/>\n  <h4>{{teamName}}</h4>\n\n\n  <mat-card-content>\n    <form [formGroup]=\"role\" (ngSubmit)=\"onSubmit()\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"Role\" aria-label=\"Role\" formControlName=\"role\" [matAutocomplete]=\"auto\" [value]=\"displayedRole\" required>\n        <mat-autocomplete #auto=\"matAutocomplete\" >\n            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n              {{option}}\n            </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      \n\n      <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" (click)=\"onSubmit\">Update Role</button>\n          <button mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n        </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/manage-team-role/manage-team-role.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-team-role/manage-team-role.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageTeamRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTeamRoleComponent", function() { return ManageTeamRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageTeamRoleComponent = /** @class */ (function () {
    function ManageTeamRoleComponent(fb, router, activatedRoute, http, loc, snackBar) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.loc = loc;
        this.snackBar = snackBar;
        this.username = "test";
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['Owner', 'Manager', 'Member'];
        this.role = this.fb.group({
            role: ['']
        });
        this.teamId = this.activatedRoute.snapshot.paramMap.get('teamid');
        this.userId = this.activatedRoute.snapshot.paramMap.get('userid');
        this.loadRole();
        this.loadUser();
        this.loadTeamName();
    }
    ManageTeamRoleComponent.prototype.loadRole = function () {
        var _this = this;
        var request = {
            teamid: this.teamId,
            userid: this.userId
        };
        this.http.post('http://localhost:8000/api/getrole', request).subscribe(function (res) {
            var temp = res.json();
            if (temp.length > 0) {
                _this.userRole = temp[0];
                _this.displayedRole = _this.userRole.role;
            }
        });
    };
    ManageTeamRoleComponent.prototype.loadUser = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getuser/' + this.userId).subscribe(function (res) {
            var temp = res.json();
            if (temp.length > 0) {
                _this.user = temp[0];
                _this.username = _this.user.name;
            }
        });
    };
    ManageTeamRoleComponent.prototype.loadTeamName = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe(function (res) {
            var temp = res.json();
            if (temp.length > 0) {
                _this.teamName = temp[0].name;
            }
        });
    };
    ManageTeamRoleComponent.prototype.ngOnInit = function () {
    };
    ManageTeamRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('On submit called');
        var r = {
            role: this.role.get('role').value,
            userid: this.userId,
            teamid: this.teamId
        };
        this.http.post('http://localhost:8000/api/setrole', r).subscribe(function (res) {
            _this.snackBar.open('Role Updated', 'Ok', {
                duration: 3000
            });
        });
    };
    ManageTeamRoleComponent.prototype.onCancel = function () {
        this.loc.back();
    };
    ManageTeamRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-team-role',
            template: __webpack_require__(/*! ./manage-team-role.component.html */ "./src/app/manage-team-role/manage-team-role.component.html"),
            styles: [__webpack_require__(/*! ./manage-team-role.component.css */ "./src/app/manage-team-role/manage-team-role.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ManageTeamRoleComponent);
    return ManageTeamRoleComponent;
}());



/***/ }),

/***/ "./src/app/message-to-user/message-to-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/message-to-user/message-to-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/message-to-user/message-to-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/message-to-user/message-to-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Send message to {{displayName}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  \n    <mat-card-content>\n      <form [formGroup]=\"message\" (ngSubmit)=\"onSubmit()\">\n        <!-- Field for Recipient of Message -->\n          <mat-form-field>\n            <input type=\"text\" id=\"to\" matInput placeholder=\"Username\" aria-label=\"User\" formControlName=\"receiver\" [matAutocomplete]=\"auto\"\n              placeholder=\"Recipient Name\" [value]=\"name\" disabled required>\n              <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                  <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                    {{option}}\n                  </mat-option>\n              </mat-autocomplete>\n          </mat-form-field>\n  \n        <!-- Field for Message Content -->\n        <mat-form-field>\n          <input matInput type=\"text\" formControlName=\"message\" placeholder=\"Message Body\" required>\n        </mat-form-field>\n        <!-- Submit and cancel buttons -->\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" [disabled]=\"!message.valid\" (click)=\"onSubmit\">Send Message</button>\n          <button mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "./src/app/message-to-user/message-to-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/message-to-user/message-to-user.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageToUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageToUserComponent", function() { return MessageToUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageToUserComponent = /** @class */ (function () {
    function MessageToUserComponent(fb, http, activatedRoute, location, auth, snackBar, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.message = this.fb.group({
            message: ['']
        });
        this.test = "test";
        this.name = "Temp Name";
        this.displayName = "Temp Name";
        this.options = [];
        this.users = [];
        this.displayedUsers = [];
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        var recieverId = this.activatedRoute.snapshot.paramMap.get('id');
        this.sender = this.auth.getUserId();
        this.http.get('http://localhost:8000/api/getuser/' + recieverId).subscribe(function (res) {
            _this.users = res.json();
            _this.name = _this.users[0].name + '  |  ' + _this.users[0].email;
            _this.displayName = _this.users[0].name;
        });
    }
    MessageToUserComponent.prototype.ngOnInit = function () {
    };
    MessageToUserComponent.prototype.onSubmit = function () {
        //how to get current user's ID and name(email?)
        //receiver and sender given by name or email or uID?
        //get receiving user's name and find his id
        //this.msg = this.newMessage.get('message').value as string;
        //alert(this.newMessage.get('receiver'))
        var _this = this;
        var request = {
            recipient: this.users[0].id,
            message: this.message.get('message').value,
            sender: this.sender
        };
        if (this.users.find(function (x) { return x.name == _this.receiver; }) != undefined) {
            //user is found in user table
        }
        this.http.post('http://localhost:8000/api/newmessage', request).subscribe(function (res) {
            console.log(res);
            _this.snackBar.open('Message sent', 'Ok', {
                duration: 3000
            });
        });
    };
    MessageToUserComponent.prototype.onCancel = function () {
        this.message.reset();
        this.location.back();
    };
    MessageToUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-to-user',
            template: __webpack_require__(/*! ./message-to-user.component.html */ "./src/app/message-to-user/message-to-user.component.html"),
            styles: [__webpack_require__(/*! ./message-to-user.component.css */ "./src/app/message-to-user/message-to-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MessageToUserComponent);
    return MessageToUserComponent;
}());



/***/ }),

/***/ "./src/app/modify-task/modify-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modify-task/modify-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n.myImg {\n  max-width: 20px;\n  max-height: 20px;\n}"

/***/ }),

/***/ "./src/app/modify-task/modify-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/modify-task/modify-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Modify Task</h1>\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\">\n      <!-- Task name, description, and esimate-->\n      <mat-form-field> <input matInput type=\"text\" [(ngModel)]=\"name\" formControlName=\"name\" placeholder=\"Task Name\" required> </mat-form-field>\n      <mat-form-field> <input matInput type=\"text\" [(ngModel)]=\"description\" formControlName=\"description\" placeholder=\"Task Description\" required> </mat-form-field>\n      <mat-form-field> <input matInput type=\"number\" [(ngModel)]=\"estimate\" formControlName=\"estimate\" placeholder=\"Time estimate (hours)\"> </mat-form-field>\n\n      <!-- Priority level drop down box-->\n      <mat-form-field>\n          <mat-select formControlName=\"priority\" placeholder=\"Priority Level\" required>\n              <mat-option *ngFor=\"let p of priorities\" [value]=\"p\">{{p}}</mat-option>\n          </mat-select>\n      </mat-form-field> \n\n      <!-- Assigned user drop down box-->\n      <mat-form-field>\n             <mat-select formControlName=\"assignedUser\" placeholder=\"Assignment\" required> \n                  <mat-option *ngFor=\"let u of users\" [value]=\"u\">{{u.name}}</mat-option>\n              </mat-select>  \n      </mat-form-field> \n\n      <!-- Function requirement drop down box -->\n      <mat-form-field>\n        <mat-select formControlName=\"funcreq\" [(ngModel)]=\"funcreq\" type=\"text\" placeholder=\"Function Requirement\" multiple> \n             <mat-option *ngFor=\"let g of selectedReqs\" [value]=\"g\">{{g.name}}</mat-option>\n             <mat-option *ngFor=\"let f of req\" [value]=\"f\">{{f.name}}</mat-option> \n         </mat-select>  \n      </mat-form-field> \n\n    <!-- Acceptance Critera Section-->\n    <mat-card-header>\n        <mat-card-title>\n            <h1>Acceptance Criteria</h1>\n        </mat-card-title>\n        <div fxFlex></div>\n        <button mat-button (click)=\"addCriteria()\" type=\"button\">Add Criteria</button>\n    </mat-card-header>\n\n      <!-- Displaying input boxes for critera-->\n      <div formArrayName=\"criterian\">\n          <div *ngFor=\"let address of criterian.controls; let i=index\">\n              <!-- The repeated template -->\n              <mat-form-field> <input matInput type=\"text\" [formControlName]=\"i\"> </mat-form-field>\n              <a (click)=\"removeCriteria(i)\"> <img class=\"myImg\" img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEaSURBVGhD7Zq9bQJBGESvDEIj0QWWA/fg3JGRKwBHOKQA4w4wNSASEmcUQwziZ75stFobTsytDjRPegHL7n37gJDKGFOcD7g+Y+xpNWN4vNDYW5T49JYX+AtzF/7POJN7VqrkG5zB3CVKGne4GocIlYQ8wze4gvzweB3rSv+aEXeQ8Q15SLxWU2KGQ+rQipAO5N/7K0yJNd4TZ5hWhDxCfn8DU2KN98QZxiF1cAjhECUOIRyixCGEQ5Q4hHCIEocQDlHiEMIhShxC3ETIA5yQnzAl1nhPnGFaEaLAIXW4m5Ap5CEL+CI2nskzvqCcEeQhJRxCOT24g7mBTbiFXdgI7/AAc4OV7uEANsoTnMPcHwEU/sA+NMbIqKoTPNbSVLFTyOsAAAAASUVORK5CYII=\"> </a>\n            </div>\n        </div>\n\n    <!-- Submit and cancel buttons -->\n    <div class=\"button-row\">\n          <button  mat-raised-button color=\"primary\" [disabled]=\"!taskForm.valid\" (click)=\"onSubmit\">Modify</button>\n          <button  mat-raised-button color=\"primary\" (click)=\"onDelete()\" type=\"button\">Delete</button>\n          <button  mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n\n    </div>\n  </form>\n</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/modify-task/modify-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-task/modify-task.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyTaskComponent", function() { return ModifyTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModifyTaskComponent = /** @class */ (function () {
    function ModifyTaskComponent(fb, http, snackBar, location, activatedRoute, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.snackBar = snackBar;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.taskForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: [''],
            funcreq: [''],
            estimate: [''],
            teamID: [''],
            creatorID: [''],
            assignedUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            assignedUserID: [''],
            criterian: this.fb.array([])
        });
        this.priorities = ['1', '2', '3'];
        this.teamId = 0;
        this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
        /* Getting task form values */
        this.http.get('http://localhost:8000/api/gettask/' + this.taskId).subscribe(function (res) {
            _this.task = res.json();
            _this.taskForm.patchValue({ name: _this.task[0].name });
            _this.taskForm.patchValue({ description: _this.task[0].description });
            _this.taskForm.patchValue({ priority: _this.priorities[_this.task[0].priority - 1] });
            _this.taskForm.patchValue({ status: _this.task[0].status });
            _this.taskForm.patchValue({ estimate: _this.task[0].estimate });
            _this.taskForm.patchValue({ teamID: _this.task[0].teamid });
            _this.taskForm.patchValue({ creatorID: _this.task[0].creatorid });
            _this.taskForm.patchValue({ assignedUserID: _this.task[0].assigneduserid });
            _this.taskForm.patchValue({ assignedUser: _this.users[_this.task[0].assigneduserid] });
        });
        /* Getting functional requirements the user selected on creation */
        this.http.get('http://localhost:8000/api/getSelectedReqs/' + this.taskId).subscribe(function (res) {
            _this.selectedReqs = res.json();
            _this.taskForm.patchValue({ funcreq: _this.selectedReqs });
        });
        /* Getting all criteria associated with team */
        this.http.get('http://localhost:8000/api/getfuncreqs/' + this.teamId).subscribe(function (res) {
            _this.req = res.json();
        });
        /* Getting all acceptance criteria associated with team */
        var criteria;
        this.http.get('http://localhost:8000/api/getcriterian/' + this.taskId).subscribe(function (res) {
            criteria = res.json();
            for (var i = 0; i < criteria.length; i++) {
                _this.pushCriteria(criteria[i]);
            }
            _this.removeDuplicate();
            _this.cleanCriteria();
        });
        this.getUsers();
    }
    ModifyTaskComponent.prototype.getSelectedReq = function () {
    };
    ModifyTaskComponent.prototype.getAllReq = function () {
    };
    ModifyTaskComponent.prototype.getCriterion = function () {
    };
    ModifyTaskComponent.prototype.getSelectedRequirment = function () {
    };
    ModifyTaskComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getallusers').subscribe(function (res) {
            _this.users = res.json();
        });
    };
    /**
     *  This resolves the problem of selected functional requirements being
     *  displayed twice.
     */
    ModifyTaskComponent.prototype.removeDuplicate = function () {
        for (var i = 0; i < this.req.length; i++) {
            for (var j = 0; j < this.selectedReqs.length; j++) {
                if (this.req[i].id == this.selectedReqs[j].id) {
                    this.req.splice(i, 1);
                }
            }
        }
    };
    Object.defineProperty(ModifyTaskComponent.prototype, "criterian", {
        /**
         * Gets criterian for the view.
         */
        get: function () {
            return this.taskForm.get('criterian');
        },
        enumerable: true,
        configurable: true
    });
    // TODO: Do I need this function.
    /**
     *  Adds criteria from view to criterian array.
     */
    ModifyTaskComponent.prototype.addCriteria = function () {
        this.criterian.push(this.fb.control(''));
    };
    /**
     * Adds criteria from database to criterian array.
     *
     * @param criterian
     */
    ModifyTaskComponent.prototype.pushCriteria = function (criterian) {
        if (criterian != null) {
            this.criterian.push(this.fb.control(criterian));
        }
    };
    /**
     * Removes criterian from index i.
     *
     * @param i
     */
    ModifyTaskComponent.prototype.removeCriteria = function (i) {
        if (this.criterian.length == 1) {
            this.criterian.removeAt(i);
            this.criterian.push(this.fb.control(''));
            return;
        }
        this.criterian.removeAt(i);
    };
    /**
     *  Removes empty criteria.
     */
    ModifyTaskComponent.prototype.cleanCriteria = function () {
        for (var i = 0; i < this.criterian.length; i++) {
            if (this.criterian[i] == "") {
                this.criterian.removeAt(i);
            }
        }
    };
    ModifyTaskComponent.prototype.getMembers = function () {
    };
    ModifyTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cleanCriteria();
        var request = {
            id: this.taskId,
            name: this.taskForm.get('name').value,
            description: this.taskForm.get('description').value,
            priority: this.taskForm.get('priority').value,
            status: 0,
            funcreq: this.taskForm.get('funcreq').value,
            estimate: this.taskForm.get('estimate').value,
            timespent: 0,
            creatorid: 0,
            teamid: 0,
            assigneduserid: 0,
            criterian: this.taskForm.get('criterian').value
        };
        this.http.post('http://localhost:8000/api/modifytask/' + this.taskId, request, this.taskId).subscribe(function (res) {
            _this.router.navigateByUrl('/backlog');
        });
        this.snackBar.open('Task modified', 'Ok', {
            duration: 3000
        });
    };
    ModifyTaskComponent.prototype.onDelete = function () {
        var _this = this;
        if (!window.confirm('Are you sure you want to delete this task?')) {
            return;
        }
        this.http.post('http://localhost:8000/api/deletetask/' + this.taskId, this.taskId).subscribe(function (res) {
            _this.taskForm.reset();
            _this.snackBar.open('Task deleted', 'Ok', {
                duration: 3000
            });
            _this.router.navigateByUrl('/');
        });
    };
    ModifyTaskComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/backlog');
    };
    ModifyTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-task',
            template: __webpack_require__(/*! ./modify-task.component.html */ "./src/app/modify-task/modify-task.component.html"),
            styles: [__webpack_require__(/*! ./modify-task.component.css */ "./src/app/modify-task/modify-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ModifyTaskComponent);
    return ModifyTaskComponent;
}());



/***/ }),

/***/ "./src/app/modify-team/modify-team.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modify-team/modify-team.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}\n\n.mat-button-toggle {\n  color: white;\n  width: 120.75px;\n}\n\n.mat-button-toggle-checked {\n  color: white;\n  width: 100px;\n  opacity: 0.40;\n}\n  "

/***/ }),

/***/ "./src/app/modify-team/modify-team.component.html":
/*!********************************************************!*\
  !*** ./src/app/modify-team/modify-team.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Modify Team</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"teamForm\" (ngSubmit)=\"onSubmit()\">\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\" placeholder=\"Team Name\" required> </mat-form-field>\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"description\" [(ngModel)]=\"description\" placeholder=\"Team Description\" required> </mat-form-field>\n      <mat-form-field> <input matInput type=\"text\" formControlName=\"invitemsg\" placeholder=\"Invitation Message\"> </mat-form-field>\n      <mat-card-subtitle style=\"padding-top: 0.3cm\"> Team Color *</mat-card-subtitle>\n      <mat-button-toggle-group>\n          <mat-button-toggle style=\"background-color: #ee5253;\" (click)=\"setColor('red')\" >Red</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #ff9f43;\" (click)=\"setColor('orange')\" >Orange</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #feca57;\" (click)=\"setColor('yellow')\" >Yellow</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #1dd1a1;\" (click)=\"setColor('green')\" >Green</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #00d2d3;\" (click)=\"setColor('turquoise')\" >Torquise</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #54a0ff;\" (click)=\"setColor('lblue')\" >Light Blue</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #2e86de;\" (click)=\"setColor('dblue')\" >Dark Blue</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #5f27cd;\" (click)=\"setColor('purple')\" >Purple</mat-button-toggle>\n          <mat-button-toggle style=\"background-color: #222f3e;\" (click)=\"setColor('gray')\" >Gray</mat-button-toggle>\n      </mat-button-toggle-group>\n      <div class=\"button-row\" style=\"padding-top: 0.4cm\">\n          <button  mat-raised-button color=\"primary\" [disabled]=\"!teamForm.valid\" (click)=\"onSubmit\">Modify</button>\n          <button  mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n      </div>\n  </form>\n</mat-card-content>  \n</mat-card>\n"

/***/ }),

/***/ "./src/app/modify-team/modify-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-team/modify-team.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyTeamComponent", function() { return ModifyTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModifyTeamComponent = /** @class */ (function () {
    function ModifyTeamComponent(fb, http, auth, snackBar, location, activatedRoute, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.teamForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            invitemsg: [''],
            members: [''],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fillerusers = ['Caden', 'Charlie', 'Dylan', 'John', 'Jackson'];
        this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
        /* Getting team form values */
        this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe(function (res) {
            _this.team = res.json();
            _this.teamForm.patchValue({ name: _this.team[0].name });
            _this.teamForm.patchValue({ description: _this.team[0].description });
            _this.teamForm.patchValue({ invitemsg: _this.team[0].invitemsg });
            _this.teamForm.patchValue({ color: _this.team[0].color });
        });
    }
    ModifyTeamComponent.prototype.setColor = function (c) {
        this.teamForm.patchValue({ color: c });
    };
    ModifyTeamComponent.prototype.getUsers = function () {
    };
    ModifyTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.teamForm);
        var request = {
            name: this.teamForm.get('name').value,
            description: this.teamForm.get('description').value,
            invitemsg: this.teamForm.get('invitemsg').value,
            color: this.teamForm.get('color').value,
            creatorId: this.auth.getUserId()
        };
        this.http.post('http://localhost:8000/api/modifyteam/' + this.teamId, request).subscribe(function (res) {
            _this.snackBar.open('Team Updated', 'Ok', {
                duration: 3000
            });
        });
        // Send Invites
    };
    ModifyTeamComponent.prototype.onCancel = function () {
        this.snackBar.open('Team Modification Canceled', 'Ok', {
            duration: 3000
        });
        this.teamForm.reset();
        this.router.navigateByUrl('/teams');
    };
    ModifyTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-team',
            template: __webpack_require__(/*! ./modify-team.component.html */ "./src/app/modify-team/modify-team.component.html"),
            styles: [__webpack_require__(/*! ./modify-team.component.css */ "./src/app/modify-team/modify-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ModifyTeamComponent);
    return ModifyTeamComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-space {\n    flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button (click)=\"onPilotPressed()\">\n    Pilot\n  </button>\n\n  <span class=\"fill-space\"></span>\n  \n  <button mat-button (click)=\"onTeamsPressed()\">Teams</button>\n  <button mat-button (click)=\"onMessagesPressed()\">Messaging</button>\n  \n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onTeamsPressed = function () {
        this.router.navigateByUrl('/teams');
    };
    NavigationComponent.prototype.onPilotPressed = function () {
        this.router.navigateByUrl('/');
    };
    NavigationComponent.prototype.onMessagesPressed = function () {
        this.router.navigateByUrl('/messages');
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/new-message/new-message.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-message/new-message.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 96%;\n  }\n\n.button-row button,\n.button-row a {\n  margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/new-message/new-message.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-message/new-message.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Send New Message</h1>\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <form [formGroup]=\"newMessage\" (ngSubmit)=\"onSubmit()\">\n      <!-- Field for Recipient of Message -->\n        <mat-form-field>\n          <input type=\"text\" id=\"to\" matInput placeholder=\"Username\" aria-label=\"User\" formControlName=\"receiver\" [matAutocomplete]=\"auto\"\n            placeholder=\"Recipient Name\" required>\n            <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n\n      <!-- Field for Message Content -->\n      <mat-form-field>\n        <input matInput type=\"text\" formControlName=\"message\" placeholder=\"Message Body\" required>\n      </mat-form-field>\n      <!-- Submit and cancel buttons -->\n      <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" [disabled]=\"!newMessage.valid\" (click)=\"onSubmit\">Send Message</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/new-message/new-message.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-message/new-message.component.ts ***!
  \******************************************************/
/*! exports provided: NewMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageComponent", function() { return NewMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewMessageComponent = /** @class */ (function () {
    //public filteredUsers = this.userForm
    //.get('userInput')
    //.valueChanges
    //.pipe(
    //    debounceTime(300),
    //   switchMap(value => this.appService.search({name : value}, 1))
    //);
    function NewMessageComponent(fb, http, auth, snackBar, location, activatedRoute, router) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.newMessage = this.fb.group({
            receiver: [''],
            message: ['']
        });
        this.options = [];
        this.users = [];
        this.displayedUsers = [];
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.userForm = this.fb.group({
            userInput: null
        });
        this.sender = this.auth.getUserId();
        this.http.get('http://localhost:8000/api/getallusers').subscribe(function (res) {
            _this.users = res.json();
            _this.displayedUsers = _this.users;
            _this.loadOptions();
        });
    }
    NewMessageComponent.prototype.loadOptions = function () {
        this.options = [];
        for (var i = 0; i < this.displayedUsers.length; i++) {
            this.options.push(this.displayedUsers[i].name + '  |  ' + this.displayedUsers[i].email);
        }
    };
    NewMessageComponent.prototype.ngOnInit = function () {
        var input = document.getElementById('to');
        // add event listener to the too field to capture every time the user updates the input
        var that = this;
        input.addEventListener('input', function () {
            console.log(that.newMessage.get('receiver').value);
            that.filterUsers(that.newMessage.get('receiver').value);
        });
    };
    NewMessageComponent.prototype.onSubmit = function () {
        var _this = this;
        //how to get current user's ID and name(email?)
        //receiver and sender given by name or email or uID?
        //get receiving user's name and find his id
        //this.msg = this.newMessage.get('message').value as string;
        //alert(this.newMessage.get('receiver'))
        var recipient = this.newMessage.get('receiver').value;
        var recipientId = -1;
        for (var i = 0; i < this.users.length; i++) {
            if (recipient.includes(this.users[i].name) && recipient.includes(this.users[i].email)) {
                recipientId = this.users[i].id;
            }
        }
        if (recipientId == -1) {
            window.alert('The user could not be found');
            return;
        }
        var request = {
            recipient: recipientId,
            message: this.newMessage.get('message').value,
            sender: this.sender
        };
        if (this.users.find(function (x) { return x.name == _this.receiver; }) != undefined) {
            //user is found in user table
        }
        this.http.post('http://localhost:8000/api/newmessage', request).subscribe(function (res) {
            console.log(res);
        });
    };
    NewMessageComponent.prototype.onCancel = function () {
        this.newMessage.reset();
        this.router.navigateByUrl('/messages');
    };
    NewMessageComponent.prototype.filterUsers = function (exp) {
        this.displayedUsers = [];
        for (var i = 0; i < this.users.length; i++) {
            var n = this.users[i].name;
            var e = this.users[i].email;
            if (n.includes(exp) || e.includes(exp)) {
                this.displayedUsers.push(this.users[i]);
            }
        }
        console.log(this.displayedUsers);
        this.loadOptions();
    };
    NewMessageComponent.prototype.displayFn = function (user) {
        return user ? user : undefined;
    };
    NewMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-message',
            template: __webpack_require__(/*! ./new-message.component.html */ "./src/app/new-message/new-message.component.html"),
            styles: [__webpack_require__(/*! ./new-message.component.css */ "./src/app/new-message/new-message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewMessageComponent);
    return NewMessageComponent;
}());



/***/ }),

/***/ "./src/app/scrum-board/scrum-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/scrum-board/scrum-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 33%;\n}\n\n.heading {\n    margin-bottom: 20px;\n}\n\n.heading-container {\n    width: 100%;\n}\n\n.scrum-card {\n    width: 100%;\n    margin-bottom: 10px;\n    border-radius: 10px;\n}\n\n.table-container {\n    display: flex;\n}\n\n#fill-space {\n    width: 50%;\n}\n\n#not-started {\n    background-color: lightcoral;\n}\n\n#started {\n    background-color: lightgoldenrodyellow;\n}\n\n#completed {\n    background-color: lightgreen;\n}"

/***/ }),

/***/ "./src/app/scrum-board/scrum-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/scrum-board/scrum-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card class=\"heading-container\">\n\t\t\t<h1 class=\"heading\">Scrum Board</h1>\n\t</mat-card>\n\n\t<mat-card>\n\t\t<div class=\"table-container\">\n\t\t\t<table mat-table [dataSource]=\"notStartedTasks\" class=\"mat-elevation-z0\" id=\"not-started\">\n\t\t\t\t\t<ng-container matColumnDef=\"card\" class=\"card-container\">\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Not Started </th>\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\"> \n\t\t\t\t\t\t\t<mat-card class=\"scrum-card\">\n\t\t\t\t\t\t\t\t<mat-card-title>{{element.name}}</mat-card-title>\n\t\t\t\t\t\t\t\t<mat-card-subtitle>{{element.description}}</mat-card-subtitle>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button>Progress</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t\n\t\t\t<table mat-table [dataSource]=\"startedTasks\" class=\"mat-elevation-z0\" id=\"started\">\n\t\t\t\t\t<ng-container matColumnDef=\"card\" class=\"card-container\">\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Started </th>\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\"> \n\t\t\t\t\t\t\t<mat-card class=\"scrum-card\">\n\t\t\t\t\t\t\t\t<mat-card-title>{{element.name}}</mat-card-title>\n\t\t\t\t\t\t\t\t<mat-card-subtitle>{{element.description}}</mat-card-subtitle>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button mat-button>Progress</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t\n\t\t\t<table mat-table [dataSource]=\"completedTasks\" class=\"mat-elevation-z0\" id=\"completed\">\n\t\t\t\t\t<ng-container matColumnDef=\"card\" class=\"card-container\">\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Completed </th>\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\"> \n\t\t\t\t\t\t\t<mat-card class=\"scrum-card\">\n\t\t\t\t\t\t\t\t<mat-card-title>{{element.name}}</mat-card-title>\n\t\t\t\t\t\t\t\t<mat-card-subtitle>{{element.description}}</mat-card-subtitle>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button>Delete</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t</div>\n\t</mat-card>\n\t\n</mat-card>"

/***/ }),

/***/ "./src/app/scrum-board/scrum-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/scrum-board/scrum-board.component.ts ***!
  \******************************************************/
/*! exports provided: ScrumBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumBoardComponent", function() { return ScrumBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "./src/app/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrumBoardComponent = /** @class */ (function () {
    function ScrumBoardComponent(http, auth, state) {
        this.http = http;
        this.auth = auth;
        this.state = state;
        this.signalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tasks = [];
        this.displayedColumns = ['card'];
        this.loadData();
    }
    ScrumBoardComponent.prototype.updateSignal = function () {
        this.signalEvent.emit("SIG_UPDATE_TASKS");
    };
    ScrumBoardComponent.prototype.loadData = function () {
        var _this = this;
        if (this.state.getCurrentStateId() == 0) {
            this.http.get('http://localhost:8000/api/getusertasks/' + this.auth.id).subscribe(function (res) {
                _this.tasks = res.json();
                _this.processTableData();
            });
        }
        else {
            console.log('scrum board is here');
            this.http.get('http://localhost:8000/api/getteamtasks/' + this.state.getCurrentStateId()).subscribe(function (res) {
                _this.tasks = res.json();
                _this.processTableData();
            });
        }
    };
    ScrumBoardComponent.prototype.processTableData = function () {
        this.notStartedTasks = [];
        this.startedTasks = [];
        this.completedTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status == 0) {
                this.notStartedTasks.push(this.tasks[i]);
            }
            else if (this.tasks[i].status == 1) {
                this.startedTasks.push(this.tasks[i]);
            }
            else {
                this.completedTasks.push(this.tasks[i]);
            }
        }
    };
    ScrumBoardComponent.prototype.sortTableName = function () {
        this.tasks.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.notStartedTasks.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.startedTasks.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.completedTasks.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    };
    ScrumBoardComponent.prototype.sortTablePriority = function () {
        this.tasks.sort(function (a, b) { return a.priority - b.priority; });
        this.notStartedTasks.sort(function (a, b) { return a.priority - b.priority; });
        this.startedTasks.sort(function (a, b) { return a.priority - b.priority; });
        this.completedTasks.sort(function (a, b) { return a.priority - b.priority; });
    };
    ScrumBoardComponent.prototype.sortTableStatus = function () {
        this.tasks.sort(function (a, b) { return a.status - b.status; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrumBoardComponent.prototype, "signalEvent", void 0);
    ScrumBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrum-board',
            template: __webpack_require__(/*! ./scrum-board.component.html */ "./src/app/scrum-board/scrum-board.component.html"),
            styles: [__webpack_require__(/*! ./scrum-board.component.css */ "./src/app/scrum-board/scrum-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], ScrumBoardComponent);
    return ScrumBoardComponent;
}());



/***/ }),

/***/ "./src/app/send-message-to-team/send-message-to-team.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/send-message-to-team/send-message-to-team.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/send-message-to-team/send-message-to-team.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/send-message-to-team/send-message-to-team.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  send-message-to-team works!\n</p>\n"

/***/ }),

/***/ "./src/app/send-message-to-team/send-message-to-team.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/send-message-to-team/send-message-to-team.component.ts ***!
  \************************************************************************/
/*! exports provided: SendMessageToTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageToTeamComponent", function() { return SendMessageToTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SendMessageToTeamComponent = /** @class */ (function () {
    function SendMessageToTeamComponent() {
    }
    SendMessageToTeamComponent.prototype.ngOnInit = function () {
    };
    SendMessageToTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-message-to-team',
            template: __webpack_require__(/*! ./send-message-to-team.component.html */ "./src/app/send-message-to-team/send-message-to-team.component.html"),
            styles: [__webpack_require__(/*! ./send-message-to-team.component.css */ "./src/app/send-message-to-team/send-message-to-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SendMessageToTeamComponent);
    return SendMessageToTeamComponent;
}());



/***/ }),

/***/ "./src/app/state.service.ts":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateService = /** @class */ (function () {
    function StateService() {
        this.teamView = false;
        this.teamId = 0;
        this.userView = true;
    }
    StateService.prototype.updateState = function (id) {
        if (id == 0) {
            this.teamId = id;
            this.userView = true;
            this.teamView = false;
        }
        else {
            this.teamId = id;
            this.userView = false;
            this.teamView = true;
        }
    };
    StateService.prototype.getCurrentStateId = function () {
        return this.teamId;
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/teaminvitations/teaminvitations.component.css":
/*!***************************************************************!*\
  !*** ./src/app/teaminvitations/teaminvitations.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/teaminvitations/teaminvitations.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teaminvitations/teaminvitations.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card class=\"heading-container\">\n    <h1 class=\"heading\">My Team Invitations</h1>\n    <hr style=\"width: 100%\"/>\n  </mat-card>\n\n  <mat-card class=\"table-container\">\n    <table mat-table [dataSource]=\"invites\" class=\"mat-elevation-z0\">\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> Id </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <span>{{element.id}}</span>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"senderName\">\n        <th mat-header-cell *matHeaderCellDef> Sender Name </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <span>{{element.senderName}}</span>\n        </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"senderEmail\">\n      <th mat-header-cell *matHeaderCellDef> Sender Email </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <span>{{element.email}}</span>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"teamName\">\n      <th mat-header-cell *matHeaderCellDef> Team Name </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <span>{{element.teamName}}</span>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"teamId\">\n      <th mat-header-cell *matHeaderCellDef> Team Id </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <span>{{element.teamId}}</span>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <button mat-button id=\"element.id\" (click)=\"onAcceptPressed(element.id)\">Accept</button>\n          <button mat-button id=\"element.id\" (click)=\"onDeclinePressed(element.id)\">Decline</button>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  </mat-card>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/teaminvitations/teaminvitations.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teaminvitations/teaminvitations.component.ts ***!
  \**************************************************************/
/*! exports provided: TeaminvitationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaminvitationsComponent", function() { return TeaminvitationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeaminvitationsComponent = /** @class */ (function () {
    function TeaminvitationsComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.signalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.invites = [];
        this.displayedColumns = ['id', 'senderName', 'senderEmail', 'teamName', 'teamId', 'actions'];
        this.loadData();
    }
    TeaminvitationsComponent.prototype.updateSignal = function () {
        this.signalEvent.emit("SIG_UPDATE_INVITES");
    };
    TeaminvitationsComponent.prototype.loadData = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/allrecievedinvites/' + this.auth.getUserId()).subscribe(function (res) {
            _this.invites = res.json();
            console.log(_this.invites);
        });
    };
    TeaminvitationsComponent.prototype.onAcceptPressed = function (inviteId) {
        var _this = this;
        var user = 0;
        var team = 0;
        for (var i = 0; i < this.invites.length; i++) {
            if (this.invites[i].id == inviteId) {
                user = this.auth.getUserId();
                team = this.invites[i].teamId;
                this.http.get('http://localhost:8000/api/addteammember/' + user + '/' + team).subscribe(function (res) {
                    _this.http.get('http://localhost:8000/api/deleteinvite/' + inviteId).subscribe(function (r) {
                        _this.loadData();
                    });
                });
            }
        }
    };
    TeaminvitationsComponent.prototype.onDeclinePressed = function (inviteId) {
        var _this = this;
        for (var i = 0; i < this.invites.length; i++) {
            if (this.invites[i].id == inviteId) {
                this.http.get('http://localhost:8000/api/deleteinvite/' + inviteId).subscribe(function (res) {
                    _this.loadData();
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TeaminvitationsComponent.prototype, "signalEvent", void 0);
    TeaminvitationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teaminvitations',
            template: __webpack_require__(/*! ./teaminvitations.component.html */ "./src/app/teaminvitations/teaminvitations.component.html"),
            styles: [__webpack_require__(/*! ./teaminvitations.component.css */ "./src/app/teaminvitations/teaminvitations.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TeaminvitationsComponent);
    return TeaminvitationsComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#create-team {\n    float: right;\n}\n\n#my-invites {\n    float: right;\n}\n\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card class=\"heading-container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h1 class=\"heading\">Team Management</h1>\n      </div>\n\n      <div class=\"col-md-4\">\n        <button mat-button (click)=\"onCreateTeamClicked()\" id=\"create-team\">Create team</button>\n        <button mat-button (click)=\"onInvitesClicked()\" id=\"my-invites\">My Invite Box</button>\n      </div>\n    </div>\n  </mat-card>\n\n  <mat-card class=\"table-container\">\n    <table mat-table [dataSource]=\"teams\" class=\"mat-elevation-z0\">\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.id}}</span>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.name}}</span>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef> Descriptions </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.description}}</span>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"created\">\n          <th mat-header-cell *matHeaderCellDef> Created </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.created_at}}</span>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <button mat-button style=\"background-color: lightcoral\" id=\"element.id\" (click)=\"onDeletePressed(element.id)\">Delete</button>\n            <button mat-button style=\"background-color: lightblue\" id=\"element.id\" (click)=\"onModifyPressed(element.id)\">Modify</button>\n            <button mat-button style=\"background-color: lightcyan\" id=\"element.id\" (click)=\"onViewPressed(element.id)\">View</button>\n\n          </td>\n        </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(router, http, auth) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.displayedColumns = ['id', 'name', 'description', 'created', 'actions'];
        this.http.get('http://localhost:8000/api/getjoinedteams/' + this.auth.getUserId()).subscribe(function (res) {
            _this.teams = res.json();
        });
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent.prototype.onCreateTeamClicked = function () {
        this.router.navigateByUrl('/createteam');
    };
    TeamsComponent.prototype.onInvitesClicked = function () {
        this.router.navigateByUrl('/invites');
    };
    TeamsComponent.prototype.onDeletePressed = function (id) {
    };
    TeamsComponent.prototype.onModifyPressed = function (id) {
        this.router.navigateByUrl('/modifyteam/' + id);
    };
    TeamsComponent.prototype.onViewPressed = function (id) {
        this.router.navigateByUrl('/viewteam/' + id);
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/user-messages/user-messages.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-messages/user-messages.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/user-messages/user-messages.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-messages/user-messages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n        <h1>User Messages</h1>\n    </div>\n    <div class=\"col-md-4\">\n      <button style=\"float: right;\" mat-button (click)=\"onNewMessagePressed()\">New Message</button>\n    </div>\n  </div>\n  <table mat-table [dataSource]=\"messages\" class=\"mat-elevation-z0\">\n    <ng-container matColumnDef=\"sender\">\n      <th mat-header-cell *matHeaderCellDef> From</th>\n      <td mat-cell *matCellDef=\"let message\"> {{message.sender}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef> Message</th>\n      <td mat-cell *matCellDef=\"let message\"> {{message.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          <button mat-button style=\"background-color: lightblue;\" id=\"element.id\" (click)=\"onReplyPressed(element.senderId)\">Respond</button>\n          <button mat-button style=\"background-color: lightcoral;\" id=\"element.id\" (click)=\"onDeletePressed(element.id)\">Delete</button>\n        </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/user-messages/user-messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-messages/user-messages.component.ts ***!
  \**********************************************************/
/*! exports provided: UserMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMessagesComponent", function() { return UserMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserMessagesComponent = /** @class */ (function () {
    function UserMessagesComponent(fb, http, auth, snackBar, activatedRoute, router) {
        this.fb = fb;
        this.http = http;
        this.auth = auth;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.messages = [];
        this.displayedColumns = ['sender', 'message', 'actions'];
        //get uID, get from 'message' table where id = uID
        this.uID = this.auth.getUserId();
        //this.uID = 1;
        //alert(this.uID);
        this.loadMessages();
    }
    UserMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getmessages/' + this.uID).subscribe(function (res) {
            //this.http.get('http://localhost:8000/api/getmessages').subscribe((res) => {
            console.log(res);
            _this.messages = res.json();
            _this.checkExpiredMessages();
        });
    };
    UserMessagesComponent.prototype.checkExpiredMessages = function () {
        for (var i = 0; i < this.messages.length; i++) {
            console.log(this.messages[i].created_at);
            var date = new Date(this.messages[i].created_at);
            var todayDate = new Date(Date.parse(Date()));
            var seconds = (todayDate.getTime() - date.getTime()) / 1000;
            // on week delete condition
            if (seconds > 604800) {
                this.onDeletePressed(this.messages[i].id);
            }
        }
    };
    UserMessagesComponent.prototype.onNewMessagePressed = function () {
        this.router.navigateByUrl('/newmessage');
    };
    UserMessagesComponent.prototype.onReplyPressed = function ($id) {
        this.router.navigateByUrl('/sendmessagetouser/' + $id);
    };
    UserMessagesComponent.prototype.onDeletePressed = function (id) {
        var _this = this;
        this.http.get('http://localhost:8000/api/deletemessage/' + id).subscribe(function (res) {
            _this.loadMessages();
        });
    };
    UserMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-messages',
            template: __webpack_require__(/*! ./user-messages.component.html */ "./src/app/user-messages/user-messages.component.html"),
            styles: [__webpack_require__(/*! ./user-messages.component.css */ "./src/app/user-messages/user-messages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserMessagesComponent);
    return UserMessagesComponent;
}());



/***/ }),

/***/ "./src/app/view-team/view-team.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-team/view-team.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invite {\n    float: right;\n}\n\nmat-card {\n    width: 100%;\n}\n\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/view-team/view-team.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-team/view-team.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card class=\"heading-container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n          <h1 class=\"heading\">{{teamName}}</h1>\n          <hr style=\"widht: 100%\" />\n          <h4>{{teamDescription}}</h4>\n      </div>\n      <div class=\"col-md-4\">\n          <button mat-button id=\"invite\" (click)=\"onInviteUsers()\">Invite Users</button>\n      </div>\n    </div>\n    \n  </mat-card>\n\n  <mat-card class=\"table-container\" *ngIf=\"users\">\n      <table mat-table [dataSource]=\"users\" class=\"mat-elevation-z0\">\n      <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> Id </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.id}}</span>\n          </td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span>{{element.memberName}}</span>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef> Email </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span>{{element.email}}</span>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"role\">\n              <th mat-header-cell *matHeaderCellDef> Role </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span>{{element.role}}</span>\n              </td>\n            </ng-container>\n        \n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <button mat-button style=\"background-color: lightgreen\" id=\"element.id\" (click)=\"onManageRolePressed(element.id)\"\n            *ngIf=\"canChangeRole\"\n            >Manage</button>\n            <button  mat-button style=\"background-color: lightblue\" id=\"element.id\" (click)=\"onMessagePressed(element.id)\"\n            >Message</button>\n            <button  mat-button id=\"element.id\" style=\"background-color: lightcoral\" (click)=\"onDeletePressed(element.id)\"\n            *ngIf=\"canKick\"\n            >Kick</button>\n          </td>\n        </ng-container>\n    \n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      \n      \n      </table>\n    </mat-card>\n</mat-card>\n\n\n\n"

/***/ }),

/***/ "./src/app/view-team/view-team.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-team/view-team.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTeamComponent", function() { return ViewTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTeamComponent = /** @class */ (function () {
    function ViewTeamComponent(activatedRoute, router, http, snackBar, auth) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.auth = auth;
        this.teamName = "";
        this.teamDescription = "";
        this.displayedColumns = ['id', 'name', 'email', 'role', 'actions'];
        this.canKick = false;
        this.canChangeRole = false;
        this.canMessage = false;
        this.signalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
        this.http.get('http://localhost:8000/api/getteam/' + this.teamId).subscribe(function (res) {
            console.log(res.json);
            var temp = res.json();
            _this.team = temp[0];
            _this.teamName = _this.team.name;
            _this.teamDescription = _this.team.description;
            console.log(_this.teamName);
            _this.getTeamMembers();
            _this.loadViewingPermissions();
        });
        this.dialog = _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"];
    }
    ViewTeamComponent.prototype.loadViewingPermissions = function () {
        var _this = this;
        var request = {
            teamid: this.teamId,
            userid: '' + this.auth.getUserId()
        };
        console.log('yes' + request);
        this.http.post('http://localhost:8000/api/getrole', request).subscribe(function (res) {
            var temp = res.json();
            if (temp.length > 0) {
                _this.role = temp[0].role;
                console.log(_this.role);
                if (_this.role == 'Owner') {
                    _this.canChangeRole = true;
                    _this.canKick = true;
                }
                else if (_this.role == 'Manager') {
                    _this.canKick = true;
                }
                else {
                }
            }
        });
    };
    ViewTeamComponent.prototype.getTeamMembers = function () {
        var _this = this;
        this.http.get('http://localhost:8000/api/getteammembers/' + this.teamId).subscribe(function (res) {
            _this.users = res.json();
            console.log(_this.users);
        });
    };
    ViewTeamComponent.prototype.updateSignal = function () {
        this.signalEvent.emit("SIG_UPDATE_TASKS");
    };
    ViewTeamComponent.prototype.onDeletePressed = function (id) {
        var _this = this;
        if (confirm('Are you sure you want to remove this team member?')) {
            this.http.get('http://localhost:8000/api/teamremove/' + id + '/' + this.teamId).subscribe(function (res) {
                _this.snackBar.open('Member removed', 'Ok', {
                    duration: 3000
                });
                _this.getTeamMembers();
            });
        }
    };
    ViewTeamComponent.prototype.onMessagePressed = function (id) {
        this.router.navigateByUrl('/sendmessagetouser/' + id);
    };
    ViewTeamComponent.prototype.onManageRolePressed = function (id) {
        this.router.navigateByUrl('/managerole/' + id + '/' + this.teamId);
    };
    ViewTeamComponent.prototype.ngOnInit = function () {
    };
    ViewTeamComponent.prototype.onInviteUsers = function () {
        this.router.navigateByUrl('/inviteToTeam/' + this.teamId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewTeamComponent.prototype, "signalEvent", void 0);
    ViewTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-team',
            template: __webpack_require__(/*! ./view-team.component.html */ "./src/app/view-team/view-team.component.html"),
            styles: [__webpack_require__(/*! ./view-team.component.css */ "./src/app/view-team/view-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ViewTeamComponent);
    return ViewTeamComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/dmorton/Documents/dev/Angular/Pilot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map