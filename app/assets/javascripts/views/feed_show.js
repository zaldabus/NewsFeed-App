NewsReader.Views.FeedShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['feed_list_item'],

  render: function () {
    var content = this.template({
      feed: this.model
    });
    this.$el.html(content);

    return this;
  }
});