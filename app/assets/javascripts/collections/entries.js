NewsReader.Collections.Entries = Backbone.Collection.extend({

  initialize: function (feedId) {
    if (feedId) {
      this.feedId = feedId;

      this.url = "/feeds/" + this.feedId + "/entries";
    }
  },

  model: NewsReader.Models.Entry

});