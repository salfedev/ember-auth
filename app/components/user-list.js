import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.Errors = [];
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },

  actions: {
    required(event) {
      if (!event.target.value) {
        this.get('errors').pushObject({ message: `${event.target.name} is required` });
      }
    }
  }
});
