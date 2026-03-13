
    class ThemeManager {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    this.isDark = false; // Initial state

    // Bind the click event
    this.button.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    // 1. Flip the state
    this.isDark = !this.isDark;

    // 2. Toggle the class on the body
    document.body.classList.toggle('dark-theme');

    // 3. Update the button text
    this.updateUI();
  }

  updateUI() {
    this.button.textContent = this.isDark 
      ? "Switch to Light Mode" 
      : "Switch to Dark Mode";
  }
}

// Initialize the class when the script loads
const myTheme = new ThemeManager('theme-toggle');
