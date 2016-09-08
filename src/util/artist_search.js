const ArtistSearch = {
  search(artist){
    $.ajax({
      url: '/api/comments',
      type: "POST",
      dataType: 'json',
      data: {comment: comment},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },

};

module.exports = ArtistSearch;
