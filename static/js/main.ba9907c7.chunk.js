(this["webpackJsonplanding-creator"]=this["webpackJsonplanding-creator"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/TradeWinds.81950ec6.woff2"},,,function(e,n,t){e.exports=t.p+"static/media/TradeWinds.b2357d30.eot"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Bold.4a1d8c27.eot"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Regular.b9077621.eot"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Italic.d798f933.eot"},,,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/TradeWinds.ade553e4.woff"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Bold.16d7bb99.ttf"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Bold.08cb8f79.woff"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Bold.f3a02e25.woff2"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Regular.4312f1fb.ttf"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Regular.94dac78e.woff"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Regular.9feb0110.woff2"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Italic.b391d0e9.ttf"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Italic.fd597012.woff"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Italic.ad4e0874.woff2"},,,,,,function(e,n,t){e.exports=t(56)},,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),l=t.n(o),c=t(4),i=t(41),u=t(7),f=t(42),d=t(2),s=t(1);function p(){var e=Object(d.a)(["\n  margin: 0 auto;\n  max-width: 1600px;\n  width: 100%;\n"]);return p=function(){return e},e}var m=function(e){var n=e.children;return r.a.createElement(b,null,n)},b=s.default.div(p());function v(){var e=Object(d.a)(["\n  font-size: 30px;\n"]);return v=function(){return e},e}function y(){var e=Object(d.a)(["\n  padding: 20px 30px;\n  color: #ffffff;\n  background: linear-gradient(135deg, #dd1173, #350e47);\n"]);return y=function(){return e},e}var E=function(){return r.a.createElement(x,null,r.a.createElement(m,null,r.a.createElement(g,null,"Landing Constructor")))},x=s.default.header(y()),g=s.default.span(v()),O=t(13),j=t(43),h=t(9),w=t(6),R=function(e,n){return"".concat(e,"_").concat(n)},C={selectedLayerId:"",selectedElementStyles:{},selectedLayerRef:null,layersCollection:{layer_0:{type:"Block",styles:{},elements:[]}}},_=function(e){return e.layers.selectedLayerId},S=function(e){return function(n){return n.layers.layersCollection[e]}},k=function(e){return e.layers.layersCollection},L=function(e){return e.layers.selectedElementStyles},T=function(e){return e.layers.selectedLayerRef},I=function(e){return{type:"SELECT_LAYER",payload:e}},N=function(e){var n=Object(c.b)();return function(t){t.stopPropagation(),n(I(e))}};function A(){var e=Object(d.a)(["\n  padding: 10px 0 10px 30px;\n"]);return A=function(){return e},e}function B(){var e=Object(d.a)(["\n  padding: 0 20px 10px 20px;\n  border-bottom: 1px solid #5b187a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:hover,\n  &.expanded {\n    cursor: pointer;\n\n    ","::before {\n      border-right-color: #dd1173;\n      border-bottom-color: #dd1173;\n    }\n  }\n\n  &.expanded {\n    ","::before {\n      transform: translateY(-50%) rotate(-135deg);\n    }\n  }\n"]);return B=function(){return e},e}function Y(){var e=Object(d.a)(["\n  margin-right: 20px;\n  display: flex;\n  width: 20px;\n  height: 20px;\n\n  &::before {\n    display: block;\n    margin: auto;\n    width: 10px;\n    height: 10px;\n    content: '';\n    border: 5px solid #ffffff;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    transform-origin: 75% 75%;\n    transform: translateY(-50%) rotate(45deg);\n    transition: 0.5s;\n  }\n"]);return Y=function(){return e},e}function z(){var e=Object(d.a)(["\n  width: 15px;\n  height: 15px;\n  border: 1px solid ",";\n"]);return z=function(){return e},e}function D(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]);return D=function(){return e},e}function G(){var e=Object(d.a)(["\n  font-size: 16px;\n  color: #ffffff;\n  transition: 0.5s;\n  text-transform: capitalize;\n"]);return G=function(){return e},e}function V(){var e=Object(d.a)(["\n  padding: 20px 0;\n  width: 100%;\n"]);return V=function(){return e},e}var W=function e(n){var t=n.id,o=n.element,l=Object(a.useState)(!1),i=Object(O.a)(l,2),u=i[0],f=i[1],d=Object(c.c)(k),s=Object(c.c)(_),p=N(t),m=o.type,b=o.elements;return r.a.createElement(P,null,r.a.createElement(X,{className:u?"expanded":"",onClick:function(){return b&&b.length&&f((function(e){return!e}))}},r.a.createElement(F,null,m),r.a.createElement(H,null,b&&b.length>0&&r.a.createElement(J,null),r.a.createElement(M,{onClick:p,isSelected:s===t}))),b&&b.length>0&&u&&r.a.createElement(U,null,b.map((function(n){var t=d[n];return r.a.createElement(e,{key:n,id:n,element:t})}))))},P=s.default.div(V()),F=s.default.div(G()),H=s.default.div(D()),M=s.default.div(z(),(function(e){return e.isSelected?"#dd1173":"#ffffff"})),J=s.default.div(Y()),X=s.default.div(B(),J,J),U=s.default.ul(A()),q=W;function K(){var e=Object(d.a)(["\n  flex-grow: 1;\n  max-width: 350px;\n  background-color: #1b1b1b;\n  overflow: auto;\n"]);return K=function(){return e},e}var Q=function(){var e=Object(c.c)(S("layer_0"));return r.a.createElement(Z,null,r.a.createElement(q,{id:"layer_0",element:e}))},Z=s.default.div(K()),$=Q,ee=function(e){var n=e.propertyName,t=e.values,a=e.selectedValue,o=e.onSelectChange;return r.a.createElement("select",{value:a,name:n,onChange:function(e){return o(e,n||"")}},t.map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)})))};function ne(){var e=Object(d.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return ne=function(){return e},e}function te(){var e=Object(d.a)(["\n  margin-right: 20px;\n  font-size: 14px;\n  text-transform: capitalize;\n"]);return te=function(){return e},e}function ae(){var e=Object(d.a)(["\n  padding: 10px;\n  background: #1b1b1b;\n  flex-grow: 1;\n  max-width: 350px;\n"]);return ae=function(){return e},e}var re=function(){var e=Object(c.c)(L),n=Object(c.b)(),t=(Object.entries(e),function(e,t){n({type:"CHANGE_STYLES",payload:Object(h.a)({},t,e.target.value)})});return r.a.createElement(oe,null,r.a.createElement(ce,null,r.a.createElement(le,null,"Display"),r.a.createElement(ee,{propertyName:"display",values:["block","inline","flex","none"],selectedValue:e.display,onSelectChange:t})),r.a.createElement(ce,null,r.a.createElement(le,null,"Position"),r.a.createElement(ee,{propertyName:"position",values:["static","absolute","relative","none"],selectedValue:e.display,onSelectChange:t})),r.a.createElement("input",{type:"text",value:e.top,name:"top",onChange:function(e){return t(e,"top")}}))},oe=s.default.div(ae()),le=s.default.span(te()),ce=s.default.div(ne()),ie=re,ue=function(e){var n=Object(c.b)();Object(a.useEffect)((function(){n(I(e))}),[])},fe=function(e,n,t,r){var o=Object(c.b)();Object(a.useEffect)((function(){r&&o({type:"CHANGE_SELECTED_LAYER_REF",payload:e})}),[n,t])};function de(){var e=Object(d.a)(["\n  padding: 10px;\n  cursor: pointer;\n  height: 100%;\n  outline: 1px solid ",";\n\n  &:hover {\n    outline-color: #dd1173;\n  }\n"]);return de=function(){return e},e}var se=function e(n){var t=n.id,o=n.elementData,l=Object(c.c)(k),i=Object(c.c)(_),u=Object(c.c)(L),f=N(t),d=Object(c.c)(S(t)),s=Object(a.useRef)(null),p=t===i;ue(t),fe(s,i,u,p);var m=o.styles;return r.a.createElement(pe,{selected:t===i,onClick:f,id:t,style:m,ref:s},d.elements.map((function(n){return r.a.createElement(e,{key:n,id:n,elementData:l[n]})})))},pe=s.default.div(de(),(function(e){return e.selected?"#350e47":"#eeeeee"})),me=se;function be(){var e=Object(d.a)(["\n  padding: 10px;\n  cursor: pointer;\n  min-height: 100px;\n  outline: 1px solid ",";\n\n  &:hover {\n    outline-color: #dd1173;\n  }\n"]);return be=function(){return e},e}var ve=function(){var e=Object(c.c)(_),n=Object(c.c)(k),t=Object(c.c)(S("layer_0")),o=N("layer_0"),l="layer_0"===e,i=Object(a.useRef)(null);return ue("layer_0"),fe(i,e,{},l),r.a.createElement(ye,{isSelected:l,onClick:o,id:"layer_0",ref:i},t.elements.map((function(e){return r.a.createElement(me,{key:e,id:e,elementData:n[e]})})))},ye=s.default.div(be(),(function(e){return e.isSelected?"#350e47":"#eeeeee"})),Ee=ve;function xe(){var e=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  background: #ffffff;\n"]);return xe=function(){return e},e}function ge(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"]);return ge=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);return Oe=function(){return e},e}var je=function(e){var n=e.onToggleModal,t=Object(a.useState)("Block"),o=Object(O.a)(t,2),l=o[0],i=o[1],u=Object(c.b)();return r.a.createElement(he,null,r.a.createElement(we,{onClick:n}),r.a.createElement(Re,{onSubmit:function(e){e.preventDefault(),u({type:"CREATE_NEW_LAYER",payload:{type:l,elements:[],styles:{display:"block"}}}),n()}},r.a.createElement("select",{name:"elementType",value:l,onChange:function(e){i(e.target.value)}},r.a.createElement("option",{value:"Block"},"Block"),r.a.createElement("option",{value:"Image"},"Image"),r.a.createElement("option",{value:"Video"},"Video")),r.a.createElement("button",null,"Create Element")))},he=s.default.div(Oe()),we=s.default.div(ge()),Re=s.default.form(xe()),Ce=je;function _e(){var e=Object(d.a)(["\n  user-select: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  font-weight: bold;\n  color: #dd1173;\n  border: 2px solid #dd1173;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n\n  &:hover {\n    border-color: #350e47;\n    color: #350e47;\n  }\n"]);return _e=function(){return e},e}function Se(){var e=Object(d.a)(["\n  position: absolute;\n"]);return Se=function(){return e},e}var ke=document.getElementById("modal-root"),Le=function(){var e=Object(a.useState)(!1),n=Object(O.a)(e,2),t=n[0],l=n[1],i=Object(c.c)(_),u=Object(c.c)(L),f=Object(c.c)(T),d=Object(a.useMemo)((function(){return function(e){if(e&&e.current){var n=e.current,t=n.getBoundingClientRect();return{top:n.offsetTop+t.height/2,left:n.offsetLeft+t.width/2}}return null}(f)}),[i,u,f]),s=function(){return l((function(e){return!e}))};return r.a.createElement(Te,{style:d?{top:"".concat(d.top,"px"),left:"".concat(d.left,"px")}:{}},r.a.createElement(Ie,{onClick:s},"+"),ke&&t&&Object(o.createPortal)(r.a.createElement(Ce,{onToggleModal:s}),ke))},Te=s.default.div(Se()),Ie=s.default.div(_e()),Ne=Le;function Ae(){var e=Object(d.a)(["\n  position: relative;\n  padding: 10px;\n  padding-bottom: 1000px;\n  max-height: 100%;\n  flex-grow: 1;\n  overflow: auto;\n"]);return Ae=function(){return e},e}var Be=Object(a.createContext)({desktopRef:{}}),Ye=function(){var e=Object(a.useRef)(null);return r.a.createElement(Be.Provider,{value:{desktopRef:e}},r.a.createElement(ze,{ref:e},r.a.createElement(Ne,null),r.a.createElement(Ee,null)))},ze=s.default.div(Ae()),De=Ye;function Ge(){var e=Object(d.a)(["\n  height: 80px;\n  background: #000000;\n"]);return Ge=function(){return e},e}var Ve=function(){return r.a.createElement(We,null)},We=s.default.div(Ge()),Pe=Ve;function Fe(){var e=Object(d.a)(["\n  width: 100%;\n  height: calc(100% - 80px);\n  display: flex;\n"]);return Fe=function(){return e},e}function He(){var e=Object(d.a)(["\n  width: 100%;\n  height: calc(100vh - 75px);\n  overflow: hidden;\n"]);return He=function(){return e},e}var Me=function(){return r.a.createElement(Je,null,r.a.createElement(Pe,null),r.a.createElement(Xe,null,r.a.createElement($,null),r.a.createElement(De,null),r.a.createElement(ie,null)))},Je=s.default.div(He()),Xe=s.default.div(Fe()),Ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(Me,null))},qe=t(29),Ke=t(17),Qe=t.n(Ke),Ze=t(30),$e=t.n(Ze),en=t(14),nn=t.n(en),tn=t(18),an=t.n(tn),rn=t(31),on=t.n(rn),ln=t(32),cn=t.n(ln),un=t(33),fn=t.n(un),dn=t(19),sn=t.n(dn),pn=t(34),mn=t.n(pn),bn=t(35),vn=t.n(bn),yn=t(36),En=t.n(yn),xn=t(20),gn=t.n(xn),On=t(37),jn=t.n(On),hn=t(38),wn=t.n(hn),Rn=t(39),Cn=t.n(Rn);function _n(){var e=Object(d.a)(["\n  @font-face {\n    font-family: TradeWinds;\n    src: url(",");\n    src: url('","?#iefix') format('embedded-opentype'),\n      url(",") format('woff2'),\n      url(",") format('woff'),\n      url(",") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: Roboto;\n    src: url(",");\n    src: url('","?#iefix') format('embedded-opentype'),\n      url(",") format('woff2'),\n      url(",") format('woff'),\n      url(",") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: Roboto;\n    src: url(",");\n    src: url('","?#iefix') format('embedded-opentype'),\n      url(",") format('woff2'),\n      url(",") format('woff'),\n      url(",") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: Roboto;\n    src: url(",");\n    src: url('","?#iefix') format('embedded-opentype'),\n      url(",") format('woff2'),\n      url(",") format('woff'),\n      url(",") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n  }\n"]);return _n=function(){return e},e}var Sn=Object(s.createGlobalStyle)(_n(),Qe.a,Qe.a,nn.a,$e.a,nn.a,an.a,an.a,fn.a,cn.a,on.a,sn.a,sn.a,En.a,vn.a,mn.a,gn.a,gn.a,Cn.a,wn.a,jn.a);function kn(){var e=Object(d.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  \n  ul, ol {\n    list-style: none;\n  }\n\n  body {\n    font-size: 14px;\n    font-family: Roboto, sans-serif;\n    color: #ffffff;\n  }\n"]);return kn=function(){return e},e}var Ln=Object(s.createGlobalStyle)(kn()),Tn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(qe.Normalize,null),r.a.createElement(Sn,null),r.a.createElement(Ln,null))},In=Object(u.c)({layers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SELECT_LAYER":var t=e.layersCollection,a=t[n.payload].styles;return Object(w.a)({},e,{selectedLayerId:n.payload,selectedElementStyles:Object(w.a)({},a)});case"CHANGE_STYLES":var r=e.layersCollection,o=e.selectedLayerId,l=e.selectedElementStyles;return Object(w.a)({},e,{selectedElementStyles:Object(w.a)({},l,{},n.payload),layersCollection:Object(w.a)({},r,Object(h.a)({},o,Object(w.a)({},r[o],{styles:Object(w.a)({},r.styles,{},n.payload)})))});case"CHANGE_SELECTED_LAYER_REF":return Object(w.a)({},e,{selectedLayerRef:Object(w.a)({},n.payload)});case"CREATE_NEW_LAYER":var c=e.layersCollection,i=e.selectedLayerId,u=c[i].elements||[],f=R(i,u.length),d=Object(h.a)({},f,n.payload),s=c[i];return s=Object(w.a)({},s,{elements:[].concat(Object(j.a)(s.elements),[f])}),Object(w.a)({},e,{layersCollection:Object(w.a)({},c,{},d,Object(h.a)({},i,s))});default:return e}}}),Nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,An=Object(f.a)(),Bn=Object(u.e)(In,Nn(Object(u.a)(An))),Yn=function(){return r.a.createElement(c.a,{store:Bn},r.a.createElement(i.a,null,r.a.createElement(Tn,null),r.a.createElement(Ue,null)))};l.a.render(r.a.createElement(Yn,null),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.ba9907c7.chunk.js.map