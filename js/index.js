(function(){
  let interval = setInterval(increment, 100)
  function increment () {
    let num = parseFloat((($('#loadingPercent')[0].offsetWidth / 200).toFixed(2)*1000)/10) + '%'
    $('#loading')[0].innerHTML = num
    if (num === '100%') {
      clearInterval(interval)
      $('#loaddingWrap').addClass("displaynone")
      $('#minWrap').removeClass('displaynone')
    }
  }
  var t = setTimeout(function(){
    clearTimeout(t);
    $("#introductionTxt").fadeOut(1500,function(){
      $("#indexWrap").fadeIn()
    });
  },2000)
 
}())


//输入题目框获取焦点时
$("#textbox").click(function () {
  if ($.trim($("#textbox").text()) == "输入姓名，探测最真实的你" || $.trim($("#textbox").text()) == "\u8f93\u5165\u59d3\u540d\uff0c\u63a2\u6d4b\u6700\u771f\u5b9e\u7684\u4f60") {
      $("#textbox").text("")
  }
})
// 点击按钮，进入
$("#btn_start").on("click", function (e) {
  $("#indexWrap,#introductionWrap").hide();
  $("#minWrap").removeClass("body_bg").addClass("body_bg1");
  $("#questionWrap").show();
})

$("#questionBox").on("click", ".questionoption", function (e) {
  e.preventDefault();
  $("#indexWrap").hide();
  $("#minWrap").removeClass("body_bg1");
  $("#resultLoading").hide();
  $("#questionWrap").hide();
  $("#resultWrap").show();
})

$("#rightBottom").on("click", function (e) {
  console.log('hello');
  
  e.preventDefault();
  $("#minWrap").addClass("body_bg1");
  $("#adWrap").removeClass("displaynone");
  $("#resultWrap").hide();
})
$("#btn_back").on("click", function (e) {
  e.preventDefault();
  $("#minWrap").removeClass("body_bg1");
  $("#resultWrap").show();
  $("#adWrap").addClass("displaynone");
})