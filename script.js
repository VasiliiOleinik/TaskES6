'use strict';


class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.textContent = "Hello, i`m new Div!";
        newDiv.style.cssText = `width: ${this.width}px; height: ${this.height}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
    }
}

let box = new Options(200, 200, 'red', 22, 'right');

box.createDiv();