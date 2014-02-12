NewsReader.Views.FeedShow = Backbone.View.extend({

  tagName: 'ul',

  template: JST['feed_show'],

  render: function () {
    var that = this;
    var content = this.template({ feed: this.model });
    this.$el.html(content);

    this.model.get('entries').each(function(entry) {
      var entryListItem = new NewsReader.Views.EntryListItem({
        model: entry
      });

      that.$el.append(entryListItem.render().$el);
    });

    this.$el.append("<br><a href='#'>Back home</a>");

    return this;
  }

});