import ModalBodyView from 'discourse/views/modal-body';

export default ModalBodyView.extend({
  title: function () {
    return "Zoom in";//I18n.t("canned_replies.insert.modal_title");
  }.property(),

  didInsertElement: function() {
  	this.cloneTiles();
  },

  cloneTiles: function() {
    var modalHtml = "";
    modalHtml += "<img src='" + $('.tile5').attr('src') + "' class='tile5 tile'/>";
    modalHtml += "<img src='" + $('.tile6').attr('src') + "' class='tile6 tile'/>";
    modalHtml += "<img src='" + $('.tile11').attr('src') + "' class='tile11 tile'/>";
    modalHtml += "<img src='" + $('.tile12').attr('src') + "' class='tile12 tile'/>";
    $('#tile-modal-3').html(modalHtml);
  }

});