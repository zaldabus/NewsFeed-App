window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.collection = new NewsReader.Collections.Feeds;

    this.collection.fetch({
      success: function () {
        new NewsReader.Routers.Feeds({
          "$rootEl": $("#content")
        });
        Backbone.history.start();
      },
      error: function () {
        alert("FATAL ERROR");
      }
    });
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
