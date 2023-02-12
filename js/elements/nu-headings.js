import { NuElement } from './nu-attributes.js';

  export class NuHeading1 extends NuElement {
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


  export class NuHeading2 extends NuElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h1 class="nu-h2">
          <slot></slot>
        </h1>
      `;
    }
  }

  export class NuHeading3 extends NuElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h1 class="nu-h3">
          <slot></slot>
        </h1>
      `;
    }
  }

  export class NuHeading4 extends NuElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h1 class="nu-h4">
          <slot></slot>
        </h1>
      `;
    }
  }


  // Custom elements definitions
  customElements.define('nu-h1', NuHeading1);
  customElements.define('nu-h2', NuHeading2);
  customElements.define('nu-h3', NuHeading3);
  customElements.define('nu-h4', NuHeading4);