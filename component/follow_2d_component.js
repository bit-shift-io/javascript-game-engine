export default class Follow2dComponent {
    constructor() {
        this.tx = 0;
        this.ty = 0;
        this.easing = 1;
    }

    set(tx, ty, easing) {
        this.tx = tx;
        this.ty = ty;
        this.easing = easing;
    }
}