
import * as Util from './util.js';

export default class Entity {
    constructor(name) {
        this.id = nbEntities++;
        this.name = name;
        this.tags = [];
    }

    addComponent(component) {
        this[Util.lowercase_first_letter(component.name)] = new component;
        return this;
    }
    addComponents(components) {
        for (var key in components)
            this.addComponent(components[key]);
        return this;
    }
    removeComponent(component) {
        if (this[Util.lowercase_first_letter(component.name)] != undefined)
            delete this[Util.lowercase_first_letter(component.name)];
        return this;
    }
    removeComponents(components) {
        for (var key in components)
            this.removeComponent(components[key]);
        return this;
    }
    hasComponent(component) {
        return (this[Util.lowercase_first_letter(component.name)] != undefined);
    }
    hasComponents(components) {
        for (var key in components) {
            if (!this.hasComponent(components[key]))
                return false;
        }
        return true;
    }

    addTag(tag) {
        this.tags.push(tag);
        return this;
    }
    addTags(tags) {
        for (var key in tags)
            this.addTag(tags[key]);
        return this;
    }
    removeTag(tag) {
        var index = this.tags.indexOf(tag);
        if (index != -1)
            this.tags[index].remove();
        return this;
    }
    removeTags(tags) {
        for (var key in tags)
            this.removeTag(tags[key]);
        return this;
    }
    hasTag(tag) {
        return (this.tags.indexOf(tag) != -1);
    }
    hasTags(tags) {
        for (var key in tags)
            if (!this.hasTag(tags[key]))
                return false;
        return true;
    }
}
var nbEntities = 0;