class CustomRules extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const showedBlock = this.querySelector('.showed-block');
    const hiddenData = this.querySelector('.hidden-data');

    hiddenData.style.display = 'none';

    showedBlock.addEventListener('click', () => {
      hiddenData.style.display === 'none'
        ? (hiddenData.style.display = 'block')
        : (hiddenData.style.display = 'none');
    });
  }
}

customElements.define('custom-rules-view', CustomRules);
