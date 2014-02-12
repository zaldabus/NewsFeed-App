NewsReader.Routers.Feeds = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index"
  },

  index: function () {
    console.log(this.$rootEl);
    var view = new NewsReader.Views.FeedIndex({
      collection: NewsReader.collection
    })
    this.$rootEl.html(view.render().$el)
  },

  _swapView: function (newView) {
    // remove old view, turn it off
    // render newView onto $rootEl
  }

});