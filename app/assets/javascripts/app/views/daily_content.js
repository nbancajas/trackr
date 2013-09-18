define(
  ['jquery','underscore','backbone','hbs!app/templates/daily_content'],
  function($,_,Backbone, Tmpl_DailyContent) {

  var Views_DailyContent = Backbone.View.extend({
    template: Tmpl_DailyContent,
    render: function() {
      this.$el.html(this.template({myvar: 'hey'}));
      return this;
    }
  });

  return Views_DailyContent;
});
