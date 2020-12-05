class Preloader {
    constructor(root = document.querySelector('body')) {
        this.root = root;
    }

    render() {
        this.template = document.createElement('div');
        this.template.classList.add('spinner-element');

        const spinnerContainer = document.createElement('div');
        spinnerContainer.classList.add('spinner-element__spinner-container');

        const spinner = document.createElement('div');
        spinner.classList.add('spinner-element__spinner');

        spinnerContainer.appendChild(spinner);
        this.template.appendChild(spinnerContainer);
        this.root.appendChild(this.template);
    }

    destroy() {
        this.template.parentElement.removeChild(this.template);
    }
}