export const changeAccentColor = ({ hex }) => {
  document.documentElement.style.setProperty('--primary', hex)
}