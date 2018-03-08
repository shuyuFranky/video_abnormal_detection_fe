$(function() {
    $('#start').click(function(){
        $('#init').hide();
        
        $.ajax(
            '/users/resData',
            {dataType: 'json'},
        ).done(function(data) {
            var data_sort = data.sort((a, b) => b.wscore - a.wscore);
            console.log(data_sort.length);
            for (var i = 0; i < data_sort.length; i++) {
                var str = '<div class="col-md-3 mb-3">' + 
                            '<div class="card h-100">' +
                              '<div class="card-body">' + 
                                '<h2 class="card-title">Top ' + (i+1).toString() + '</h2>' + 
                                '<img src="img/' + data_sort[i].imgname + '" class="' + 'res"></img>' +
                              '</div>' + 
                              '<div class="card-footer">' + 
                                '<a href="#" class="btn btn-primary">' + data_sort[i].vname + '</a>' +
                              '</div>' +
                            '</div>' + 
                          '</div>' + 
                          '<!-- /.col-md-3 -->';
                $('#res-box').append(str);
            }
            console.log("fuck");
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