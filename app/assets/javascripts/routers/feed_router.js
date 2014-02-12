NewsReader.Routers.Feeds = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var view = new NewsReader.Views.FeedIndex({
      collection: NewsReader.collection
    })
    this._swapView(view);
  },

  show: function (id) {
    // var feed = new NR.Models.Feed({ id: id })
    var view = new NewsReader.Views.FeedShow({
      model: NewsReader.collection.get(id)
    })
    this._swapView(view);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});