'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckInput = function () {
  function CheckInput(str) {
    _classCallCheck(this, CheckInput);

    this.inputValue = str;
  }

  _createClass(CheckInput, [{
    key: 'checkD',
    value: function checkD() {
      var a = this.inputValue.charAt(this.inputValue.length - 1);
      if (a != a.match(/\d/g)) {
        this.inputValue = this.inputValue.slice(0, -1);
      }
      return this.inputValue;
    }
  }, {
    key: 'checkRus',
    value: function checkRus() {
      var a = this.inputValue.charAt(this.inputValue.length - 1);
      if (a != a.match(/[а-яА-ЯёЁ\s]/g)) {
        this.inputValue = this.inputValue.slice(0, -1);
      }
      return this.inputValue;
    }
  }, {
    key: 'checkRusPlus',
    value: function checkRusPlus() {
      var a = this.inputValue.charAt(this.inputValue.length - 1);
      if (a != a.match(/[^a-zA-Z]/g)) {
        this.inputValue = this.inputValue.slice(0, -1);
      }
      return this.inputValue;
    }
  }, {
    key: 'checkPhone',
    value: function checkPhone() {
      var maskArr = ['8', '-', 'd', 'd', 'd', '-', 'd', 'd', 'd', '-', 'd', 'd', '-', 'd', 'd'],
          maskReg = /8(\-\d{3}){2}(\-\d{2}){2}/,
          phone = this.inputValue.split('');

      if (maskArr.length == phone.length) {
        if (this.inputValue == this.inputValue.match(maskReg)[0]) {
          return this.inputValue;
        }
      } else if (maskArr.length < phone.length) {
        this.inputValue = this.inputValue.slice(0, 15);
        return this.inputValue;
      } else {
        for (var i = 0; i < phone.length; i++) {
          if (maskArr[i] == 'd') {
            var a = phone[i];
            if (phone[i] != a.match(/\d/g)) {
              phone[i] = '';
            }
          } else {
            phone[i] = maskArr[i];
          }
        }

        var k = 0;
        for (var _i = 0; _i < phone.length; _i++) {
          if (phone[_i] == '') k++;
        }

        if (k == 0 && maskArr[phone.length] != 'd') {
          phone.push(maskArr[phone.length]);
        }

        this.inputValue = phone.join('');
      }
      return this.inputValue;
    }
  }]);

  return CheckInput;
}();

module.exports = CheckInput;