import EditInPlaceField from "./edit-in-place-field.js";
export default class EditInPlaceArea extends EditInPlaceField {

    constructor(id, parent, value) {
        super(id, parent, value)
    }

    createElements() {
        this.containerElement = document.createElement('div');
        this.parentElement.append(this.containerElement);

        this.staticElement = document.createElement('p');
        this.containerElement.append(this.staticElement);
        this.staticElement.innerHTML = this.value;

        this.fieldElement = document.createElement('textarea');
        this.fieldElement.value = this.value;
        this.containerElement.append(this.fieldElement);

        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button';
        this.saveButton.value = 'Save';
        this.containerElement.append(this.saveButton);

        this.cancelButton = document.createElement('input');
        this.cancelButton.type = 'button';
        this.cancelButton.value = 'Cancel';
        this.containerElement.append(this.cancelButton);

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
