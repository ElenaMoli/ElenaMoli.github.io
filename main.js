$(document).ready(function(){
  
  var $randomnbr = $('.nbr');
  var $timer= 20;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["H", "A", "P", "P", "Y", "B", "I", "R", "T", "H", "D", "A", "Y", "🤍"];
  
  $randomnbr.each(function(){
      
    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*$randomnbr.length+1);
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  
  $it = setInterval(value, $timer);
    
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//https://github.com/GeorgeHastings/emblem
/*
var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');*/
