<template>
    <div class="login">
        <p>我的博客</p>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">用户名：</span>
            <input type="text" class="form-control" placeholder="Username" 
            aria-describedby="basic-addon1" v-model="username">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">密&nbsp&nbsp&nbsp&nbsp码：</span>
            <input type="text" class="form-control" placeholder="Password" 
            aria-describedby="basic-addon1" v-model="pwd">
        </div>
        <button type="button" class="btn btn-primary" @click="confirm()">确定</button>
    </div>
</template>
<script>
import UI from '../assets/UI'
export default {
    data() {
        return {
            username:'',
            pwd:''
        }
    },
   methods: {
       confirm(){
           if(this.username.trim() == ''){
              UI.alert(
               {
                   msg:'用户名不能为空！',
                   tittle:"提示框",
                   icon:'error'
               }
               
           );
               return;
           }
           if(this.pwd.trim() == ''){
               UI.alert(
               {
                   msg:'密码不能为空！',
                   tittle:"提示框",
                   icon:'error'
               }
           );
                return;
           }
           //提交账号
           this.$http.post('/dist/service/dologin.php',{username:this.username,pwd:this.pwd},{
              emulateJSON:true
                  }).then(res=>{
                     var res = res.body;
                        if(res.code>0){
                            UI.alert({msg:res.msg,icon:'error'});
		 	            }else{
                            UI.alert({msg:res.msg,icon:'ok'});                
                            setTimeout(function(){parent.window.location.reload();},1000)
			            }
                 }).catch(err=>{
                     console.log(err);
                 })
       },
   },
}
</script>
<style lang="less" scoped>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p{
            font-size: 20px;
        }
        .input-group{
            margin-top: 30px
        }
        button{
            margin-top: 30px
        }
    }
</style>