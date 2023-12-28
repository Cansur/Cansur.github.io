/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/router/db.js":
/*!**************************!*\
  !*** ./src/router/db.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mysql      = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar connection = mysql.createConnection({\r\n  host     : 'localhost',\r\n  user     : 'root',\r\n  password : 'thtmfl_1',\r\n  database : 'my_db'\r\n});\r\n \r\n// connection.connect();\r\n \r\nconnection.query('SELECT * FROM users', function (error, results, fields) {\r\n  if (error) console.error(error);\r\n  // console.log('연결 성공 : ', results);\r\n  console.log('연결 성공');\r\n});\r\n \r\n// connection.end();\r\n\r\nmodule.exports = connection;\n\n//# sourceURL=webpack://nodejstest/./src/router/db.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\n\r\nrouter.get('/', function (req, res) {\r\n    res.render('index.ejs');\r\n});\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://nodejstest/./src/router/index.js?");

/***/ }),

/***/ "./src/router/login.js":
/*!*****************************!*\
  !*** ./src/router/login.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst db = __webpack_require__(/*! ./db */ \"./src/router/db.js\");\r\n\r\n// Body-parser for express\r\nrouter.use(express.json()); \r\nrouter.use(express.urlencoded({ extended: false }));\r\n\r\nrouter.get('/', function (req, res) {\r\n    // db.query('SELECT * FROM member_table', function(err, results, fields) {\r\n    //     if(err) console.error(err);\r\n    //     // console.log(results);\r\n    //     res.render('login', {data: results});\r\n    // });\r\n    res.render('login');\r\n});\r\n\r\nrouter.post('/', (req, res) => {\r\n    let id = req.body.id;\r\n    let password = req.body.password;\r\n    db.query('select * from users', function(err, results, fields) {\r\n        let bool = Boolean(false);\r\n        for(i = 0; i < results.length; i++){\r\n            if(results[i].id == id){\r\n                if(results[i].password == password){\r\n                    console.log('로그인 완료');\r\n                    bool = true;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        if(bool == false)   console.log('아니잖아!!');\r\n    });\r\n    // db.query(sql, function(err, result, fields) {\r\n    //     if(err) throw err;\r\n    //     console.log(result[0]);\r\n    // });\r\n});\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://nodejstest/./src/router/login.js?");

/***/ }),

/***/ "./src/router/users.js":
/*!*****************************!*\
  !*** ./src/router/users.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst db = __webpack_require__(/*! ./db */ \"./src/router/db.js\");\r\n\r\nrouter.get('/', function (req, res) {\r\n    db.query('SELECT * FROM member_table', function(err, results, fields) {\r\n        if(err) console.error(err);\r\n        // console.log(results);\r\n        res.render('users', {data: results});\r\n    });\r\n    \r\n});\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://nodejstest/./src/router/users.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const http = __webpack_require__(/*! http */ \"http\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\n\r\n// Routers\r\nconst indexRoutes = __webpack_require__(/*! ./router/index */ \"./src/router/index.js\");\r\nconst usersRoutes = __webpack_require__(/*! ./router/users */ \"./src/router/users.js\");\r\nconst loginRoutes = __webpack_require__(/*! ./router/login */ \"./src/router/login.js\");\r\nconst db = __webpack_require__(/*! ./router/db */ \"./src/router/db.js\");\r\n\r\n// express\r\nconst app = express();\r\nconst server = http.createServer(app);\r\n\r\n// ejs\r\napp.set('view engine', 'ejs');\r\n\r\n// configuration =================================================================\r\nserver.listen(8080, function(){\r\n    console.log('listening on port 8080');\r\n});\r\n\r\napp.use('/', indexRoutes);\r\n\r\napp.use('/Users', usersRoutes);\r\n\r\napp.use('/login', loginRoutes);\r\n\r\napp.get('/test', (req, res)=>{\r\n    db.query('SELECT * FROM member_table', (err, result) => {\r\n        if(err) console.error(err);\r\n        res.render('test.ejs', {data: result});\r\n    });\r\n});\r\n\r\n\r\n// 간편 시작하기\r\n// cd /d/Cansur/nodejsTest/src\r\n// nodemon server.js\n\n//# sourceURL=webpack://nodejstest/./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;