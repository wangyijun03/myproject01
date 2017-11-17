/* 
* @Author: Marte
* @Date:   2017-11-13 16:43:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 12:08:25
*/

document.addEventListener('DOMContentLoaded',function(){

     let focus = document.querySelector('#lunbt');
            let bigpic = focus.querySelector('.lunbo');
            let bigItems = bigpic.children;
            let len = bigItems.length;

            //当前图片
            let index = 0;

            // 上一张显示的图片
            let lastIndex = 0;

            // 隐藏除index外所有图片
            for(var i=0;i<len;i++){
                if(i!==index){
                    animate(bigItems[i],{opacity:0});
                }
            }
            // 生成页码
             var page=document.createElement('div');
                page.className='page';

                for(var i=0;i<len;i++){
                    var span=document.createElement('span');
                    //给当前页码加高亮
                    // index= index>len-1 ? 0:index;
                    if(i===index){
                        span.className='active';
                    }
                    page.appendChild(span);
                }
                bigpic.appendChild(page);

            //移入移除只在大图区域暂停
            bigpic.onmouseenter = function(){
                clearInterval(timer);
            }
            bigpic.onmouseleave = function(){
                timer = setInterval(autoPlay,3000);
            }
             let timer = setInterval(autoPlay,3000);

            function autoPlay(){
                index++;
                showImg();
                // console.log(index);
            };


            function showImg(){
                if(index >= len){
                    index = 0;
                }else if(index < 0){
                    index = len - 1;
                }
                animate(bigItems[index],{opacity:1});//animate(bigItems[index],{opacity:1,width:100,height:300});
                animate(bigItems[lastIndex],{opacity:0});

                // 更新lastIndex
                lastIndex = index;
            };



            // 公告滚动条
            let gonggao=document.querySelector('.gonggao_r');
            let ggul=gonggao.firstElementChild;

            // 复制第一个li
            let ggcopyli=ggul.children[0].cloneNode(true);
            ggul.appendChild(ggcopyli);

            //数量
            let gglen=ggul.children.length;
            let ggheight=ggul.children[0].offsetHeight;
            ggul.style.height=ggheight*gglen+'px';
            let ggidx=0;
            let ggItems=ggul.children;
            setInterval(ggPlay,3000);

            function ggPlay(){
                ggidx++;
                showgg();
            }
            function showgg(){
                if(ggidx>gglen-1){
                    ggul.style.top=0;
                    ggidx=1;
                }else if(ggidx<0){
                    ggidx=gglen-1;
                }

                animate(ggul,{top:-ggidx*ggheight});
            };


            //我的账户+++++++++++++++++++++++
          var rul = document.querySelector('.rul');
          var navItem = rul.children;
          for(let i=0;i<navItem.length-1;i++){
                navItem[i].onmouseover = function(e){
                  e = e || window.event;
                  this.style.backgroundColor='#fff';
                  var ul = this.children[2];
                  var hitem=ul.children.length;
                  // hitem = hitem>10? 9:hitem;
                  var height = hitem*24;
                  var ulhigh=getStyle(ul,'height');
                  ulhigh = ulhigh.slice(0,-2);
                  
                    // animate(ul,{height:0});
                    animate(ul,{height:height});
                }
                navItem[i].onmouseout = function(e){
                  e = e || window.event;
                  this.style.backgroundColor='#F2F2F2';
                  var ul = this.children[2];
                  var hitem=ul.children.length;
                  // hitem = hitem>10? 9:hitem;
                  var height = hitem*24;
                  var ulhigh=getStyle(ul,'height');
                  ulhigh = ulhigh.slice(0,-2);
                  
                    // animate(ul,{height:0});
                    animate(ul,{height:0});
                }
              // if(ulhigh>0){
              // }else{
              // }
              // e.preventDefault ? e.preventDefault() : returnValue = false;
         

          }
});