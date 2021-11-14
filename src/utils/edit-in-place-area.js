class EditInPlaceArea extends EditInPlaceField {

    constructor(id, parent, value) {
        super(id, parent, value)
    }

    createElements(id) {
        this.containerElement = document.createElement('div');
        this.parentElement.appendChild(this.containerElement);

        this.staticElement = document.createElement('p');
        this.containerElement.appendChild(this.staticElement);
        this.staticElement.innerHTML = this.value;

        this.fieldElement = document.createElement('textarea');
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);

        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button';
        this.saveButton.value = 'Save';
        this.containerElement.appendChild(this.saveButton);

        this.cancelButton = document.createElement('input');
        this.cancelButton.type = 'button';
        this.cancelButton.value = 'Cancel';
        this.containerElement.appendChild(this.cancelButton);

        this.convertToText();
    }

    convertToEditable() {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'block';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';

        super.setValue(this.value);
    }

    convertToText() {
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none',
        this.staticElement.style.display = 'block';

        super.setValue(this.value);
    }
}
