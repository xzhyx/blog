var UI = {
    //警告框弹出
    alert:function(obj){
		var title = (obj == undefined || obj.title == undefined) ? '系统消息' : obj.title;
		var msg = (obj == undefined || obj.msg == undefined) ? '' : obj.msg;
		var icon = (obj == undefined || obj.icon == undefined) ? 'warm' : obj.icon;
		var html = '<div class="modal fade" tabindex="-1" role="dialog" id="modal">\
					  <div class="modal-dialog modal-sm" role="document">\
					    <div class="modal-content">\
					      <div class="modal-header">\
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
					        <h4 class="modal-title">'+title+'</h4>\
					      </div>\
					      <div class="modal-body">\
					        <p><img src="./static/img/'+icon+'.png" style="width:32px;height:32px;margin-right:5px;" />'+msg+'</p>\
					      </div>\
					      <div class="modal-footer">\
					        <button type="button" class="btn btn-primary" id="summit" data-dismiss="modal">确定</button>\
					      </div>\
					    </div>\
					  </div>\
					</div>';
        $('#summit').click(function(){
            $('#modal').modal('hide');
        }
        )

		$('#login').append(html);
		$('#modal').modal({backdrop:'static'});
		$('#modal').modal('show');
		$('#modal').on('hidden.bs.modal', function (e) {
		  $('#modal').remove();
		});
	},
    //加载模态框的方法     
	fasong:function(){
        $('#myModal2').modal({backdrop:'static'});
        $('#myModal2').modal("show");
        $('#confirm').click(function(){
            $('#myModal2').modal("hide");
        })  
    },
	

    open:function(){
        $('#myModal1').modal({backdrop:'static'});
        $('#myModal1').modal("show");
        $('#confirm').click(function(){
            $('#myModal1').modal("hide");
        })  
    }
}
export default UI