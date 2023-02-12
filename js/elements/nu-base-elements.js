export class NuWrapper extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div class="nu-wrapper">
          <slot></slot>
        </div>
      `;
    }
  }

  // Custom elements definitions
  customElements.define('nu-wrapper', NuWrapper);