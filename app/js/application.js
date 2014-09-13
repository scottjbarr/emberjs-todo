window.Todos = Ember.Application.create();

// use this when playing with fixtures
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
