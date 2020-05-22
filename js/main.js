
	/*
	$('.main').dblclick(function(){
		//$(this).empty();
		$(this).append('<input>');
		//$("<div>",{id:"select" ,class:})
		
	})

	$('.main').append('<input>')
	/*$(".main").mousedown(function(ev){
	      if(ev.which == 3)
	      {
	            $('.edit').css('display','block');
	      }
	});*/
	$('.main').append('<input>')

	function draw(a,b,c,d){
		var $bar = $(document.createElementNS("http://www.w3.org/2000/svg", "line")).attr({
		        x1: a,
		        y1: b,
		        x2: c,
		        y2: d
		        
		    });
		$('svg').append(
			$bar.attr({stroke:'#00cec9',class: 'line'})
		)
	}

	//let x=1;
	$('#add').click(function(){
		//$('<line x1="0" y1="0" x2="200" y2="200" style="stroke:red;stroke-width:2" />').appendTo('svg');
		//delcl($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
		 console.log($('.line').length)
		$('.line').remove();

		$('.row-1').append(
			
			$('<div>',{class:'f1'/*,id:'h'+x+'header'*/}).append(
				//$('<canvas>',{class:'myCanvas',width:'300px',height:'300px'}),

				$('<div>',{class:'f1-item'/*,id:'h'+x*/}).each(function(){
					var t=$(this);
					//var preT=$(this).prev()
					//console.log(t.offset())
					setTimeout(function(){
						//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
						//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
						$('.f1-item').map(function(i,v){
						    if(!$(v).hasClass('main')){
						    let xx=$(v).offset().left;
						    let yy=$(v).offset().top;
						    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
						    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
						    draw(xx1+75,yy1+80,xx+75,yy)
						    console.log(1212)
						    }
						})
					// console.log($('.line').length)
					})
					//connect($('.main').offset().left,$('.main').offset().top,t.offset().left,t.offset().top)
					
					t.append($('<input>',{class:'del'}).click(function(){
						$('.f1-item').click(function(){
							var t=$(this);
							console.log(t);
							$('body').find('.f1-item').removeClass('choose');
							t.addClass('choose');
						})
						$('.bold').click(function(){
							console.log('pok');
							var choose = $('body').find('.choose input');
							choose.toggleClass('bolder')
						})
						$('.upp').click(function(){
							console.log('pok');
							var choose = $('body').find('.choose input');
							choose.toggleClass('upper')
						})
						$('.it').click(function(){
							console.log('pok');
							var choose = $('body').find('.choose input');
							choose.toggleClass('ita')
						})
						
					}),
					$('<div>',{class:'edit'}).append(
						$('<h6>',{text:'F1'}),
						//f2
						$('<i>',{class:'add2 fas fa-plus-circle'}).click(function(){
							$('.line').remove();
							$(this).parent().parent().siblings().append(
								$('<div>',{class:'f1 f2'}).append(
									$('<div>',{class:'f1-item f2-item'}).each(function(){
										var t1=$(this);
										//console.log(t.offset())
										
										setTimeout(function(){
											//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
											//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
											$('.f1-item').map(function(i,v){
											    if(!$(v).hasClass('main')){
											    let xx=$(v).offset().left;
											    let yy=$(v).offset().top;
											    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
											    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
											    draw(xx1+75,yy1+80,xx+75,yy)
											    console.log(1212)
											    }
											})
										// console.log($('.line').length)
										})
										//connect($('.main').offset().left,$('.main').offset().top,t.offset().left,t.offset().top)
										
										t1.append($('<input>',{class:'del'}).click(function(){
											$('.f1-item').click(function(){
												var t=$(this);
												console.log(t);
												$('body').find('.f1-item').removeClass('choose');
												t.addClass('choose');
											})
											$('.bold').click(function(){
												console.log('pok');
												var choose = $('body').find('.choose input');
												choose.toggleClass('bolder')
											})
											$('.upp').click(function(){
												console.log('pok');
												var choose = $('body').find('.choose input');
												choose.toggleClass('upper')
											})
											$('.it').click(function(){
												console.log('pok');
												var choose = $('body').find('.choose input');
												choose.toggleClass('ita')
											})
										}),
										$('<div>',{class:'edit'}).append(
											$('<h6>',{text:'F2'}),
											$('<i>',{class:'add2 fas fa-plus-circle'}).click(function(){
												$('.line').remove();
												$(this).parent().parent().siblings().append(
													$('<div>',{class:'f1 f2'}).append(
														//f3
														$('<div>',{class:'f1-item'}).each(function(){
															var t2=$(this);
															//console.log(t.offset())
															setTimeout(function(){
											//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
											//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																$('.f1-item').map(function(i,v){
																    if(!$(v).hasClass('main')){
																    let xx=$(v).offset().left;
																    let yy=$(v).offset().top;
																    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																    draw(xx1+75,yy1+80,xx+75,yy)
																    console.log(1212)
																    }
																})
															// console.log($('.line').length)
															})
															
															//connect($('.main').offset().left,$('.main').offset().top,t.offset().left,t.offset().top)
															
															t2.append($('<input>',{class:'del'}).click(function(){
																$('.f1-item').click(function(){
																	var t=$(this);
																	console.log(t);
																	$('body').find('.f1-item').removeClass('choose');
																	t.addClass('choose');
																})
																$('.bold').click(function(){
																	console.log('pok');
																	var choose = $('body').find('.choose input');
																	choose.toggleClass('bolder')
																})
																$('.upp').click(function(){
																	console.log('pok');
																	var choose = $('body').find('.choose input');
																	choose.toggleClass('upper')
																})
																$('.it').click(function(){
																	console.log('pok');
																	var choose = $('body').find('.choose input');
																	choose.toggleClass('ita')
																})
															}),
															$('<div>',{class:'edit'}).append(
																$('<h6>',{text:'F3'}),
																$('<i>',{class:'add2 fas fa-plus-circle'}).click(function(){
																	$('.line').remove();
																	$(this).parent().parent().siblings().append(
																		$('<div>',{class:'f1 f2'}).append(
																			//f4
																			$('<div>',{class:'f1-item'}).each(function(){
																				var t3=$(this);
																				//console.log(t.offset())
																				
																				setTimeout(function(){
																				//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																				//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																					$('.f1-item').map(function(i,v){
																					    if(!$(v).hasClass('main')){
																					    let xx=$(v).offset().left;
																					    let yy=$(v).offset().top;
																					    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																					    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																					    draw(xx1+75,yy1+80,xx+75,yy)
																					    console.log(1212)
																					    }
																					})
																				// console.log($('.line').length)
																				})
															
																				//connect($('.main').offset().left,$('.main').offset().top,t.offset().left,t.offset().top)
																				
																				t3.append($('<input>',{class:'del'}).click(function(){
																					$('.f1-item').click(function(){
																						var t=$(this);
																						console.log(t);
																						$('body').find('.f1-item').removeClass('choose');
																						t.addClass('choose');
																					})
																					$('.bold').click(function(){
																						console.log('pok');
																						var choose = $('body').find('.choose input');
																						choose.toggleClass('bolder')
																					})
																					$('.upp').click(function(){
																						console.log('pok');
																						var choose = $('body').find('.choose input');
																						choose.toggleClass('upper')
																					})
																					$('.it').click(function(){
																						console.log('pok');
																						var choose = $('body').find('.choose input');
																						choose.toggleClass('ita')
																					})
																				}),
																				$('<div>',{class:'edit'}).append(
																					$('<h6>',{text:'F4'}),
																					$('<i>',{class:'add2 fas fa-plus-circle'}).click(function(){
																						$('.line').remove();
																						$(this).parent().parent().siblings().append(
																							$('<div>',{class:'f1 f2'}).append(
																							//f5
																								$('<div>',{class:'f1-item'}).each(function(){
																									var t4=$(this);
																									//console.log(t.offset())
																									setTimeout(function(){
																									//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																									//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																										$('.f1-item').map(function(i,v){
																										    if(!$(v).hasClass('main')){
																										    let xx=$(v).offset().left;
																										    let yy=$(v).offset().top;
																										    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																										    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																										    draw(xx1+75,yy1+80,xx+75,yy)
																										    console.log(1212)
																										    }
																										})
																									// console.log($('.line').length)
																									})
																									
																									//connect($('.main').offset().left,$('.main').offset().top,t.offset().left,t.offset().top)
																									
																									t4.append($('<input>',{class:'del'}).click(function(){
																											$('.f1-item').click(function(){
																												var t=$(this);
																												console.log(t);
																												$('body').find('.f1-item').removeClass('choose');
																												t.addClass('choose');
																											})
																											$('.bold').click(function(){
																												console.log('pok');
																												var choose = $('body').find('.choose input');
																												choose.toggleClass('bolder')
																											})
																											$('.upp').click(function(){
																												console.log('pok');
																												var choose = $('body').find('.choose input');
																												choose.toggleClass('upper')
																											})
																											$('.it').click(function(){
																												console.log('pok');
																												var choose = $('body').find('.choose input');
																												choose.toggleClass('ita')
																											})
																										}),
																									$('<div>',{class:'edit'}).append(
																										$('<h6>',{text:'F5'}),
																										$('<i>',{class:'add2 fas fa-plus-circle'}),
																										$('<i>',{class:'fas fa-times-circle del'}).click(function(){
																																						$(this).parent().parent().parent().remove();
																																						$('.line').remove();
																																							setTimeout(function(){
																																							//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																																							//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																																							$('.f1-item').map(function(i,v){
																																							     if(!$(v).hasClass('main')){
																																							    let xx=$(v).offset().left;
																																							    let yy=$(v).offset().top;
																																							    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																																							    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																																							    draw(xx1+75,yy1+80,xx+75,yy)
																																							    console.log(1212)
																																							    }
																																							})
																																						// console.log($('.line').length)
																																						})
																																					})
																									))
																								}),
																								$('<div>',{class:'row-2'})
																							)
																						);
																					}),
																					$('<i>',{class:'fas fa-times-circle del'}).click(function(){
																																	$(this).parent().parent().parent().remove();
																																	$('.line').remove();
																																		setTimeout(function(){
																																		//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																																		//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																																		$('.f1-item').map(function(i,v){
																																		     if(!$(v).hasClass('main')){
																																		    let xx=$(v).offset().left;
																																		    let yy=$(v).offset().top;
																																		    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																																		    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																																		    draw(xx1+75,yy1+80,xx+75,yy)
																																		    console.log(1212)
																																		    }
																																		})
																																	// console.log($('.line').length)
																																	})
																																})
																				))
																			}),
																			$('<div>',{class:'row-2'})
																		)
																	);
																}),
																$('<i>',{class:'fas fa-times-circle del'}).click(function(){
																												$(this).parent().parent().parent().remove();
																												$('.line').remove();
																													setTimeout(function(){
																													//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																													//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																													$('.f1-item').map(function(i,v){
																													     if(!$(v).hasClass('main')){
																													    let xx=$(v).offset().left;
																													    let yy=$(v).offset().top;
																													    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																													    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																													    draw(xx1+75,yy1+80,xx+75,yy)
																													    console.log(1212)
																													    }
																													})
																												// console.log($('.line').length)
																												})
																											})
															))
														}),
														$('<div>',{class:'row-2'})
													)
												);
											}),






											$('<i>',{class:'fas fa-times-circle del'}).click(function(){
																							$(this).parent().parent().parent().remove();
																								$('.line').remove();
																								setTimeout(function(){
																								//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																								//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																								$('.f1-item').map(function(i,v){
																								     if(!$(v).hasClass('main')){
																								    let xx=$(v).offset().left;
																								    let yy=$(v).offset().top;
																								    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																								    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																								    draw(xx1+75,yy1+80,xx+75,yy)
																								    console.log(1212)
																								    }
																								})
																							// console.log($('.line').length)
																							})
																						})
										))
									}),
									$('<div>',{class:'row-2'})
								)
							);
						}),
						$('<i>',{class:'fas fa-times-circle'}).click(function(){
																
																$(this).parent().parent().parent('.f1').remove();
																$('.line').remove();
																setTimeout(function(){
																//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
																//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
																$('.f1-item').map(function(i,v){
																     if(!$(v).hasClass('main')){
																    let xx=$(v).offset().left;
																    let yy=$(v).offset().top;
																    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
																    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
																    draw(xx1+75,yy1+80,xx+75,yy)
																    console.log(1212)
																    }
																})
															// console.log($('.line').length)
															})
															}),

					))
					
				}),

				$('<div>',{class:'row-2'})
				
			),

			
		)
		
		//x++;
		//dragElement(document.getElementById("h1"));
		//dragElement(document.getElementById("h2"));
		//connect($('.main').offset().left,$('.main').offset().top,$('.f1-item').offset().left,$('.f1-item').offset().top)
	});
	
	// $(window).click(function(){
	// 	$('.line').remove();

	// 					//draw($('.main').offset().left+75,$('.main').offset().top+80,t.offset().left+75,t.offset().top)
	// 					//draw($('.main').offset().left+75,$('.main').offset().top+80,preT.offset().left+75,preT.offset().top)
	// 					$('.f1-item').map(function(i,v){
	// 					    if(!$(v).hasClass('main')){
	// 					    let xx=$(v).offset().left;
	// 					    let yy=$(v).offset().top;
	// 					    let xx1=$(v).parent().parent().siblings('.f1-item').offset().left;
	// 					    let yy1=$(v).parent().parent().siblings('.f1-item').offset().top;
	// 					    draw(xx1+75,yy1+80,xx+75,yy)
	// 					    console.log(1212)
	// 					    }
	// 					})
	// 				// console.log($('.line').length)
					
	// })
	
	/*
	   var line1 = $('.line1'),  
		div1 = $('.main'),  
		div2 = $('.div2');

		var pos1 = div1.position();
		
		var pos2 = div2.position();
		 line1.attr('x1', pos1.left);
		  
		  line1.attr('y1', pos1.top);
		   line1.attr('x2', pos2.left);
		   line1.attr('y2', pos2.top);
// */
// 	dragElement(document.getElementById("mydiv"));
	
