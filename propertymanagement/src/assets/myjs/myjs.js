$(document).ready(function()
{
    $("#sign").click(function() 
    {
        $("#sin").click();
        $("#id01").hide();
    });
    $("#forpass").click(function() 
    {
        $("#id01").hide();
    });
    $("#l1").click(function() 
    {
      $(this).css({"color":"rgb(255,135,0)","border-bottom":"2px solid rgb(255,135,0)"});
      $("#l2").css({"color":"black","border":"none"});
      $("#l3").css({"color":"black","border":"none"});
      $("#lp2").hide();
      $("#lp3").hide();
      $("#lp1").show();
    });
    $("#l2").click(function() 
    {
      $(this).css({"color":"rgb(255,135,0)","border-bottom":"2px solid rgb(255,135,0)"});
      $("#l1").css({"color":"black","border":"none"});
      $("#l3").css({"color":"black","border":"none"});
      $("#lp1").hide();
      $("#lp3").hide();
      $("#lp2").show();
    });
    $("#l3").click(function() 
    {
      $(this).css({"color":"rgb(255,135,0)","border-bottom":"2px solid rgb(255,135,0)"});
      $("#l2").css({"color":"black","border":"none"});
      $("#l1").css({"color":"black","border":"none"});
      $("#lp1").hide();
      $("#lp2").hide();
      $("#lp3").show();
    });
})
$(window).scroll(function() 
{
$(".slideanim").each(function()
{
var pos = $(this).offset().top;

var winTop = $(window).scrollTop();
if (pos < winTop + 600) 
{
  $(this).addClass("slide");
}
});
});
$(document).ready(function()
{
    $("#ufile").click(function() 
    {
        $("input[id='my_file']").click();
    });
    $("#sign").click(function() 
    {
        $("#sin").click();
        $("#id01").hide();
    });
    $("#book").click(function() 
    {
        $("#log").click();
    });
    $("#clickme").click(function() 
    {
        $("#readmore").click();
    });
    $("#aboutmeinrg").click(function() 
    {
        $("#id02").hide();
        $("#readmore").click();
    });
    $("#forpass").click(function() 
    {
        $("#id01").hide();
    });
})
var modal = document.getElementById('id01');
window.onclQick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id02');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id03');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
var images = ["bus1.jpg", "bus2.jpg", "bus3.jpg"];
$(function () 
{
    var i = 0;  
    $("#dvImage").css("background-image", "url(assets/photos/" + images[i] + ")");
    setInterval(function () 
    {
        i++;
        if (i == images.length) 
        {
            i = 0;
        }
        $("#dvImage").fadeOut("3000", function () 
        {
            $(this).css("background-image", "url(assets/photos/" + images[i] + ")");
            $(this).fadeIn("3000");
        });
    }, 7000);
});