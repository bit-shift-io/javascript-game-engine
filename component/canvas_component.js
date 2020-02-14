export default class CanvasComponent {
    constructor() {
        this.name = null;
        this.element = null;
        this.context = null;
        this.mouseX = 0;
        this.mouseY = 0;
    }

    init(name) {
        this.name = name;
        this.element = document.getElementById(this.name);
        this.context = this.element.getContext('2d');
    }

    updateMousePos(element, evt) {
        var rect = element.getBoundingClientRect();
        this.mouseX = evt.clientX - rect.left,
        this.mouseY = evt.clientY - rect.top
    }
}