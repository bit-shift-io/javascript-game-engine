export default class Velocity2dComponent {
    constructor() {
        this.vx = 0;
        this.vy = 0;
        this.friction = 0;
    }

    set(vx, vy) {
        this.vx = vx;
        this.vy = vy;
    }

    add(vx, vy) {
        this.vx += vx;
        this.vy += vy;
    }

    mul(vx, vy) {
        this.vx *= vx;
        this.vy *= vy;
    }

    mul(nb) {
        this.vx *= nb;
        this.vy *= nb;
    }
}