import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var t = new Date();
    return [t.getHours(),t.getMinutes(),t.getSeconds()]
  }
});
