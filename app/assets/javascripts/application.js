// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function(){
	$('#search').on('keyup',function(){
		var x=($('#search').val()).trim()
		if (x.length>0){
		$('#search_key').click();
		}
	});
});
$(function(){
	$("#search").autocomplete({select:function(event,ui){
	setTimeout(function(){
		$('#search_key').click();
		//alert(ui.item.value);
							},10);
	}});
})












// $(function() {
//  $("#search").autocomplete({select: function(event,ui) { 
//  												//var subject = $('#search');
//  												//$('#name').text(ui.item.value);
// 											    $.ajax({
// 											        type: 'GET', 
// 											        url: 'search' , 
// 											        dataType: 'script',
// 											        data: { search: ui.item.value }

// 											    });
// 											}});
	    	

// 											    });