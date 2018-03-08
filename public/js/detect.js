$(function() {
    $('#start').click(function(){
        $('#init').hide();
        
        $.ajax(
            '/users/resData',
            {dataType: 'json'},
        ).done(function(data) {
            var data_sort = data.sort((a, b) => b.wscore - a.wscore);
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
        }).fail(function(xhr, status) {
            console.log('失败: ' + xhr.status + ', 原因: ' + status);
        })

        $('#res-box').show();
      });
})

/*
<div class="col-md-3 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Video One</h2>
              <img src="images/test.png" class="res"></img>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-3 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Video Two</h2>
              <img src="images/test.png" class="res"></img>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-3 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Video Three</h2>
              <img src="images/test.png" class="res"></img>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
        <div class="col-md-3 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Video Four</h2>
              <img src="images/test.png" class="res"></img>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
*/