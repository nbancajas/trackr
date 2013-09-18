define(
  ['jquery','underscore','backbone', 'hbs!app/templates/header'],
  function($,_,Backbone, Tmpl_Header) {

  var Views_Headerr = Backbone.View.extend({
    template: Tmpl_Header,
    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return Views_Headerr;
});
