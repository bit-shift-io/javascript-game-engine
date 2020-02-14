import EntityManager from './entity_manager.js';

export default class ECS {
    constructor() {
        this.entities = new EntityManager();
        this.systems = [];
    }

    addSystem(system) {
        this.systems.push(new system);
    }
    addSystems(systems) {
        for (var key in systems)
            this.systems.push(new systems[key]);
    }

    update() {
        var entities = this.entities;
        this.systems.forEach(function(system) {
            system.update(entities);
        });
    }
}