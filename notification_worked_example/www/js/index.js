var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 1000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'Breaktime request',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Take a break", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Carry on then.', duration: 3000});

}

   
   
function createNotification() {
        		
    			
    //
    //setup notification
    //
	cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        text: 	"This is an example notification",
        trigger: { in: 10, unit: 'second' }
   	});
    
}