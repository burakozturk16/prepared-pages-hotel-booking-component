(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["HotelBooking"] = factory(require("react"));
	else
		root["HotelBooking"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HotelCard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./HotelCard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'HotelCard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HotelCard).default;
	  }
	});

	var _RoomCard = __webpack_require__(2);

	Object.defineProperty(exports, 'RoomCard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RoomCard).default;
	  }
	});

	var _PriceCard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PriceCard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'PriceCard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PriceCard).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _PriceCard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PriceCard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _PriceCard2 = _interopRequireDefault(_PriceCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RoomCard = function (_React$Component) {
	    _inherits(RoomCard, _React$Component);

	    function RoomCard(props) {
	        _classCallCheck(this, RoomCard);

	        return _possibleConstructorReturn(this, (RoomCard.__proto__ || Object.getPrototypeOf(RoomCard)).call(this, props));
	    }

	    _createClass(RoomCard, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                "div",
	                { className: "roomCard" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "p-2 listing-child mt-1 d-flex flex-row" },
	                    _react2.default.createElement("img", { src: this.props.photo, className: "rounded", style: { cursor: this.props.onClickRoomImage ? 'pointer' : '' }, width: 150, onClick: function onClick() {
	                            if (typeof _this2.props.onClickRoomImage === "function") {
	                                _this2.props.onClickRoomImage(_this2.props.hotelId, _this2.props.id, _this2.props.photo);
	                            }
	                        } }),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "d-flex flex-column ml-2" },
	                        _react2.default.createElement(
	                            "h5",
	                            null,
	                            this.props.title
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "d-flex flex-row room-spec" },
	                            this.props.features && this.props.features.map(function (feature, index) {
	                                return _react2.default.createElement(
	                                    "span",
	                                    { key: "featureRow_" + index },
	                                    _react2.default.createElement("i", { className: feature.icon + " text-muted" }),
	                                    " ",
	                                    feature.title
	                                );
	                            })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "d-flex flex-row" },
	                            this.props.extraInfoComponent
	                        )
	                    )
	                ),
	                this.props.prices && this.props.prices.map(function (row, index) {
	                    return _react2.default.createElement(_PriceCard2.default, {
	                        key: "priceCardRow" + index,
	                        hotelId: _this2.props.hotelId,
	                        roomId: _this2.props.id,
	                        id: row.id,
	                        price: row.price,
	                        showAccommodationInfo: row.showAccommodationInfo,
	                        selected: row.selected,
	                        nightCount: row.nightCount,
	                        moonIcon: row.moonIcon,
	                        adultCount: row.adultCount,
	                        adultIcon: row.adultIcon,
	                        childCount: row.childCount,
	                        childIcon: row.childIcon,
	                        showMoonIcon: row.showMoonIcon,
	                        showAdultIcon: row.showAdultIcon,
	                        showChildIcon: row.showChildIcon,
	                        features: row.features,
	                        showMoreInfoButton: row.showMoreInfoButton,
	                        moreInfoButtonTitle: row.moreInfoButtonTitle,
	                        customMoreInfoButtonComponent: row.customMoreInfoButtonComponent,
	                        onClickPriceMoreInfo: _this2.props.onClickPriceMoreInfo,
	                        onSelectPrice: _this2.props.onSelectPrice
	                    });
	                }),
	                !this.props.prices && this.props.children
	            );
	        }
	    }]);

	    return RoomCard;
	}(_react2.default.Component);

	RoomCard.defaultProps = {
	    id: null,
	    photo: null,
	    title: null,
	    features: null,
	    extraInfoComponent: null,
	    prices: null,
	    onClickRoomImage: null,
	    onSelectPrice: null,
	    onClickPriceMoreInfo: null
	};

	exports.default = RoomCard;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ])
});
;