

//获取地址栏信息
let dataUrl=decodeURIComponent(window.location.search);
/* console.log(dataUrl) */
dataUrl=dataUrl.substr(1);
let arr=dataUrl.split('=')

$.get('../json/json.json',(data)=>{
    let str=''
data.data.forEach((index)=>{
  
   
    if(arr[1]===index.good_id){
     str+=`
     <div class="left">
     <ul class="list">
         <li><img src="${index.url}" alt="">
       </li>
       <li><img src="../img/detail-list (2).jpg" alt="">
       </li>
       <li><img src="../img/detail-list (3).jpg" alt="">
       </li>
       <li><img src="../img/detail-list (4).jpg" alt="">
       </li>
        
     </ul>
     <div class="imgs">
         <img src="${index.url}" alt="">
     </div>
   </div>
   <div class="right">
       <p>限时抢购：￥<em>${index.good_old}</em> &nbsp; &nbsp; &nbsp;<span>充值后相当于：￥${index.good_pirce}</span></p>
       <span class="a"> 充值100，返100；立即充值</span>
       <div class="con">
           <span>颜色&nbsp;&nbsp;</span>
           <ul class="nb">
               <li data-good-id="spa1">
                   <img src="../img/shop-1 (1).jpg" alt="">
                   <span>白色1</span>
               </li>
               <li data-good-id="spa2">
                   <img src="../img/shop-1 (2).jpg" alt="">
                   <span>白色2</span>
               </li>
               <li data-good-id="spa3">
                   <img src="../img/shop-1 (3).jpg" alt="">
                   <span>白色3</span>
               </li>
               <li data-good-id="spa4">
                   <img src="../img/shop-1 (4).jpg" alt="">
                   <span>黑色1</span>
               </li>
               <li data-good-id="spa5">
                   <img src="../img/shop-1 (5).jpg" alt="">
                   <span>黑色2</span>
               </li>
               <li data-good-id="spa6">
                   <img src="../img/shop-1 (6).jpg" alt="">
                   <span>白色4</span>
               </li>
               <li data-good-id="spa7">
                   <img src="../img/shop-1 (7).jpg" alt="">
                   <span>白色5</span>
               </li>
               <li data-good-id="spa8">
                   <img src="../img/shop-1 (8).jpg" alt="">
                   <span>黑色3</span>
               </li>
              
              
           </ul>
           
       </div>
       <div id="size">
           <span>尺寸&nbsp;&nbsp;</span>
           <ul>
               <li>S</li>
               <li>X</li>
               <li>L</li>
               <li>XL</li>
               <li>XXL</li>
           </ul>
       </div>
       <div id="btn">
           <a href="javaScript:;" class="a" >立即购买</a>
           <a href="javaScript:;" class="b" data-good-id="${index.good_id}">加入购物车</a>
       </div>
   </div>
     `

    }
  
})
$('#content-box').html(str)


//获取所有的右边li
$('.list li').each((index,value)=>{


    $(value).mouseenter(function(){
       let a= $(this).children().first().attr("src")
       $(this).css('border','1px solid red')
        $('.imgs img').attr("src",a)
    })
    $(value).mouseleave(function(){
      $(this).css('border','1px solid black')
     
     })
    })
    
    
    
        
    
        $('.nb li').each((index,value)=>{
    
            $(value).click(function(){
                $('.nb li').css('border','1px solid black')
                let a= $(this).children().first().attr("src")
                $(this).css('border','1px solid red')
                 $('.imgs img').attr("src",a)
                
             })
      })
    
     // 初始化
     init();
    
//购物车
$('.btn').on('click',function(){
    location.href='../html/cart.min.html'
})
 $('#btn .b').on('click',function(event){
     //获取id
     let good_id= $(this).attr('data-good-id')
     // 看cookie中是否存在
     let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
       // 转为obj
       let cookieObj = convertStrToObj(cookieStr);
       
         // 看obj中是否有商品
         if (good_id in cookieObj) {
            cookieObj[good_id].num++;
        } else {
            cookieObj[good_id] = {
                "id":$('#btn .b').attr('data-good-id'),
                "img": $('.imgs img').attr('src'),
              
                "price": Number($('.right em').html()) ,
                "num": 1,
            }
        }
        //重新加入cookie
                $.cookie('carts', JSON.stringify(cookieObj), { expires: 7, path: '/' });
   // 解决购物车数量问题
                // 获取购物车
               
             
                // 获取img飞入
                let $img = $('.imgs img').clone().css({ width: 100, height: 100 });
              
                $img.fly({
                    start: {
                        left: event.pageX,
                        top: event.pageY
                    },
                    end: {
                        left:  $('.btn').offset().left,
                        top:  $('.btn').offset().top,
                        width: 0,
                        height: 0
                    },
                    onEnd: function () {
                        let str =  $('.btn').html();
                        let re = /(\d+)/;
                        let num = parseInt(re.exec(str)[0]);
                         console.log(num)
                        $('.btn').html(`购物车(${++num})`);
                    }
                })
            })

            // 初始化cookie
            function init() {
                // 看cookie中是否存在
                let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
                // 转为obj
                let cookieObj = convertStrToObj(cookieStr);

                let sum = 0;
                for (let key in cookieObj) {
                    sum += cookieObj[key].num;
                }

                $('.btn').val(`购物车(${sum})`);
            }

 })





      
           
           
           

       
      
        