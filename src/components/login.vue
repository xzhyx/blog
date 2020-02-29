<template>
    <div id="login">
        <!-- <p>{{m}}</p>
        <button @click="myshow()">ddddddddd</button> -->
      <!-- 弹框 -->
    
      <!-- 弹框登录 -->
    <div class="modal fade" tabindex="-1" role="dialog" id="myModal1">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">系统消息</h4>
          </div>
          <div class="modal-body">
            <!-- 子组件登录框 -->
            <l id="l"></l>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="myModal2">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">系统消息</h4>
          </div>
          <div class="modal-body">
            <!-- 子组件登录框 -->
           <blog></blog>
          </div>
        </div>
      </div>
    </div>
    

    </div>
</template>
<script>
import UI from '../assets/UI'
import l from './m'
import blog from './blog'
export default {
    components:{
      l,
      blog
    },
}
</script>
<style lang="less">
#myModal1{
  .modal-content{
    max-width: 550px;
  }
  .modal-dialog{
    @media all and (max-width:768px) {
      max-width: 356px;
    }
  }
}
#modal{
  .modal-dialog{
    @media all and (max-width:768px) {
      max-width: 356px;
    }
    .modal-content{
      max-width: 300px;
    }
  }
}
    .modal-dialog{
      width: 700px;
      height: 550px;      
    }
    #myModal2{
      .modal-dialog{
        max-width: 790px;
        @media all and (max-width:768px) {
        max-width: 356px;
        .modal-content{
          max-width: 700px;
        }
    }
      }
    }
</style>