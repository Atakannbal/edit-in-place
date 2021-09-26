function EditInPlaceField(id, parent, value) {
    this.id = id;
    this.value = value || 'default value';
    this.parentElement = parent;

    this.createElements(this.id);
    this.attachEvents();
};

augment(EditInPlaceField, EditInPlaceMixin);