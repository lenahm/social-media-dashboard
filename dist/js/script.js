const checkboxThemeSwitch = document.getElementById('checkbox-theme-switch'); 

const body = document.getElementsByTagName('body')[0];
const card = document.querySelectorAll('.card'); 
const h4 = document.getElementsByTagName('h4'); 
const amountSubtitle = document.querySelectorAll('.amount-subtitle'); 
const toggleThemeSwitch = document.getElementById('toggle-theme-switch'); 

function changeColorsBasedOnTheme() {
    let darkModeSelected = document.querySelector('input[type="checkbox"]:checked'); 

    if (darkModeSelected) {
        removeLightThemeFromClasslist(body); 
        card.forEach(card => removeLightThemeFromClasslist(card));
        Array.from(h4).forEach(heading => removeLightThemeFromClasslist(heading)); 
        amountSubtitle.forEach(subtitle => removeLightThemeFromClasslist(subtitle)); 
        removeLightThemeFromClasslist(toggleThemeSwitch); 
        
    } else {
        addLightThemeToClasslist(body); 
        card.forEach(card => addLightThemeToClasslist(card));
        Array.from(h4).forEach(heading => addLightThemeToClasslist(heading)); 
        amountSubtitle.forEach(subtitle => addLightThemeToClasslist(subtitle)); 
        addLightThemeToClasslist(toggleThemeSwitch); 
    }
}

function removeLightThemeFromClasslist(element) {
    element.classList.remove('light'); 
}

function addLightThemeToClasslist(element) {
    element.classList.add('light'); 
}

checkboxThemeSwitch.addEventListener('change', changeColorsBasedOnTheme); 