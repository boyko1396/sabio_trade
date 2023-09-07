// LanguageSelect.js
export default class LanguageSelect {
  constructor() {
    this.languageSelect = document.querySelector('.language-select');
    this.languageToggle = document.querySelector('.js-language-toggle');
    this.languageDropdown = document.querySelector('.language-select__dropdown');
    
    this.languageToggle.addEventListener('click', this.toggleDropdown.bind(this));
    document.addEventListener('click', this.closeDropdown.bind(this));
  }
  
  toggleDropdown(event) {
    event.stopPropagation();
    this.languageSelect.classList.toggle('is-show');
  }
  
  closeDropdown(event) {
    if (!this.languageSelect.contains(event.target)) {
      this.languageSelect.classList.remove('is-show');
    }
  }
}