module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ \"pusher-js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMessage */ \"./components/ChatMessage.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst SAD_EMOJI = [55357, 56864];\nconst HAPPY_EMOJI = [55357, 56832];\nconst NEUTRAL_EMOJI = [55357, 56848];\n\nclass Chat extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      chats: []\n    });\n\n    _defineProperty(this, \"handleKeyUp\", evt => {\n      const value = evt.target.value;\n\n      if (evt.keyCode === 13 && !evt.shiftKey) {\n        const {\n          activeUser: user\n        } = this.props;\n        const chat = {\n          user,\n          message: value,\n          timestamp: +new Date()\n        };\n        evt.target.value = '';\n        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/message', chat);\n      }\n    });\n  }\n\n  componentDidMount() {\n    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a(\"55a78fe8ba296492e83c\", {\n      cluster: \"ap2\",\n      encrypted: true\n    });\n    this.channel = this.pusher.subscribe('chat-room');\n    this.channel.bind('new-message', ({\n      chat = null\n    }) => {\n      const {\n        chats\n      } = this.state;\n      chat && chats.push(chat);\n      this.setState({\n        chats\n      });\n    });\n    this.pusher.connection.bind('connected', () => {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/messages').then(response => {\n        const chats = response.data.messages;\n        this.setState({\n          chats\n        });\n      });\n    });\n  }\n\n  componentWillUnmount() {\n    this.pusher.disconnect();\n  }\n\n  render() {\n    return this.props.activeUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(\"div\", {\n      className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n      style: {\n        height: 90\n      }\n    }, __jsx(\"h2\", {\n      className: \"text-dark mb-0 mx-4 px-2\"\n    }, this.props.activeUser)), __jsx(\"div\", {\n      className: \"px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative\",\n      style: {\n        height: 'calc(100% - 180px)',\n        overflowY: 'scroll'\n      }\n    }, this.state.chats.map((chat, index) => {\n      const previous = Math.max(0, index - 1);\n      const previousChat = this.state.chats[previous];\n      const position = chat.user === this.props.activeUser ? \"right\" : \"left\";\n      const isFirst = previous === index;\n      const inSequence = chat.user === previousChat.user;\n      const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;\n      const mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        key: index\n      }, (isFirst || !inSequence || hasDelay) && __jsx(\"div\", {\n        className: `d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`,\n        style: {\n          fontSize: '0.9rem'\n        }\n      }, __jsx(\"span\", {\n        className: \"d-block\",\n        style: {\n          fontSize: '1.6rem'\n        }\n      }, String.fromCodePoint(...mood)), __jsx(\"span\", null, chat.user || 'Anonymous')), __jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        message: chat.message,\n        position: position\n      }));\n    })), __jsx(\"div\", {\n      className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n      style: {\n        minHeight: 90\n      }\n    }, __jsx(\"textarea\", {\n      className: \"form-control px-3 py-2\",\n      onKeyUp: this.handleKeyUp,\n      placeholder: \"Enter a chat message\",\n      style: {\n        resize: 'none'\n      }\n    })));\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQuanM/ZGVlZiJdLCJuYW1lcyI6WyJTQURfRU1PSkkiLCJIQVBQWV9FTU9KSSIsIk5FVVRSQUxfRU1PSkkiLCJDaGF0IiwiQ29tcG9uZW50IiwiY2hhdHMiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleUNvZGUiLCJzaGlmdEtleSIsImFjdGl2ZVVzZXIiLCJ1c2VyIiwicHJvcHMiLCJjaGF0IiwibWVzc2FnZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJheGlvcyIsInBvc3QiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2hlciIsIlB1c2hlciIsInByb2Nlc3MiLCJjbHVzdGVyIiwiZW5jcnlwdGVkIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJzdGF0ZSIsInB1c2giLCJzZXRTdGF0ZSIsImNvbm5lY3Rpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRpc2Nvbm5lY3QiLCJyZW5kZXIiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJtYXAiLCJpbmRleCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsInByZXZpb3VzQ2hhdCIsInBvc2l0aW9uIiwiaXNGaXJzdCIsImluU2VxdWVuY2UiLCJoYXNEZWxheSIsImNlaWwiLCJtb29kIiwic2VudGltZW50IiwiZm9udFNpemUiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwibWluSGVpZ2h0IiwiaGFuZGxlS2V5VXAiLCJyZXNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBbEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQXRCOztBQUVBLE1BQU1DLElB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VSxlQUFTLEVBQUMsd0JBQXBCO0FBQTZDLGFBQU8sRUFBRSxLQUFLQyxXQUEzRDtBQUF3RSxpQkFBVyxFQUFDLHNCQUFwRjtBQUEyRyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVY7QUFBbEgsTUFERixDQTdCK0IsQ0FBakM7QUFpQ0Q7O0FBN0UwQjs7QUErRTVCO0FBRWN6RCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tICcuL0NoYXRNZXNzYWdlJztcblxuY29uc3QgU0FEX0VNT0pJID0gWzU1MzU3LCA1Njg2NF07XG5jb25zdCBIQVBQWV9FTU9KSSA9IFs1NTM1NywgNTY4MzJdO1xuY29uc3QgTkVVVFJBTF9FTU9KSSA9IFs1NTM1NywgNTY4NDhdO1xuXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgY2hhdHM6IFtdIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIocHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9LRVksIHtcbiAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcbiAgICAgIGVuY3J5cHRlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdjaGF0LXJvb20nKTtcblxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctbWVzc2FnZScsICh7IGNoYXQgPSBudWxsIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZXMnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hhdHMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzICYmICFldnQuc2hpZnRLZXkpIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGNoYXQgPSB7IHVzZXIsIG1lc3NhZ2U6IHZhbHVlLCB0aW1lc3RhbXA6ICtuZXcgRGF0ZSB9O1xuICAgICAgXG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZScsIGNoYXQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuYWN0aXZlVXNlciAmJiA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiIHN0eWxlPXt7IGhlaWdodDogOTAgfX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbWItMCBteC00IHB4LTJcIj57dGhpcy5wcm9wcy5hY3RpdmVVc2VyfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBwYi00IHctMTAwIGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1zdGFydCBwb3NpdGlvbi1yZWxhdGl2ZVwiIHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwJSAtIDE4MHB4KScsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNoYXRzLm1hcCgoY2hhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IE1hdGgubWF4KDAsIGluZGV4IC0gMSk7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gdGhpcy5zdGF0ZS5jaGF0c1twcmV2aW91c107XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjaGF0LnVzZXIgPT09IHRoaXMucHJvcHMuYWN0aXZlVXNlciA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xuXG4gICAgICAgICAgY29uc3QgaXNGaXJzdCA9IHByZXZpb3VzID09PSBpbmRleDtcbiAgICAgICAgICBjb25zdCBpblNlcXVlbmNlID0gY2hhdC51c2VyID09PSBwcmV2aW91c0NoYXQudXNlcjtcbiAgICAgICAgICBjb25zdCBoYXNEZWxheSA9IE1hdGguY2VpbCgoY2hhdC50aW1lc3RhbXAgLSBwcmV2aW91c0NoYXQudGltZXN0YW1wKSAvICgxMDAwICogNjApKSA+IDE7XG5cbiAgICAgICAgICBjb25zdCBtb29kID0gY2hhdC5zZW50aW1lbnQgPiAwID8gSEFQUFlfRU1PSkkgOiAoY2hhdC5zZW50aW1lbnQgPT09IDAgPyBORVVUUkFMX0VNT0pJIDogU0FEX0VNT0pJKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHsgKGlzRmlyc3QgfHwgIWluU2VxdWVuY2UgfHwgaGFzRGVsYXkpICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGQtYmxvY2sgdy0xMDAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWRhcmsgbXQtNCBwYi0xIHB4LTEgdGV4dC0ke3Bvc2l0aW9ufWB9IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45cmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIiBzdHlsZT17eyBmb250U2l6ZTogJzEuNnJlbScgfX0+e1N0cmluZy5mcm9tQ29kZVBvaW50KC4uLm1vb2QpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGF0LnVzZXIgfHwgJ0Fub255bW91cyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgPENoYXRNZXNzYWdlIG1lc3NhZ2U9e2NoYXQubWVzc2FnZX0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1ncmF5IHctMTAwIHB4LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodFwiIHN0eWxlPXt7IG1pbkhlaWdodDogOTAgfX0+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PiApXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Chat.js\n");

