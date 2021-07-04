jQuery(document).ready(function(){
	// Hide
	jQuery('#hide-me').click(function(){
		jQuery(this).hide();
	});

	// Double Click
	jQuery('#dblclick').dblclick(function(){
		jQuery(this).hide();
	});

	// Mouse Enter
	jQuery('#mouseenter').mouseenter(function(){
		alert('Emil Sadekin Islam');
	});

	// Mouse Leave
	jQuery('#mouseleave').mouseenter(function(){
		alert('Emil Sadekin Islam');
	});
	jQuery('#mouseleave').mouseleave(function(){
		alert('Bye!! you leave now...');
	});

	// Hover
	jQuery('#hover').hover(function(){
		alert('Your hover me...');
	},
	function(){
		alert('You leave me...');
		});

	// Focus
	jQuery('input').focus(function(){
		jQuery(this).css('background-color', 'crimson');
	});
	jQuery('input').blur(function(){
		jQuery(this).css('background-color', 'transparent');
	});

	// On
	jQuery('#on').on({
		mouseenter: function(){
			alert('Mouse Enter');
		},
		mouseleave: function(){
			alert('Mouse leave');
		},
		click: function(){
			jQuery(this).css('background-color', 'crimson');
			jQuery(this).css('color', 'white');
		}
	});
});