NewsReader.Views.FeedIndex = Backbone.View.extend({

  tagName: 'ul',

  template: JST['feed_index'],

  render: function() {
    var that = this;
    var content = this.template();

    this.$el.html(content);
    this.collection.each(function (feed) {
      var view = new NewsReader.Views.FeedShow({
        model: feed
      })
      that.$el.append(view.render().$el);
    });

    return this;
  }
});