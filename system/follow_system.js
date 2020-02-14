import Follow2dComponent from '../component/follow_2d_component.js';

export default class FollowSystem {
    update(entities) {
        var followEntities = entities.queryComponent(Follow2dComponent);
        followEntities.forEach(function(entity) {
            entity.velocity2dComponent.set(entity.follow2dComponent.tx - entity.position2dComponent.x, entity.follow2dComponent.ty - entity.position2dComponent.y);
            entity.velocity2dComponent.mul(entity.follow2dComponent.easing, entity.follow2dComponent.easing);
        });
    }
}