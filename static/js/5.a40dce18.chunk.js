(this["webpackJsonpreact-native-elements-playground"]=this["webpackJsonpreact-native-elements-playground"]||[]).push([[5],{1286:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=p(t(0)),r=p(t(1290)),m=p(t(7));function p(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)({}),l=c.Provider,s=c.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,r=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return o.default.createElement(s,null,(function(a){return o.default.createElement(e,n({components:t||a},r))}))}};var i=function(e){var a=e.components,t=e.children;return o.default.createElement(l,{value:a},t)};i.propTypes={components:m.default.object.isRequired,children:m.default.element.isRequired},a.default=i},1287:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(1288);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return r(n).default}});var o=t(1286);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},1288:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r=t(0),m=l(r),p=l(t(1289)),c=t(1286);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}var g={inlineCode:"code",wrapper:"div"},T=function(e){function a(){return s(this,a),i(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),o(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,o=e.props,r=void 0===o?{}:o,c=e.children,l=e.components,s=void 0===l?{}:l,i=e.Layout,T=e.layoutProps,d=s[t+"."+a]||s[a]||g[a]||a;return i?((0,p.default)(this,i),m.default.createElement(i,n({components:s},T),m.default.createElement(d,r,c))):m.default.createElement(d,r,c)}}]),a}(r.Component);a.default=(0,c.withMDXComponents)(T)},1289:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,m=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(a,t,i){if("string"!==typeof t){if(s){var g=l(t);g&&g!==s&&e(a,g,i)}var T=m(t);p&&(T=T.concat(p(t)));for(var d=0;d<T.length;++d){var D=T[d];if(!n[D]&&!o[D]&&(!i||!i[D])){var E=c(t,D);try{r(a,D,E)}catch(M){}}}return a}return a}},1290:function(e,a,t){"use strict";a.__esModule=!0;var n=r(t(0)),o=r(t(1291));function r(e){return e&&e.__esModule?e:{default:e}}a.default=n.default.createContext||o.default,e.exports=a.default},1291:function(e,a,t){"use strict";a.__esModule=!0;var n=t(0),o=(m(n),m(t(7))),r=m(t(1292));m(t(1293));function m(e){return e&&e.__esModule?e:{default:e}}function p(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}function s(e){var a=[];return{on:function(e){a.push(e)},off:function(e){a=a.filter((function(a){return a!==e}))},get:function(){return e},set:function(t,n){e=t,a.forEach((function(a){return a(e,n)}))}}}a.default=function(e,a){var t,m,i="__create-react-context-"+(0,r.default)()+"__",g=function(e){function t(){var a,n;p(this,t);for(var o=arguments.length,r=Array(o),m=0;m<o;m++)r[m]=arguments[m];return a=n=c(this,e.call.apply(e,[this].concat(r))),n.emitter=s(n.props.value),c(n,a)}return l(t,e),t.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},t.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t=this.props.value,n=e.value,o=void 0;((r=t)===(m=n)?0!==r||1/r===1/m:r!==r&&m!==m)?o=0:(o="function"===typeof a?a(t,n):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,m},t.prototype.render=function(){return this.props.children},t}(n.Component);g.childContextTypes=((t={})[i]=o.default.object.isRequired,t);var T=function(a){function t(){var e,n;p(this,t);for(var o=arguments.length,r=Array(o),m=0;m<o;m++)r[m]=arguments[m];return e=n=c(this,a.call.apply(a,[this].concat(r))),n.state={value:n.getValue()},n.onUpdate=function(e,a){0!==((0|n.observedBits)&a)&&n.setState({value:n.getValue()})},c(n,e)}return l(t,a),t.prototype.componentWillReceiveProps=function(e){var a=e.observedBits;this.observedBits=void 0===a||null===a?1073741823:a},t.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},t.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},t.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},t.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},t}(n.Component);return T.contextTypes=((m={})[i]=o.default.object,m),{Provider:g,Consumer:T}},e.exports=a.default},1292:function(e,a,t){"use strict";(function(a){var t="__global_unique_id__";e.exports=function(){return a[t]=(a[t]||0)+1}}).call(this,t(64))},1293:function(e,a,t){"use strict";var n=t(1294);e.exports=n},1294:function(e,a,t){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},1296:function(e,a,t){"use strict";t.r(a);var n=t(10),o=t(0),r=t.n(o),m=t(1287);a.default=function(e){var a=e.components;Object(n.a)(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:a},r.a.createElement(m.MDXTag,{name:"h2",components:a},"Props"),r.a.createElement(m.MDXTag,{name:"blockquote",components:a},r.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Also receives all\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props"}},"TouchableNativeFeedback"),"\n(Android) or\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://facebook.github.io/react-native/docs/touchableopacity.html#props"}},"TouchableOpacity"),"\n(iOS) props")),r.a.createElement(m.MDXTag,{name:"ul",components:a},r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#buttonstyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"buttonStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#containerstyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"containerStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#disabled"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"disabled"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#disabledstyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"disabledStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#disabledtitlestyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"disabledTitleStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#icon"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"icon"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#iconcontainerstyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"iconContainerStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#iconright"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"iconRight"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#lineargradientprops"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"linearGradientProps"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#loading"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"loading"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#loadingprops"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"loadingProps"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#loadingstyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"loadingStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#onpress"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"onPress"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#raised"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"raised"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#title"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"title"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#titleprops"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"titleProps"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#titlestyle"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"titleStyle"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#touchablecomponent"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"TouchableComponent"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#type"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"type"))),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#viewcomponent"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"ViewComponent")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h2",components:a},"Reference"),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"buttonStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"add additional styling for button component (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"containerStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"styling for Component container"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"disabled")),r.a.createElement(m.MDXTag,{name:"p",components:a},"disables user interaction"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"boolean"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"false")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"disabledStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"style of the button when disabled"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Internal Style")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"disabledTitleStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"style of the title when disabled"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Text style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Internal Style")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"icon")),r.a.createElement(m.MDXTag,{name:"p",components:a},"displays a centered icon (when no title) or to the left (with text). (can be\nused along with iconRight as well). Can be an object or a custom component."),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"{",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"icon.md#props"}},"...Icon props"),"}",r.a.createElement("br",null),r.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"td"},"OR"),r.a.createElement("br",null)," component"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"iconContainerStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"styling for Icon Component container"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"iconRight")),r.a.createElement(m.MDXTag,{name:"p",components:a},"displays Icon to the right of title. Needs to be used along with ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"icon")," prop"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"boolean"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"false")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"linearGradientProps")),r.a.createElement(m.MDXTag,{name:"p",components:a},"displays a linear gradient. See ",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#lineargradient-usage"}},"usage"),"."),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"{",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/react-native-community/react-native-linear-gradient#additional-props"}},"...Gradient props"),"}"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"loading")),r.a.createElement(m.MDXTag,{name:"p",components:a},"prop to display a loading spinner (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"boolean"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"false")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"loadingProps")),r.a.createElement(m.MDXTag,{name:"p",components:a},"add additional props for ActivityIndicator component (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"{",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://facebook.github.io/react-native/docs/activityindicator#props"}},"...ActivityIndicator props"),"}"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Internal object")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"loadingStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"add additional styling for loading component (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Internal Style")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"onPress")),r.a.createElement(m.MDXTag,{name:"p",components:a},"onPress method (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"function"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"raised")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Add raised button styling (optional). Has no effect if ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'type="clear"'),"."),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"boolean"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"false")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"title")),r.a.createElement(m.MDXTag,{name:"p",components:a},"button title (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"string"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"titleProps")),r.a.createElement(m.MDXTag,{name:"p",components:a},"add additional props for Text component (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"{",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://facebook.github.io/react-native/docs/text#props"}},"...Text props"),"}"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"titleStyle")),r.a.createElement(m.MDXTag,{name:"p",components:a},"add additional styling for title component (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Text style (object)"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"none")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"TouchableComponent")),r.a.createElement(m.MDXTag,{name:"p",components:a},"component for user interaction"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"Touchable Component"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"TouchableOpacity (ios) or TouchableNativeFeedback (android) or TouchableOpacity (android, if ",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"###linearGradientProps"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"linearGradientProps"))," exists)")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"type")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Type of button (optional)"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"solid"),", ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"clear"),", ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"outline")),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"solid")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"ViewComponent")),r.a.createElement(m.MDXTag,{name:"p",components:a},"component for container"),r.a.createElement(m.MDXTag,{name:"table",components:a},r.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:"center"}},"Default"))),r.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"React Native Component"),r.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:"center"}},"View")))),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h2",components:a},"LinearGradient Usage"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Using LinearGradient in React Native Elements is supported through the\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/react-native-community/react-native-linear-gradient"}},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),r.a.createElement(m.MDXTag,{name:"p",components:a},"For react-native-cli users, make sure to follow the\n",r.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"}},"installation instructions"),"\nand use it like this:"),r.a.createElement(m.MDXTag,{name:"pre",components:a},r.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { Button } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Button\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}}}]);
//# sourceMappingURL=5.a40dce18.chunk.js.map