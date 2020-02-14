import Velocity2dComponent from '../component/velocity_2d_component.js';

export default class Velocity2dSystem {
    update(entities) {
        var velocity2dEntities = entities.queryComponents([Velocity2dComponent]);
        velocity2dEntities.forEach(function(entity) {
            entity.position2dComponent.add(entity.velocity2dComponent.vx, entity.velocity2dComponent.vy);
        });
    }
}