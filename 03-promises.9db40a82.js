function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var u=r("eWCmQ");const l={delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]"),form:document.querySelector(".form")};function i(e,t){return new Promise(((o,n)=>setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)))}l.form.addEventListener("submit",(function(t){t.preventDefault(),step=Number(l.step.value),delay=Number(l.delay.value),amount=Number(l.amount.value);for(let t=0;t<amount;t+=1)i(t,delay).then((({position:t,delay:o})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),delay+=step}));
//# sourceMappingURL=03-promises.9db40a82.js.map