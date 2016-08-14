;
(function($){
  $.fn.sampleSlider = function(option){
　　var setting = {
      changeTime:5,
      transition:"fade",
      transitionTime:500
    };
    $.extend(setting,option || {});
   
    return this.each(function(index, element){

      var sliderWrapEl = $(element);

      var imageSrcs = []; //それぞれのimg要素のsrc属性の値を入れる配列
      
　　　//img要素をラップしているタグにスタイルを設定
      sliderWrapEl.css({
        position:"relative",
        overflow:"hidden"
      });

　　　//それぞれのimg要素のsrc属性の値をimageSrcsに収納
      sliderWrapEl.find("img").each(function(_index, _element){
        var imageElement=$(_element);
        imageSrcs.push(imageElement.attr("src"));
        if(sliderWrapEl.find("img").length<=_index+1){
          makeElements();
        }
      });
      function makeElements(){
        //それぞれのimg要素のsrc属性の値をimageSrcsに収納した後はimg要素はいらないので削除
        sliderWrapEl.find("img").remove();

        //imageSrcsの配列の要素数だけ新しいdiv要素(imageSrcsのvalueを背景にもった)を作成
        for(var i=0; i<imageSrcs.length ; i++){
            var template = "<div class='sampleSlider__image' style='background-image:url("+
                           imageSrcs[i] +
                           ");position:absolute;width:100%;height:100%;background-size:cover;background-position:center center;background-repeat:no-repeat;'></div>";
            sliderWrapEl.append(template);
        }
      

      //cssの設定
      //画像切り替え効果の条件分岐
      if(setting.transition==="fade"){
        sliderWrapEl.find(".sampleSlider__image").css({opacity:0});

        function imageChange(){
          //リセット
          sliderWrapEl.find(".sampleSlider__image").css({zIndex:0}).removeClass('current');
          sliderWrapEl.find(".sampleSlider__image").eq(i).addClass('current').css({zIndex:1}).animate({opacity:1},setting.transitionTime,function(){
            sliderWrapEl.find(".sampleSlider__image").not('.current').css({opacity:0});
            sliderWrapEl.find(".current").css({zIndex:0});
          });

          i++;

          if(imageSrcs.length < i+1){
            i=0;
          }

        }

        var i=0;

        imageChange();
   
        setInterval(imageChange,setting.changeTime * 1000);//ミリ秒に変更

      }else if(setting.transition==="top"){

      }else if(setting.transition==="right"){

      }else if(setting.transition==="bottom"){

      }else if(setting.transition==="left"){

      }
      }
      
    });
  }
})(jQuery);