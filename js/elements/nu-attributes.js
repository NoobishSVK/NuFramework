export class NuElement extends HTMLElement {
    static get observedAttributes() {
      return ['color', 'text-gradient'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'color') {
        let colorValue = getComputedStyle(document.body).getPropertyValue(`--${newValue}`);
        this.style.setProperty('color', colorValue);
      }
      if (name === 'text-gradient') {
        let gradientValue = getComputedStyle(document.body).getPropertyValue(`--${newValue}`);
        this.style.setProperty('background', gradientValue);
        this.style.setProperty('-webkit-background-clip', 'text');
        this.style.setProperty('-webkit-text-fill-color', 'transparent');
      }
    }
  }
  