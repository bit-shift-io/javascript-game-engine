export default class Gravity2dComponent {
    constructor() {
        this.gravity = 0;
        this.gravityDirection = 0;
    }

    init(gravity, gravityDirection) {
        this.gravity = gravity;
        this.gravityDirection = gravityDirection;
    }
}