/***/ }),

/***/ "./components/ChatMessage.js":
/*!***********************************!*\
  !*** ./components/ChatMessage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass ChatMessage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const {\n      position = 'left',\n      message\n    } = this.props;\n    const isRight = position.toLowerCase() === 'right';\n    const align = isRight ? 'text-right' : 'text-left';\n    const justify = isRight ? 'justify-content-end' : 'justify-content-start';\n    return __jsx(\"div\", {\n      className: `w-100 my-1 d-flex ${justify}`\n    }, __jsx(\"div\", {\n      className: \"bg-light rounded border border-gray p-2\",\n      style: {\n        maxWidth: '70%',\n        flexGrow: 0\n      }\n    }, __jsx(\"span\", {\n      className: `d-block text-secondary ${align}`,\n      style: {\n        fontWeight: 500,\n        lineHeight: 1.4,\n        whiteSpace: 'pre-wrap'\n      }\n    }, this.props.message)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMessage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlLmpzP2FjZjQiXSwibmFtZXMiOlsiQ2hhdE1lc3NhZ2UiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1lc3NhZ2UiLCJwcm9wcyIsImlzUmlnaHQiLCJ0b0xvd2VyQ2FzZSIsImFsaWduIiwianVzdGlmeSIsIm1heFdpZHRoIiwiZmxleEdyb3ciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQywrQ0FBMUIsQ0FBb0M7QUFFbENDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsY0FBUSxHQUFHLE1BQWI7QUFBcUJDO0FBQXJCLFFBQWlDLEtBQUtDLEtBQTVDO0FBQ0EsVUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLFdBQVQsT0FBMkIsT0FBM0M7QUFFQSxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sR0FBRyxZQUFILEdBQWtCLFdBQXZDO0FBQ0EsVUFBTUcsT0FBTyxHQUFHSCxPQUFPLEdBQUcscUJBQUgsR0FBMkIsdUJBQWxEO0FBRUEsV0FBTztBQUFLLGVBQVMsRUFBRyxxQkFBb0JHLE9BQVE7QUFBN0MsT0FDTDtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUF5RCxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBUSxFQUFFO0FBQTdCO0FBQWhFLE9BQ0U7QUFBTSxlQUFTLEVBQUcsMEJBQXlCSCxLQUFNLEVBQWpEO0FBQW9ELFdBQUssRUFBRTtBQUFFSSxrQkFBVSxFQUFFLEdBQWQ7QUFBbUJDLGtCQUFVLEVBQUUsR0FBL0I7QUFBb0NDLGtCQUFVLEVBQUU7QUFBaEQ7QUFBM0QsT0FBMEgsS0FBS1QsS0FBTCxDQUFXRCxPQUFySSxDQURGLENBREssQ0FBUDtBQUtEOztBQWRpQzs7QUFrQnJCSiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDaGF0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24gPSAnbGVmdCcsIG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNSaWdodCA9IHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCc7XG5cbiAgICBjb25zdCBhbGlnbiA9IGlzUmlnaHQgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0JztcbiAgICBjb25zdCBqdXN0aWZ5ID0gaXNSaWdodCA/ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyA6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdy0xMDAgbXktMSBkLWZsZXggJHtqdXN0aWZ5fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheSBwLTJcIiBzdHlsZT17eyBtYXhXaWR0aDogJzcwJScsIGZsZXhHcm93OiAwIH19PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BkLWJsb2NrIHRleHQtc2Vjb25kYXJ5ICR7YWxpZ259YH0gc3R5bGU9e3sgZm9udFdlaWdodDogNTAwLCBsaW5lSGVpZ2h0OiAxLjQsIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0+e3RoaXMucHJvcHMubWVzc2FnZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatMessage.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"meta\", {\n  charSet: \"utf-8\"\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n}), __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n  integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n  crossOrigin: \"anonymous\"\n}), __jsx(\"title\", null, props.pageTitle || 'Realtime Chat')), props.children);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxLQUFLLElBQ2xCLE1BQUMsOENBQUQsUUFDRSxNQUFDLGdEQUFELFFBQ0U7QUFBTSxTQUFPLEVBQUM7QUFBZCxFQURGLEVBRUU7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUM7QUFBOUIsRUFGRixFQUdFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLHVFQUE1QjtBQUFvRyxXQUFTLEVBQUMseUVBQTlHO0FBQXdMLGFBQVcsRUFBQztBQUFwTSxFQUhGLEVBSUUscUJBQVFBLEtBQUssQ0FBQ0MsU0FBTixJQUFtQixlQUEzQixDQUpGLENBREYsRUFPR0QsS0FBSyxDQUFDRSxRQVBULENBREY7O0FBWWVILHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdSZWFsdGltZSBDaGF0J308L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat */ \"./components/Chat.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* pages/index.js */\n\n\n\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      user: null\n    });\n\n    _defineProperty(this, \"handleKeyUp\", evt => {\n      if (evt.keyCode === 13) {\n        const user = evt.target.value;\n        this.setState({\n          user\n        });\n      }\n    });\n  }\n\n  render() {\n    const {\n      user\n    } = this.state;\n    const nameInputStyles = {\n      background: 'transparent',\n      color: '#999',\n      border: 0,\n      borderBottom: '1px solid #666',\n      borderRadius: 0,\n      fontSize: '3rem',\n      fontWeight: 500,\n      boxShadow: 'none !important'\n    };\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      pageTitle: \"Realtime Chat\"\n    }, __jsx(\"main\", {\n      className: \"container-fluid position-absolute h-100 bg-dark\"\n    }, __jsx(\"div\", {\n      className: \"row position-absolute w-100 h-100\"\n    }, __jsx(\"section\", {\n      className: \"col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5\"\n    }, __jsx(\"div\", {\n      className: \"px-5 mx-5\"\n    }, __jsx(\"span\", {\n      className: \"d-block w-100 h1 text-light\",\n      style: {\n        marginTop: -50\n      }\n    }, user ? __jsx(\"span\", null, __jsx(\"span\", {\n      style: {\n        color: '#999'\n      }\n    }, \"Hello!\"), \" \", user) : `What is your name?`), !user && __jsx(\"input\", {\n      type: \"text\",\n      className: \"form-control mt-3 px-3 py-2\",\n      onKeyUp: this.handleKeyUp,\n      autoComplete: \"off\",\n      style: nameInputStyles\n    }))), __jsx(\"section\", {\n      className: \"col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0\"\n    }, user && __jsx(_components_Chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      activeUser: user\n    })))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(IndexPage, null));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIkNvbXBvbmVudCIsInVzZXIiLCJldnQiLCJrZXlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwibmFtZUlucHV0U3R5bGVzIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYm94U2hhZG93IiwibWFyZ2luVG9wIiwiaGFuZGxlS2V5VXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLFNBQU4sU0FBd0JDLCtDQUF4QixDQUFrQztBQUFBO0FBQUE7O0FBQUEsbUNBRXhCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBRndCOztBQUFBLHlDQUlsQkMsR0FBRyxJQUFJO0FBQ25CLFVBQUlBLEdBQUcsQ0FBQ0MsT0FBSixLQUFnQixFQUFwQixFQUF3QjtBQUN0QixjQUFNRixJQUFJLEdBQUlDLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxLQUF6QjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFTDtBQUFGLFNBQWQ7QUFDRDtBQUNGLEtBVCtCO0FBQUE7O0FBV2hDTSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVOO0FBQUYsUUFBVyxLQUFLTyxLQUF0QjtBQUVBLFVBQU1DLGVBQWUsR0FBRztBQUN0QkMsZ0JBQVUsRUFBRSxhQURVO0FBRXRCQyxXQUFLLEVBQUUsTUFGZTtBQUd0QkMsWUFBTSxFQUFFLENBSGM7QUFJdEJDLGtCQUFZLEVBQUUsZ0JBSlE7QUFLdEJDLGtCQUFZLEVBQUUsQ0FMUTtBQU10QkMsY0FBUSxFQUFFLE1BTlk7QUFPdEJDLGdCQUFVLEVBQUUsR0FQVTtBQVF0QkMsZUFBUyxFQUFFO0FBUlcsS0FBeEI7QUFXQSxXQUNFLE1BQUMsMERBQUQ7QUFBUSxlQUFTLEVBQUM7QUFBbEIsT0FFRTtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUVFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FFRTtBQUFTLGVBQVMsRUFBQztBQUFuQixPQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FFRTtBQUFNLGVBQVMsRUFBQyw2QkFBaEI7QUFBOEMsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUUsQ0FBQztBQUFiO0FBQXJELE9BRUlqQixJQUFJLEdBQ0Msb0JBQ0M7QUFBTSxXQUFLLEVBQUU7QUFBQ1UsYUFBSyxFQUFFO0FBQVI7QUFBYixnQkFERCxPQUM4Q1YsSUFEOUMsQ0FERCxHQUlDLG9CQU5ULENBRkYsRUFZSSxDQUFDQSxJQUFELElBQVM7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFTLEVBQUMsNkJBQTdCO0FBQTJELGFBQU8sRUFBRSxLQUFLa0IsV0FBekU7QUFBc0Ysa0JBQVksRUFBQyxLQUFuRztBQUF5RyxXQUFLLEVBQUVWO0FBQWhILE1BWmIsQ0FERixDQUZGLEVBb0JFO0FBQVMsZUFBUyxFQUFDO0FBQW5CLE9BQ01SLElBQUksSUFBSSxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUE7QUFBbEIsTUFEZCxDQXBCRixDQUZGLENBRkYsQ0FERjtBQW1DRDs7QUE1RCtCOztBQWdFbkIscUVBQ2IsTUFBQyxTQUFELE9BREYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8qIHBhZ2VzL2luZGV4LmpzICovXG5cbiAgICBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuICAgIGltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XG4gICAgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgICAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxuXG4gICAgICBoYW5kbGVLZXlVcCA9IGV2dCA9PiB7XG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gIGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXIgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgbmFtZUlucHV0U3R5bGVzID0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgY29sb3I6ICcjOTk5JyxcbiAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM2NjYnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lICFpbXBvcnRhbnQnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIENoYXRcIj5cblxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBvc2l0aW9uLWFic29sdXRlIGgtMTAwIGJnLWRhcmtcIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG14LTVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGgxIHRleHQtbGlnaHRcIiBzdHlsZT17e21hcmdpblRvcDogLTUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICg8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjOTk5J319PkhlbGxvITwvc3Bhbj4ge3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgV2hhdCBpcyB5b3VyIG5hbWU/YFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgIXVzZXIgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9e25hbWVJbnB1dFN0eWxlc30gLz4gfVxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdXNlciAmJiA8Q2hhdCBhY3RpdmVVc2VyPXt1c2VyfSAvPiB9XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICAgIDxJbmRleFBhZ2UgLz5cbiAgICApOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/realtime-chat-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pusher-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIj9iMmQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InB1c2hlci1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1c2hlci1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pusher-js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });