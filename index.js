$("ul").on("click","li",function(){
	// $("li").css("color","gray");// if you use this code it will make all the li as gray but we want only those to be gray which we clicked for this use
	// $(this).css("color","gray"); // to add multiple properties make it as an object using {}

  // To toggle class 
 //  if($(this).css("color")==="rgb(128, 128, 128)"){                   // This will give color of the item clicked in rgba format

 //  	$(this).css({
 //  		color:"black",
 //  		textDecoration:"none"
 //  	});
 //  }else{
 //  		$(this).css({                                                          // rather than this all code make a class and toggle it 
	// 	color:"gray",
	// 	textDecoration:"line-through" // js doesnt suport text-decoration
	// });
 //  }               

$(this).toggleClass("add");
});




// To delete a todo

$("ul").on("click","span" ,function(a){  // means we are listening on the event when page loads ie ul then listenig in span
	a.stopPropagation();
	                           // you will notice that once click is done and alert is fired add class is also
	                                             // fired coz span is inside li so we're indirectly clicking li to stop this bubbling 
	                                             // we use stop propogation means when span is clicked listner wont propogate i.e 
	                                             // even if span is inside so many things it wont trigger anything expect span listner

// $(this).remove();      // if we use this it will delete span related to it not the actual parent list to delete parent use .parent()	
// $(this).parent().remove();  // This will give the parent element of event clicked // we can use fadeout also to add animation rather tha remove
// 	     // this will set display to none wont delete actual list so use .remove also
// $(this).parent().fadeOut().remove();  // This wont wait for fadeout to be executed so use below functiuon
$(this).parent().fadeOut(500,function(){
	$(this).remove();
})
 

})


// To add a todo

$("input[type='text']").keypress(function(a){
	// you want to add data after pressing enter for this we should now the character value of enter which is known by which

	if(a.which===13){         // To add data we should extract data from input box add it to list and clear the input box
      var tododata = $(this).val();  // extracting data
      $(this).val(" ")  // emptying input box
      $("ul").append("<li>" + "<span><i class='fas fa-trash'></i></span>" + tododata + "</li>")  // even after doing this add class wont be added to this li 
                                                                       // as jquery listerns will work on only those which are already existing
                                                                       // li which were created from input box wernt existint when code is rubn first time

                                                                       // to tackel this we use on click instead of click and a lister on ul
                                                                       // on click will add listner on all future element 

	}
})



$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
