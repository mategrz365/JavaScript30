var inputs = document.querySelectorAll('input');

function handleUpdated(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdated));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdated));