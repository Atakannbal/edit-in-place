import { addEvent } from "../public/js/library.js";

const FORM_ID = 'form-id';
const OUTPUT_ID = 'output-id';

let formEl;
let outputEl;

export default  {

    sendRegistration: function(data) {
      this.displayResults(`<pre> Username: ${data.name} Password: ${data.password} </pre>`)
    },
    
    displayResults: function(response) {
      outputEl.innerHTML = response
    },
    
    handleSubmit: function(e) {
      e.preventDefault() 
      
      const data = {}
      const inputs = formEl.getElementsByTagName('input')
      
      // Collect the values of the input fields in the form
      for(let i = 0, len = inputs.length; i < len; i++) {
        data[inputs[i].name] = inputs[i].value;
      }

      this.sendRegistration(data);
    },

    init: function() {
      formEl = $(FORM_ID).getElement()
      outputEl = $(OUTPUT_ID).getElement()

      addEvent(formEl, 'submit', this.handleSubmit)
    },  
}





