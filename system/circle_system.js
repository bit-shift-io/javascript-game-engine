import CanvasComponent from '../component/canvas_component.js';
import CircleComponent from '../component/circle_component.js';
import * as Util from '../core/util.js';

export default class CircleSystem {
    update(entities) {
        var canvasEntities = entities.queryComponent(CanvasComponent);
        var circleEntities = entities.queryComponent(CircleComponent);
        canvasEntities.forEach(function(canvas) {
            circleEntities.forEach(function(circle) {
                canvas.canvasComponent.context.beginPath();
                canvas.canvasComponent.context.moveTo(circle.position2dComponent.x, circle.position2dComponent.y - circle.circleComponent.radius);
                for (var i = 0; i <= 360; i += 10)
                    canvas.canvasComponent.context.lineTo(circle.position2dComponent.x + Math.cos(Util.degtorad(i)) * circle.circleComponent.radius, circle.position2dComponent.y - Math.sin(Util.degtorad(i)) * circle.circleComponent.radius);
                canvas.canvasComponent.context.closePath();
                canvas.canvasComponent.context.fillStyle = circle.circleComponent.color;
                canvas.canvasComponent.context.lineCap = 'round';
                canvas.canvasComponent.context.fill();
            });
        });
    }
}