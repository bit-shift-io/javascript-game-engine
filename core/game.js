import ECS from './ecs.js';

// systems
import CanvasSystem from '../system/canvas_system.js';
import CircleSystem from '../system/circle_system.js';
import CollisionSystem from '../system/collision_system.js';
import FollowSystem from '../system/follow_system.js';
import Gravity2dSystem from '../system/gravity_2d_system.js';
import Velocity2dSystem from '../system/velocity_2d_system.js';

// components
import CanvasComponent from '../component/canvas_component.js';
import CircleComponent from '../component/circle_component.js';
import Gravity2dComponent from '../component/gravity_2d_component.js';
import Position2dComponent from '../component/position_2d_component.js';
import Velocity2dComponent from '../component/velocity_2d_component.js';
import Follow2dComponent from '../component/follow_2d_component.js';

export default class Game {

    constructor() {
        console.log('init game');

        // loop variables
        this.lastTime = (new Date()).getTime();
        this.currentTime = 0;
        this.delta = 0;
        this.fps = 60;
        this.interval = 1000/this.fps;

        // ECS
        // demo here used as example
        // https://morgancaron.github.io/ECSjs-example/index.html
        this.ecs = new ECS();

        // ECS systems
        this.ecs.addSystems([
            CanvasSystem,
            FollowSystem,
            Gravity2dSystem,
            Velocity2dSystem,
            CollisionSystem,
            CircleSystem
        ]);

        // configure canvas component
        var canvas = this.ecs.entities.createEntity();
        canvas.addComponent(CanvasComponent);
        canvas.canvasComponent.init('canvas');
        canvas.canvasComponent.element.addEventListener('mousemove', function(evt) {
            canvas.canvasComponent.updateMousePos(this, evt);
        }, false);

        // create circle components
        for (var i = 0; i < 100; i++) {
            var circle = this.ecs.entities.createEntity();
            circle.addComponents([Position2dComponent, Velocity2dComponent, CircleComponent, Gravity2dComponent]);
            circle.position2dComponent.set(50 + (i % 20) * 25, 50 + Math.floor(i / 20) * 25);
            circle.velocity2dComponent.set(Math.random() - .5, 0);
            circle.velocity2dComponent.friction = .95;
            circle.circleComponent.init(10, 'orange');
            circle.gravity2dComponent.init(.7, 90);
        }

        var circle = this.ecs.entities.createEntity();
        circle.addComponents([Position2dComponent, Velocity2dComponent, Gravity2dComponent, CircleComponent]);
        circle.position2dComponent.set(50, 50);
        circle.velocity2dComponent.set(0, 0);
        circle.velocity2dComponent.friction = .95;
        circle.gravity2dComponent.init(.7, 90);
        circle.circleComponent.init(20, 'blue');

        this.circle = this.ecs.entities.createEntity();
        this.circle.addTag("followMouse");
        this.circle.addComponents([Position2dComponent, Velocity2dComponent, Follow2dComponent, CircleComponent]);
        this.circle.position2dComponent.set(30, 200);
        this.circle.velocity2dComponent.set(0, 0);
        this.circle.velocity2dComponent.friction = 1;
        this.circle.follow2dComponent.set(30, 200, 1);
        this.circle.circleComponent.init(20, 'green');

        window.requestAnimationFrame(() => {this.loop()});
    }

    update() {
        this.ecs.update();
    }
    
    // game loop updater
    loop() {
        window.requestAnimationFrame(() => {this.loop()});
        this.currentTime = (new Date()).getTime();
        this.delta = (this.currentTime-this.lastTime);
    
        if(this.delta > this.interval) {
            this.update();
        }
    }
}

  
