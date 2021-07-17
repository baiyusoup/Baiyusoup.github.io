(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{630:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("使用三种方式创建不可变的对象\n")]),t._v(" "),a("h3",{attrs:{id:"_1-preventextensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-preventextensions"}},[t._v("#")]),t._v(" 1. preventExtensions")]),t._v(" "),a("p",[t._v("利用Object.preventExtensions()方法阻止向现有对象添加新属性。任何添加行为都会静默失效。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-seal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-seal"}},[t._v("#")]),t._v(" 2. seal")]),t._v(" "),a("p",[t._v("Object.seal()方法可以禁止添加和删除行为，还可以阻止修改属性描述符。添加和删除行为都会静默失效，修改属性描述符会报错。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-freeze"}},[t._v("#")]),t._v(" 3. freeze")]),t._v(" "),a("p",[t._v("Object.freeze()方法和seal的作用一样，这个freeze方法是一个浅冻结，比如说obj.other.xx = 12的操作是成功的")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("seal和freeze的区别在于前者是封闭一个对象，仍然可以修改对象的现有属性；而后者是冻结一个对象，不可修改")])])])}),[],!1,null,null,null);s.default=n.exports}}]);