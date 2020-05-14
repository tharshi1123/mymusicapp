SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/301809211',function(sound){
    $('#start-e1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
SC.stream('/tracks/151012484',function(sound){
    $('#start-e2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
 

  SC.stream('/tracks/310640631',function(sound){
    $('#start-e3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/271004119',function(sound){
      $('#start-e4').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-e4').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/548609241',function(sound){
        $('#start-e5').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-e5').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
     
        SC.stream('/tracks/318053145',function(sound){
            $('#start-e7').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-e7').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/300326751',function(sound){
              $('#start-e8').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-e8').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
	 
           
			  SC.stream('/tracks/170020775',function(sound){
                $('#start-e10').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-e10').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
			  SC.stream('/tracks/215764028',function(sound){
                $('#start-e11').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-e11').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
		

              SC.stream('/tracks/226881182',function(sound){
                     $('#start-t1').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t1').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                  
                   SC.stream('/tracks/229032155',function(sound){
                     $('#start-t3').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t3').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                   SC.stream('/tracks/315381087',function(sound){
                     $('#start-t4').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t4').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                   SC.stream('/tracks/378173321',function(sound){
                     $('#start-t5').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t5').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                   SC.stream('/tracks/498231915',function(sound){
                     $('#start-t6').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t6').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                   SC.stream('/tracks/747887425',function(sound){
                     $('#start-t8').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t8').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                   SC.stream('/tracks/653922530',function(sound){
                     $('#start-t9').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                     $('#stop-t9').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                         });
                   });
                  


});
