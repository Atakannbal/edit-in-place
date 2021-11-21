export default class EditInPlaceField {

    constructor(id, parent, value) {
        this.id = id;
        this.value = value || 'default value';
        this.parentElement = parent;

        this.createElements(this.id);
        this.attachEvents();
    };

    createElements() {
        this.containerElement = document.createElement('div');
        this.parentElement.append(this.containerElement);

        this.staticElement = document.createElement('span');
        this.containerElement.append(this.staticElement);
        this.staticElement.innerHTML = this.value;

        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
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

    attachEvents() {
        this.staticElement.addEventListener('click', () => { this.convertToEditable(); })
        this.saveButton.addEventListener('click',  () => { this.save(); })
        this.cancelButton.addEventListener('click',  () => { this.cancel(); })
    }

    convertToEditable() {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';

        this.setValue(this.value);
    }

    save() {
        this.value = this.getValue();
        var callback = {
            success: function () { this.convertToText() },
            failure: function () { alert('Error saving value.'); }
        };

        // Maybe some API call here
        (() => {
            callback.success();
        })()
    }

    cancel() {
        this.convertToText();
    }

    convertToText() {
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
        this.staticElement.style.display = 'inline';

        this.setValue(this.value);
    }

    setValue(value) {
        this.fieldElement.value = value;
        this.staticElement.innerHTML = value;
    }

    getValue() {
        return this.fieldElement.value;
    }
};