var StickyNote = Backbone.Model.extend({
    defaults: {
        text:""
    }
});

var StickyNoteList = Backbone.Collection.extend({
    model: StickyNote,
    localStorage: new Backbone.LocalStorage('sitckynotes')
});

var StickyNoteView = Backbone.View.extend({
    template: _.template( $('#stickynote').html() ),

    tagname: 'li',

    events: {
        'dblclick .body': 'edit'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    edit: function () {
        console.warn('edit');
    }
});

var AppView = Backbone.View.extend({
    el: $('#main_content'),

    events: {
        'click .button': 'newSticky'
    },

    initialize: function () {
        this.listenTo(Notes, 'add', this.newSticky);
        this.listenTo(Notes, 'reset', this.addAll);
    },

    newSticky: function (sticky) {
        console.warn(sticky);
        var view = new StickyNoteView({model: sticky});
        $('#sticky-list').append( view.render().el );
    },

    addAll: function () {
        this.$('#sticky-list').html('');
        Notes.each(this.newSticky, this);
    }
});

var Notes = new StickyNoteList();

$( document ).ready(function(){
      //Creating Stickies, Making Draggable
      new AppView();
      $( ".square" ).draggable();

      Notes.add({
          text: 'test'
      });

      Notes.add({
          text: 'google'
      });

      // $(function() {
      //
      //       //On click event, create div, class draggable & square
      //       $('div[class=button]').click(function(){
      //         var userInput=prompt('Input please');
      //         var htmlData='<div class="square ui-widget-content ui-draggable"><p class="note-text">' + userInput + '</p></div>';
      //         $('#squarecontainer').append(htmlData);
      //         $( ".square" ).draggable();
      //       });
      // });

      // Slide Up Effect to ----- About Content
      // $("#nav_about").click(function(){
      //     $("#main_content").slideUp();
      // });

      // Slide Down Effect to ----- Home Content
      // $("#nav_home").click(function(){
      //     $("#main_content").slideDown();
      // });
});