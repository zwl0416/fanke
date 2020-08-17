$.get('../json/json.json',(data)=>{
    let str='';
    console.log(data)
    data.data.forEach(function(itme){
        str+=`
        <li >
        <a href="../html/detail.min.html?good_id=${itme.good_id}"><img src="${itme.url}" alt=""></a>
       
        <span class="a">${itme.good_name}</span>
        <p>售价￥<del>${itme.good_old}</del></p>
        <p>充值都买相当于：${itme.good_pirce}</p>
    </li>
        `
      
        console.log(itme)
    })
    $('.lis').html(str)
})
