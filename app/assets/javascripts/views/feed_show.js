NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

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
  },

  events: {
    "click .reload": "reloadFeed"
  },

  reloadFeed: function(event) {
    var that = this;
    var newEntries = new NewsReader.Collections.Entries(this.model.id);

    newEntries.fetch({
      success: function () {
        that.model.set({ entries: newEntries })
      },
      error: function () {
        alert("ERROWR!");
      }
    });
  }

});