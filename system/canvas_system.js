import CanvasComponent from '../component/canvas_component.js';

export default class CanvasSystem {
    update(entities) {
        var canvasEntities = entities.queryComponent(CanvasComponent);
        canvasEntities.forEach(function(canvas) {
            canvas.canvasComponent.context.clearRect(0, 0, 600, 400);
        });
    }
}