import * as Util from '../core/util.js';
import Gravity2dComponent from '../component/gravity_2d_component.js';

export default class Gravity2dSystem {
    update(entities) {
        var gravity2dEntities = entities.queryComponent(Gravity2dComponent);
        gravity2dEntities.forEach(function(entity) {
            entity.velocity2dComponent.mul(entity.velocity2dComponent.friction, entity.velocity2dComponent.friction);
            entity.velocity2dComponent.vx += Math.cos(Util.degtorad(entity.gravity2dComponent.gravityDirection)) * entity.gravity2dComponent.gravity;
            entity.velocity2dComponent.vy += Math.sin(Util.degtorad(entity.gravity2dComponent.gravityDirection)) * entity.gravity2dComponent.gravity;
        });
    }
}