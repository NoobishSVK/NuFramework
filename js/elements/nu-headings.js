export class NuHeading1 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h1 class="nu-h1">
          <slot></slot>
        </h1>
      `;
    }
  }


  // Custom elements definitions
  customElements.define('nu-h1', NuHeading1);