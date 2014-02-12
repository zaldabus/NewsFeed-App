NewsReader.Views.FeedListItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['feed_list_item'],

  events: {
    "click .feed-link": "showFeedPage"
  },

  render: function () {
    var content = this.template({
      feed: this.model
    });
    this.$el.html(content);

    return this;
  },

  showFeedPage: function (event) {
    var feed = $(event.currentTarget).attr('href');
    console.log(feed);
    Backbone.history.navigate(feed, {trigger: true})
  }
});