// 	function dragElement(elmnt) {
// 	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
// 	  if (document.getElementById(elmnt.id + "header")) {
	   
// 	    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
// 	  } else {
	   
// 	    elmnt.onmousedown = dragMouseDown;
// 	  }

// 	  function dragMouseDown(e) {
// 	    e = e || window.event;
// 	    e.preventDefault();
// 	    // get the mouse cursor position at startup:
// 	    pos3 = e.clientX;
// 	    pos4 = e.clientY;
// 	    document.onmouseup = closeDragElement;
// 	    // call a function whenever the cursor moves:
// 	    document.onmousemove = elementDrag;
// 	  }

// 	  function elementDrag(e) {
// 	    e = e || window.event;
// 	    e.preventDefault();
// 	    // calculate the new cursor position:
// 	    pos1 = pos3 - e.clientX;
// 	    pos2 = pos4 - e.clientY;
// 	    pos3 = e.clientX;
// 	    pos4 = e.clientY;
// 	    // set the element's new position:
// 	    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
// 	    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
// 	  }

// 	  function closeDragElement() {
	   
// 	    document.onmouseup = null;
// 	    document.onmousemove = null;
// 	  }
// 	}

	$(document).ready(function(){
		let x = 1.0;
		$('#zoomin').click(function(){
			x+=0.1;
			$('.map').css('transform','scale('+x+')')

			
		})
		$('#zoomout').click(function(){
			x-=0.1;
			$('.map').css('transform','scale('+x+')')
			//x-=0.2;
		})

		$('.search').click(function(){
			let ipSearch= $('.search-val').val();
			console.log(ipSearch);
			let same = $('.f1-item input');
			for(var i=0;i<same.length;i++){
				if($(same[i]).val()===ipSearch){

					$(same[i]).addClass('change');
				}
				
			}
			$('.map').click(function(){
				console.log('map')
				$(same).removeClass('change');
		    });
		})
		
		
	})