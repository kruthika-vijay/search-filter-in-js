$(document).ready(function(){


var favorite = [], count=0;
var tag=[], list=[];

$(".ds").change(function(e){

  this_text = $(this).val()
  $(".card-header").show();
  $("#clearFilter").show();
  //$("#profiles").children().hide()
if(e.target.checked){

    favorite.push(this_text);
    list.push(e.target.id)
    $('#profiles').children().each(function () {
                console.log(list)
               console.log($(this));

});


}
else if(!e.target.checked){
  //console.log($(".filter-summary-filter").children('.filter-tag').length);
  favorite.splice($.inArray(e.target.value, favorite), 1);

  //  console.log(e.target.value,$("#filter-tag_"+count).text());
  if(favorite.length==0){
    $("#clearFilter").hide();
  $(".card-header").hide();
  }


  //$("#filter-summary_"+count).remove();
}


var tags = "";


for(i=0;i<favorite.length;i++){

    tags += "<li id='filters'><div class='filter-summary-filter' id='filter-summary'><span class='filter-tag' id='filter-tag'>"+favorite[i]+"</span><span class=' filter-summary-removeIcon sprites-remove remove-tag'>&times;</span></div></li>";

    }
$("#tag-ul").html(tags);







});
$arr=[];
$(document).on("click",".remove-tag",function(){
  r_text = $(this).parents(".filter-summary-filter").find(".filter-tag").text();

  var id=$(this).parent().attr('id');
  $(this).parent().parent().remove();
  t_text=$(".options>li").find('input[type="checkbox"]');

  for(i=0;i<t_text.length;i++){

    $arr=t_text[i];

    if(r_text==$arr.value){
      $("#"+$arr.id).prop("checked",false);
    }

  }
  favorite.splice($.inArray(r_text, favorite), 1);
  //favorite.splice(favorite.indexOf(r_text));

  //$("#option1>li").find('input[type="checkbox"]').not(this).prop('checked', false);

if($("#tag-ul").children("#filters").length==0){
  $(".card-header").hide();
}
   });
    $filter=[];
    _arr=[];
    $('#clearFilter').on( 'click', function() {
      $filter=$('#tag-ul').children().find('#filter-tag');
       for(i=0;i<$filter.length;i++){
         _arr=$filter[i];
         t_text=$('.ds').find('_arr').prop('checked',false);
          favorite.splice($.inArray(_arr.innerText, favorite), 1);
          $('.ds').prop('checked',false);
           $('#tag-ul').children('#filters').remove();
            $(this).hide(); $('.card-header').hide();
          }
        });
   $("#univ-filter").click(function(){
     $("#option1").slideToggle(600);
     $(this).children("i").toggleClass("fa-plus-square-o fa-minus-square-o");
   });
   $("#degree-filter").click(function(){
     $("#option2").slideToggle(600);
     $(this).children("i").toggleClass("fa-plus-square-o fa-minus-square-o");
   });
   $("#grade-filter").click(function(){
     $("#option3").slideToggle(600);
     $(this).children("i").toggleClass("fa-plus-square-o fa-minus-square-o");
   });
   $("#mSkills-filter").click(function(){
     $("#option4").slideToggle(600);
     $(this).children("i").toggleClass("fa-plus-square-o fa-minus-square-o");
   });
   $("#oSkills-filter").click(function(){
     $("#option5").slideToggle(600);
     $(this).children("i").toggleClass("fa-plus-square-o fa-minus-square-o");
   });
   });