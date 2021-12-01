import Interface from '../utils/interface.js';

const EditableField = new Interface('EditableField', [
  'createElements',
  'attachEvents',
  'convertToEditable',
  'save',
  'cancel',
  'convertToText',
  'setValue',
  'getValue'
])

export default EditableField