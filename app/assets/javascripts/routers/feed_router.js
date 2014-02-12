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
    var that = this;
    var feed = new NewsReader.Models.Feed({
      id: id
    });
    feed.fetch({
      success: function () {
        var view = new NewsReader.Views.FeedShow({
          model: feed
        })
        that._swapView(view);
      },
      error: function () {
        alert("FATAL FUCKING ERROR");
      }
    })
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});