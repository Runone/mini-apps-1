"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// import forms from '../client/components/forms';
// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      formData: {
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        CC: '',
        Exp: '',
        CVV: '',
        BillingZip: '',
        phoneNumber: '',
        nextButton: false,
        purchaseButton: false,
        isCheckedOut: false
      },
      page: 0
    };
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "nextPage",
    value: function nextPage() {
      this.setState({
        page: this.state.page + 1
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      this.setState({});
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.page === 0) {
        return React.createElement("container", null, React.createElement("h2", null, "Home Page"), React.createElement("button", {
          onClick: this.nextPage
        }, "Checkout"));
      } else if (this.state.page === 1) {
        return React.createElement("div", null, React.createElement("container", null, React.createElement("h2", null, "Account Creation"), React.createElement("h3", null, "Name:", React.createElement("input", {
          placeholder: "Name"
        })), React.createElement("h3", null, "Email:", React.createElement("input", {
          placeholder: "Email"
        })), React.createElement("h3", null, "Password:", React.createElement("input", {
          placeholder: "Password"
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next")));
      } else if (this.state.page === 2) {
        return React.createElement("container", null, React.createElement("h2", null, "Ship Address"), React.createElement("h3", null, "Address:", React.createElement("input", {
          placeholder: "Address"
        })), React.createElement("h3", null, "City:", React.createElement("input", {
          placeholder: "City"
        })), React.createElement("h3", null, "State:", React.createElement("input", {
          placeholder: "State"
        })), React.createElement("h3", null, "Zip Code:", React.createElement("input", {
          placeholder: "Zip Code"
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next"));
      } else if (this.state.page === 3) {
        return React.createElement("container", null, React.createElement("h2", null, "Credit Card Info"), React.createElement("h3", null, "CC#:", React.createElement("input", {
          placeholder: "CC#"
        })), React.createElement("h3", null, "Expiration:", React.createElement("input", {
          placeholder: "Expiration"
        })), React.createElement("h3", null, "Billing Zip Code:", React.createElement("input", {
          placeholder: "Billing Zip Code"
        })), React.createElement("button", {
          onClick: this.nextPage
        }, "Next"));
      } else if (this.state.page === 4) {
        return React.createElement("container", null, React.createElement("h2", null, "Confirmation"), React.createElement("button", {
          onClick: this.nextPage
        }, "Purchase"));
      }
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));