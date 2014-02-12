NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  parse: function (response) {
    var entries = new NewsReader.Collections.Entries(
      response.entries
    );
    response.entries = entries;

    return response;
    /*
    - convert nested entry JSON into Entry models
    - make a collection of all entries
    - set an entries attribute on this model
    - return object (this?)
    */
  }
});