"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
require("../css/styles.css");
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LOCAL_STORAGE_KEY = 'userId';
function Calendar() {
  var userId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    dateOfVisit = _useState4[0],
    setVisit = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    reserverId = _useState6[0],
    setReserver = _useState6[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var dateOfVisit = event.target.dateOfVisit.value;
    var reserverId = event.target.reserverId.value;
    if (name === '' || dateOfVisit === '') {
      alert("Prosim vnesite vse podatke");
    } else {
      _axios.default.post('http://localhost:5000/reservationDate/addReservation', {
        nameOfVisitor: name,
        dateOfVisit: dateOfVisit,
        userId: userId,
        reserverId: reserverId
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        console.log(response.data);
        window.location.reload();
        window.location.replace('/');
        alert("You reserved your visit");
      }).catch(function (error) {
        alert("An error has accured");
        console.log("An error has accured, ".concat(error));
      });
    }
  };
  /*

  const validate = () => {

    return dateOfVisit.length;

  };

  useEffect(() => {

    const isValid = validate();

    setValid(isValid);

  }, [dateOfVisit]);

  */
  function handleChange(event) {
    var dateOfVisit = event.target.value;
    //console.log(dateOfVisit);

    _axios.default.get('http://localhost:5000/reservationDate/all', {}).then(function (response) {
      var _iterator = _createForOfIteratorHelper(response.data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var data = _step.value;
          if (data.dateOfVisit === dateOfVisit) {
            console.log('je že zasedeno');
            setVisit();
          } else {
            setVisit(dateOfVisit);
            console.log('ni zasedeno');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }).catch(function (error) {
      alert("An error has accured");
      console.log("An error has accured, ".concat(error));
    });
  }

  //if (!result) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "forms vh-100 bg-image",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mask d-flex align-items-center h-100 gradient-custom-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "container h-100",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row d-flex justify-content-center align-items-center h-100",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "col-12 col-md-9 col-lg-7 col-xl-6",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "card",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "card-body p-5",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                  className: "text-uppercase text-center mb-5",
                  children: "Reserve a visit"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Form.default, {
                  onSubmit: handleSubmit,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.default.Control, {
                      name: "name",
                      value: name,
                      onChange: function onChange(ev) {
                        return setName(ev.target.value);
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      className: "form-label",
                      htmlFor: "form3Example1cg",
                      children: "Name"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.default.Control, {
                      name: "dateOfVisit",
                      value: dateOfVisit,
                      onInput: handleChange,
                      onChange: function onChange(ev) {
                        return setVisit(ev.target.value);
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      className: "form-label",
                      htmlFor: "form3Example3cg",
                      placeholder: "1.1.1970",
                      children: "Date of visit"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "form-outline mb-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.default.Control, {
                      name: "reserverId",
                      value: reserverId,
                      onChange: function onChange(ev) {
                        return setReserver(ev.target.value);
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                      className: "form-label",
                      htmlFor: "form3Example3cg",
                      placeholder: "1.1.1970",
                      children: ["Dog id", /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                        children: " (if you already adopted a dog)"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "d-flex justify-content-center",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      variant: "success",
                      disabled: !dateOfVisit,
                      className: "btn btn-success btn-block btn-lg gradient-custom-4 text-body",
                      type: "submit",
                      children: "Reserve visit"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "back d-flex justify-content-center",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "/",
                      children: "Go Back"
                    })
                  })]
                })]
              })
            })
          })
        })
      })
    })
  });
}
var _default = Calendar;
exports.default = _default;

//# sourceMappingURL=calendar.js.map