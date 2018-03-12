$(function() {
    $('#start').click(function(){

        $('#res-box').empty();
        document.getElementById("bar-loading").style.width = 0 +'%';    //使进度条百分比增长
        document.getElementById("bar-loading").innerHTML = 0 + '%';

        function move(data_sort){
            
            $('#loading').show();
            
            var id = document.getElementById("bar-loading");  //返回对拥有指定 ID 的第一个对象的引用。
            var width = 10;
            var temp = setInterval(go, 100);   //每0.1秒执行一次go函数
            function go(){
                if(width >= 100) {
                    clearInterval(temp);     //停止setInterval

                    $('#loading').hide();
                    
                    for (var i = 0; i < data_sort.length && i < 32; i++) {
                        var str_s = '<div class="col-md-3 mb-3">' + 
                                    '<div class="card h-100">' +
                                      '<div class="card-body">' + 
                                        '<h2 class="card-title">Top ' + (i+1).toString() + '</h2>' + 
                                        '<img src="img/' + data_sort[i].imgname + '" class="' + 'res"></img>' +
                                      '</div>' + 
                                      '<div class="card-footer">';
                        if (data_sort[i].category !== 'baokong') {
                            str_m = '<a href="#" class="btn btn-primary">' + data_sort[i].vname + '</a>';
                        }
                        else {
                            str_m = '<a href="#" class="btn btn-danger">' + data_sort[i].vname + '</a>';
                        }
                        var str_e = '</div>' +
                                    '</div>' + 
                                  '</div>' + 
                                  '<!-- /.col-md-3 -->';
                        var str = str_s + str_m + str_e;

                        $('#res-box').append(str);

                    }

                } else{ 
                    width++;
                    id.style.width = width+'%';    //使进度条百分比增长
                    id.innerHTML = width+'%';      
                }
            }
        }


        $('#init').hide();

        $.ajax(
            '/users/resData',
            {dataType: 'json'},
        ).done(function(data) {
            var data_sort = data.sort((a, b) => b.wscore - a.wscore);
            move(data_sort);
        }).fail(function(xhr, status) {
            console.log('失败: ' + xhr.status + ', 原因: ' + status);
        });
    
        $('#res-box').show();

    });   
})