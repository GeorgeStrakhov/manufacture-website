$(function(){ //DOM is ready

    /*load json file (string) with content & turn it into an object*/
    $.ajax({
        url:"content.js",
        async:false,
        dataType:"json",
        success: function(response) {
            var allContent = $.parseJSON(response);
    
            /*create backbone model for a single level*/
            var SingleLevelModel = Backbone.Model.extend({
                defaults: function() {
                    return {
                        type: "text",
                        content: "warning: empty level",
                        html_content: "<p>warning: empty level</p>",
                    };
                },
                initialize: function() {
                    console.log(allContent);
                },
            });
            
            /*recursively walk through the content object and instantiate backbone models for all levels of the object with all except the 0 level being "collapsed"*/
            
            /*add binding so that views are created and destroyed as models are "expanded" and "collapsed"*/
            
            /*create view for a single level and add listening to links (?)*/
            
            var SingleLevelView = Backbone.View.extend({
                tagName: "div",
                template: _.template($("#single_level_template").html()),
                events: {},
                initialize: function() {
                    this.model.bind('change', this.render, this);
                },
                render: function() {
                    this.$el.html(this.template(this.model.toJSON()));
                    return this;
                },
            });
            
            /*instantiate level_0 view*/
            
            var level_0 = new SingleLevelModel({content: "0"});
            
            //console.log(level_0.get("type"));
            
            var view_0 = new SingleLevelView({model: level_0});
            
            $("#container").append(view_0.render().el);
            
            
            level_0.set({"html_content":"<p>hellonewworld</p>"});
        
        } // end of response for ajax to get content.json
    }); // end of ajax to get content.json
}); //end of document.ready