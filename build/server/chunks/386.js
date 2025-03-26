"use strict";
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 9399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Divider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mil-divider"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Partners)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/sections/partners.json
const partners_namespaceObject = JSON.parse('{"e":[{"image":"img/partners/1.png","alt":"partner","link":"#."},{"image":"img/partners/2.png","alt":"partner","link":"#."},{"image":"img/partners/3.png","alt":"partner","link":"#."},{"image":"img/partners/4.png","alt":"partner","link":"#."},{"image":"img/partners/5.png","alt":"partner","link":"#."},{"image":"img/partners/6.png","alt":"partner","link":"#."}]}');
;// CONCATENATED MODULE: ./src/components/sections/Partners.jsx



const PartnersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-partners mil-p-90-60",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-partners-frame",
                children: partners_namespaceObject.e.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: item.link,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: item.image,
                            alt: item.alt
                        })
                    }, `partners-i-${index}`))
            })
        })
    });
};
/* harmony default export */ const Partners = (PartnersSection);


/***/ })

};
;