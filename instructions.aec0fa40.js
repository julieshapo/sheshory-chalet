class e extends HTMLElement{connectedCallback(){const e=this.querySelector(".showed-block"),s=this.querySelector(".hidden-data");s.style.display="none",e.addEventListener("click",(()=>{"none"===s.style.display?s.style.display="block":s.style.display="none"}))}constructor(){super()}}customElements.define("custom-rules-view",e);
//# sourceMappingURL=instructions.aec0fa40.js.map
