import Entity from './entity.js';

export default class EntityManager {
    constructor() {
        this.entities = [];
    }

    createEntity() {
        var entity = new Entity();
        this.entities.push(entity);
        return entity;
    }

    all() {
        return this.entities;
    }

    queryComponent(component) {
        var result = [];
        this.entities.forEach(function(entity) {
            if (entity.hasComponent(component))
                result.push(entity);
        });
        return result;
    }
    queryComponents(components) {
        var result = [];
        this.entities.forEach(function(entity) {
            if (entity.hasComponents(components))
                result.push(entity);
        });
        return result;
    }

    queryTag(tag) {
        var result = [];
        this.entities.forEach(function(entity) {
            if (entity.hasTag(tag))
                result.push(entity);
        });
        return result;
    }
    queryTags(tags) {
        var result = [];
        this.entities.forEach(function(entity) {
            if (entity.hasTags(tags))
                result.push(entity);
        });
        return result;
    }
}
