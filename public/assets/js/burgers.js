// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
  $('.eat').on('click', function(event){
      var id = $(this)[0].dataset.id
      const obj = {devoured: 1}
      $.ajax('/api/update/' + id, {
          type: 'PUT', 
          data: obj
      }).then(() => location.reload()
      ).fail(()=>location.reload())
  });
  //form to insert new burger to menu
  $('.newBurger').on('submit', event => {
      event.preventDefault();
      var burger = {
          burger_name : $('#burger').val().trim()
      }

      if ($('#burger').val().trim()) {
          $.ajax('/api/add', {
              type: 'POST',
              data: burger
          }).then(() => location.reload()).fail(() => location.reload())
      }
  })
});