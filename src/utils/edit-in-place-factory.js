import EditInPlaceField from "./edit-in-place-field.js";
import EditInPlaceArea from "./edit-in-place-area.js";
import Interface from "./interface.js";
import EditableField from "../interfaces/EditableField.js";

export default function(type, {id, parent, placeholder}) {
  let EditInPlaceElement;

  switch (type) {
    case 'Field':
      EditInPlaceElement = new EditInPlaceField(id, parent, placeholder)
      break;
  
    case 'Area':
      EditInPlaceElement = new EditInPlaceArea(id, parent, placeholder)
      break;
  }

  Interface.ensureImplements(EditInPlaceElement, EditableField)
  EditInPlaceElement.createElements(EditInPlaceElement.id);
  EditInPlaceElement.attachEvents();

  return EditInPlaceElement;
}
