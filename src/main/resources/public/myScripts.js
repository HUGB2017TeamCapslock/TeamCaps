		
	$(document).ready(function() {
	  $.ajax({
		type: 'GET',
		url: '/getTable',
	  }).done(function(result) {
		for(var i = 0; i < 10; i++){
			$('#' + (i + 1)).html(result.charAt(i)).attr('class', 'alert alert-success');
		}
	  }).fail(function() {
		$('#bla').html('Failed to load table! \n Contact team caps lock for support.').attr('class', 'alert alert-danger');
	  });
	  
		var form = $('#pInput');
		form.submit(function( event ) {
		  var number = $("#xIn").val();
		  $('#xIn').val('');
		  $.ajax({
			type: form.attr('method'),
			url: form.attr('action'),
			data: 'xIn=' + number
		  }).done(function(result) {
				if(result.length > 10){
				for(var i = 0; i < 10; i++){
					$('#' + (i + 1)).html(result.charAt(i)).attr('class', 'alert alert-success');
					}
					$('#gameStatus').html(result.substring(9));
					$('#play').attr('disabled', true);
				}
				else{
					for(var i = 0; i < 10; i++){
					$('#' + (i + 1)).html(result.charAt(i)).attr('class', 'alert alert-success');
				}
				}
				$.ajax({
				type: 'GET',
				url: '/player'
			}).done(function(result) {
				$('#pRound').html(result);
			}).fail(function() {
				$('#error').html('Failed to load player! \n Contact team caps lock for support.').attr('class', 'alert alert-danger'.delay(2000).fadeOut());
			});
				
				
				
				
		  }).fail(function() {
			$('#error').html('Error, illegal position...').attr('class', 'alert alert-danger').delay(2000).fadeOut();
			
		  });
		  event.preventDefault();
		});
	  
	  
	  $.ajax({
				type: 'GET',
				url: '/player'
			}).done(function(result) {
				$('#pRound').html(result);
			}).fail(function() {
				$('#error').html('Failed to load player! \n Contact team caps lock for support.').attr('class', 'alert alert-danger').delay(2000).fadeOut();
			});
		
		var resetGame = $('#resetGame');
		resetGame.click( function() {
			$.ajax({
			type: resetGame.attr('method'),
			url: resetGame.attr('action')
			}).done(function(result) {
			$('#gameStatus').html("");
			$('#play').attr('disabled', false);
			for(var i = 0; i < 10; i++){
				
				$('#' + (i + 1)).html(result.charAt(i)).attr('class', 'alert alert-success');
			}
			
			$.ajax({
					type: 'GET',
					url: '/player'
				}).done(function(result) {
					$('#pRound').html(result);
				}).fail(function() {
				$('#error').html('Failed to load player! \n Contact team caps lock for support.').attr('class', 'alert alert-danger');
				});
			
			}).fail(function() {
				$('#error').html('Error, illegal position...').attr('class', 'alert alert-danger');
			});
		})
		
		
		});
		
	
	