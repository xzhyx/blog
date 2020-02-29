<template>
    <div class="form">
		<div class="input-group input-group-sm">
		  <span class="input-group-addon">博客标题</span>
		  <input type="text" class="form-control" name="title" placeholder="请输入博客标题">
		</div>
		<div class="input-group input-group-sm">
		  <span class="input-group-addon">博客分类</span>
		  <select class="form-control">
		  <option v-for="item in list" :key="item.id">{{item.tittle}}</option>
		  </select>
		</div>
		<div class="input-group input-group-sm">
		  <span class="input-group-addon">关键字</span>
		  <input type="text" class="form-control" name="keywords" placeholder="请输入博客关键字">
		</div>
		<div class="input-group input-group-sm">
		  <span class="input-group-addon">描述</span>
		  <input type="text" class="form-control" name="title" placeholder="请输入博客描述">
		</div>
		
		<div class="input-group input-group-sm">
		  <span class="input-group-addon">博客内容</span>
		  <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
		</div>
		<button class="btn btn-primary" style="float: right;">保存</button>
	</div>
</template>
<script>
import EditorBar from './wenben'
export default {
    components: { EditorBar },
		data() {
			return {
				isClear: false,
				detail:"",
				list:[]
				}
			}, 
			mounted() {
        this.getAllList();
    }, 
		methods: {
			change(val) {
				console.log(val)
			
			},
			getAllList(){
                 this.$http.get('/dist/service/article.php').then(res=>{
                    var res = res.body;
                    this.list = res;  
                 })   
            },
		}
    
}
</script>
<style lang="less">
    .form{margin: 8px 0;
		&:after{
			content: '';display:block;clear: both;
		}
	}
	.form .input-group{margin: 18px 0 ;}
</style>