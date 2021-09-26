# Example: Edit-in-Place

To demonstrate inheritance in JavaScript, same example is applied with different techniques on three branches using classical inheritance, prototypal inheritance, and mixin classes.

Imagine that you have been given a task: write a modular, reusable API for creating and managing edit-in-place fields (edit-in-place refers to a normal block of text in a web page that when clicked turns into a form field and several buttons that allow that block of text to be edited).

It should allow you to assign a unique ID to the object, give it a default value, and specify where in the page you want it to go. It should also let you access the current value of the field at any time and have a couple of different options for the type of editing field used (e.g., a text area or an input text field).