// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

document.addEventListener("turbolinks:load", function() {
 tinymce.remove();
 tinymce.init({
   height: '480',
   selector:'textarea#post_body',
   plugins: " autolink codesample image media link code wordcount autosave emoticons spellchecker fullpage",
   menubar: "tools file",
   toolbar: "undo redo | styleselect | bold italic link |emoticons | image media | code  codesample | fullpage | spellchecker restoredraft",
   spellchecker_language: 'sv_SE'
  });

})
