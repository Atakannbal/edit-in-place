import EditInPlaceArea  from '../utils/edit-in-place-area.js'
import EditInPlaceField from '../utils/edit-in-place-field.js'
import setValue from '../utils/set-and-save-field-value.js'
import { addEvent } from '../public/js/library.js'

const TITLE_BUTTON_ID = 'title-button'
const DESCRIPTION_BUTTON_ID = 'desc-button'
const ERROR_BUTTON_ID = 'error-button'
const TEXT_INPUT_ID = 'text-input'
const TEXT_AREA_ID = 'text-area'

export default {

  init: function() {
    const titleButton = $(TITLE_BUTTON_ID).getElement()
    const descriptionButton = $(DESCRIPTION_BUTTON_ID).getElement()
    const errorButton = $(ERROR_BUTTON_ID).getElement()

    const textAreaParent = $(TEXT_AREA_ID).getElement()
    const textInputParent = $(TEXT_INPUT_ID).getElement()

    const title = new EditInPlaceField(
      'title-id',
      textInputParent,
      'Click Here to Edit Title' 
    )

    const desc = new EditInPlaceArea(
      'desc-id',
      textAreaParent,
      'Click Here to Edit Description'
    ) 
    
    addEvent(titleButton, 'click', () => setValue(title, 'Hi!'))
    addEvent(descriptionButton, 'click', () => setValue(desc, 'Hellow World!'))
    addEvent(errorButton, 'click', () => setValue({})) // This should give error because object does not implement the required interface
  }
  
}