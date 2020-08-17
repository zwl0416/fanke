class Cart {
    constructor() {
        this.addEvent();
    }
    addEvent() {
        let PAY = 0;
        //1,先获取cookie中的数据信息
        let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
        // console.log(cookieStr)
        if (!cookieStr) {
            $('.blank').css('display', 'block');
        } else {
            // 将字符串转为对象
            let cookieObj = convertStrToObj(cookieStr);
            //console.log(cookieObj);

            let str = `
            <ul class="cartHead">
            <li>缩略图</li>
            <li>品名</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li>操作</li>
        </ul>
    `;

            // 遍历对象布局
            for (let key in cookieObj) {
                // 获取商品
                let good = cookieObj[key];
                console.log(good)
                str += `
                <li><img src="${good.img}" /></li>
                <li>测试</li>
                <li>${good.price}</li>
                <li class="num">
                    <a href="javascript:;" class="minus">-</a>
                    <input type="text" name="" id="" value="${good.num}" />
                    <a href="javascript:;" class="plus">+</a>
                </li>
                <li class="total">${good.price * good.num}</li>
                <li><a href="javascript:;" class="del">删除</a></li>`

                PAY += parseInt(good.price) * parseInt(good.num);
                // console.log(PAY)


            }

            /* str += `<li class="total">
                <span>合计：</span>
                <span id="total">${parseInt(PAY)}元</span>
                <label>
                    <button type="button">去结算</button>
                </label>
            </li>
            ` */
            $('.goodInfo').html(str);

        }
        
        $('.minus').on('click', function () {

            // 获取商品id
            let good_id = $(this).parent().parent().attr('data-good-id');
            // console.log(good_id);

            // 找cookie中的good_id--
            let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
            let cookieObj = convertStrToObj(cookieStr);
            // console.log(cookieObj[good_id].num)
            if(cookieObj[good_id].num > 1){
                cookieObj[good_id].num--;
            }

            $.cookie('carts',JSON.stringify(cookieObj),{expires:7 , path:'/'});
            let PAY = 0;
            for(let key in cookieObj){
                let good = cookieObj[key];
                PAY += parseInt(good.price) * parseInt(good.num);
                // console.log(PAY)
            }

            $(this).next().html(cookieObj[good_id].num);
            $(this).parent().next().html(cookieObj[good_id].num*cookieObj[good_id].price);

            $('#total').html(PAY);

        })
        
        $('.plus').on('click', function () {

            // 获取商品id
            let good_id = $(this).parent().parent().attr('data-good-id');
            // console.log(good_id);

            // 找cookie中的good_id--
            let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
            let cookieObj = convertStrToObj(cookieStr);
            // console.log(cookieObj[good_id].num)
            cookieObj[good_id].num++;
            

            $.cookie('carts',JSON.stringify(cookieObj),{expires:7 , path:'/'});
            let PAY = 0;
            for(let key in cookieObj){
                let good = cookieObj[key];
                PAY += parseInt(good.price) * parseInt(good.num);
                // console.log(PAY)
            }

            $(this).prev().html(cookieObj[good_id].num);
            $(this).parent().next().html(cookieObj[good_id].num*cookieObj[good_id].price);

            $('#total').html(PAY);

        })
        
        $('.del').on('click', function () {

            // 获取商品id
            let good_id = $(this).parent().parent().attr('data-good-id');
            // console.log(good_id);

            // 找cookie中的good_id--
            let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
            let cookieObj = convertStrToObj(cookieStr);
            // console.log(cookieObj[good_id].num)
            delete cookieObj[good_id];
            

            $.cookie('carts',JSON.stringify(cookieObj),{expires:7 , path:'/'});

            let PAY = 0;
            for(let key in cookieObj){
                let good = cookieObj[key];
                PAY += parseInt(good.price) * parseInt(good.num);
                // console.log(PAY)
            }

            $(this).parent().parent().remove();
            $('#total').html(PAY);

        })
    }
}

new Cart();

