import * as Util from '../core/util.js';
import CircleComponent from '../component/circle_component.js';

export default class CollisionSystem {
    update(entities) {
        var circleEntities = entities.queryComponent(CircleComponent);
        for (var i = 0; i < circleEntities.length; i++) {
            var circle = circleEntities[i];
            for (var j = 0; j < i; j++) {
                var other = circleEntities[j];
                var distance = Util.pointDistance(circle.position2dComponent.x, circle.position2dComponent.y, other.position2dComponent.x, other.position2dComponent.y);
                var direction = Util.pointDirection(circle.position2dComponent.x, circle.position2dComponent.y, other.position2dComponent.x, other.position2dComponent.y);
                var circleAngle = Util.pointDirection(0, 0, circle.velocity2dComponent.vx, circle.velocity2dComponent.vy);
                var otherAngle = Util.pointDirection(0, 0, other.velocity2dComponent.vx, other.velocity2dComponent.vy);
                var circleSpeed = Util.pointDistance(0, 0, circle.velocity2dComponent.vx, circle.velocity2dComponent.vy);
                var otherSpeed = Util.pointDistance(0, 0, other.velocity2dComponent.vx, other.velocity2dComponent.vy);
                var padding = (circle.circleComponent.radius + other.circleComponent.radius) - distance;
                if (padding > 0) {
                    circle.position2dComponent.add(-Math.cos(direction) * padding/2, -Math.sin(direction) * padding/2);
                    other.position2dComponent.add(Math.cos(direction) * padding/2, Math.sin(direction) * padding/2);

                    var newAngle = (direction + Math.PI) + (direction - circleAngle);
                    circle.velocity2dComponent.set(Math.cos(newAngle) * circleSpeed, Math.sin(newAngle) * circleSpeed);
                    var newAngle = direction + (direction - (otherAngle + Math.PI));
                    other.velocity2dComponent.set(Math.cos(newAngle) * otherSpeed, Math.sin(newAngle) * otherSpeed);

                    circle.position2dComponent.add(circle.velocity2dComponent.vx, circle.velocity2dComponent.vy);
                    other.position2dComponent.add(other.velocity2dComponent.vx, other.velocity2dComponent.vy);

                    circle.velocity2dComponent.mul(circle.velocity2dComponent.friction);
                    other.velocity2dComponent.mul(other.velocity2dComponent.friction);
                }
            }
            if (circle.position2dComponent.x < circle.circleComponent.radius) {
                circle.position2dComponent.x = circle.circleComponent.radius;
                if (circle.velocity2dComponent.vx < 0)
                    circle.velocity2dComponent.vx *= -1;
            }
            if (circle.position2dComponent.y < circle.circleComponent.radius) {
                circle.position2dComponent.y = circle.circleComponent.radius;
                if (circle.velocity2dComponent.vy < 0)
                    circle.velocity2dComponent.vy *= -1;
            }
            if (circle.position2dComponent.x > 600-circle.circleComponent.radius) {
                circle.position2dComponent.x = 600-circle.circleComponent.radius;
                if (circle.velocity2dComponent.vx > 0)
                    circle.velocity2dComponent.vx *= -1;
            }
            if (circle.position2dComponent.y > 400-circle.circleComponent.radius) {
                circle.position2dComponent.y = 400-circle.circleComponent.radius;
                if (circle.velocity2dComponent.vy > 0)
                    circle.velocity2dComponent.vy *= -1;
            }
        }
    }
}