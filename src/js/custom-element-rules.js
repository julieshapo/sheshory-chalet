class CustomRules extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const showedBlock = this.querySelector('.showed-block');
    const hiddenData = this.querySelector('.hidden-data');
    const arrow = this.querySelector('.js-rules-arrow');

    hiddenData.style.display = 'none';

    showedBlock.addEventListener('click', () => {
      hiddenData.style.display === 'none'
        ? (hiddenData.style.display = 'block') &&
          (arrow.style.transform = 'rotate(180deg)')
        : (hiddenData.style.display = 'none') &&
          (arrow.style.transform = 'rotate(0)');
    });
  }
}

customElements.define('custom-rules-view', CustomRules);
