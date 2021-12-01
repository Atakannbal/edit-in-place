import Interface from './interface.js'
import EditableFieldInterface from '../interfaces/EditableField.js'

export default function handleSetValue(element, value, errorContainer = $('error-field')) {
  try {
    setFieldValueAndSave(element, value)
  } catch (error) {
    displayError(errorContainer, error)
  }
}

function setFieldValueAndSave(field, value = 'Hi!') {
  // Duck typing
  Interface.ensureImplements(field, EditableFieldInterface)
  
  field.setValue(value)
  field.save()
  
  return value
}

function displayError(element, error) {
  element.text(error)
}

