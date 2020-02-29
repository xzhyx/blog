<template>
    <div id="header">
        <!-- show不能带（），v-bind:m="msg" @fun="show"  带小挂号是先将show调用之后，再将show返回的结果传进去
        不带是（）是将show看做一个变量名去vue身上找，从data开始往后找，再methods上找到了这个方法，把方法交给子组件， -->
        <login ref="mychild"></login>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <span class="tittle">唐伯虎点秋香</span>
                </div>
                <div class="col-md-4 mt btn">
                    
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default">搜索</button>
                    </span>
                    </div>

                </div>
                <div class="col-md-2 btn ml" ref="denglu">
                    <button type="button" class="btn btn-success" @click="login()" ref="q">登录</button>
                    <button type="button" class="btn btn-warning" @click="send()">发表博客</button>
                </div>   
            </div>
        </div>
        <div class="main container">
            <div class="col-md-3 main-left">
                <p class="text-dark">博客分类</p>
                <div class="list">
                    <ul class="list-ul  list-group">
                        <a href="#"  v-for="item in list" :key="item.id"><li class="list-group-item text-primary"><span class="badge">{{ item.pv }}</span>{{ item.tittle }}</li></a>
                    </ul>
                </div>
            </div>
            <div class="col-md-9 main-right">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item"><router-link to="/fenye">最新</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/fenye">热门</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">首页</li>
                  </ol>
                </nav>
                <div class="mainRightPic"> 
                    <table class="table table-striped"  v-for="item in list" :key="item.cid">
                        <tr>
                            <td>
                                <img src="../../static/img/logo.png" class="touxiang" alt="">
                                <div class="tip">
                                    <p><a href="#" class="text-decoration-none">{{item.desc}}</a></p>
                                    <p><span>{{item.times}}次浏览</span>&nbsp&nbsp<span>{{item.add_time}}</span></p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import login from './login'
import fenye from './fenye'
import UI from '../assets/UI'
export default {
    data() {
        return {
            list:[],
        }
    },
    mounted() {
        this.getAllList();
    },
    methods: {
        getAllList(){
                 this.$http.get('/dist/service/get.php').then(res=>{
                    var res = res.body;
                    this.list = res;                        
                 })   
            },
        login(){
            UI.open()
        },
        send(){
            UI.fasong()
        },
    },
    components:{
        fenye,
        login
    }
}
</script>
<style lang="less">
@white:#ffffff;
@grey:#f1f1f2;
@lightgrey:#cdcdcd;
body{
    background-color: #f1f1f1; 
}
ul,li{
    list-style: none;
}
    #header{
        background:linear-gradient(rgb(236, 11, 236),purple);
        max-height: 50px;
        .main{
            background: @white;
            border: 1px solid @lightgrey;
            border-radius: 4px;
            height: auto;
            margin-top:20px;
            .main-left{
                border-right: 1px solid @lightgrey;
                min-height: 100%;
                .text-dark{
                    font-size: 16px;
                    margin-top: 20px;
                    border-bottom: 1px solid @grey;
                    padding-bottom: 10px;
                }
                .list{
                    .list-ul{
                        a{
                            text-decoration: none;
                            li{
                            padding-left: 6px;

                            &:hover{
                                color: rgb(35, 73, 243);
                            }
                        }
                        }
                    }
                }
            }
            .main-right{
                nav{
                    &:after{
                        content: "";display:block;clear:both;
                    }
                    ol{
                        margin-top: 10px;
                        float: right;
                        background-color:@white;
                    }
                }
                .mainRightPic{
                    tr{
                        border-bottom: 1px solid @lightgrey;
                        max-height: 45px;
                        td{
                            display: flex;
                            justify-content: flex-start;
                            .tip{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                p{ 
                                    margin:0px;
                                    font-size: 15px;
                                    a{
                                        text-decoration: none
                                    }
                                } 
                            }
                        }
                    }
                    img{
                        width: 42px;
                        height: 42px;
                        margin: 8px;
                        border-radius: 6px;
                    }
                }
            }
        }     
    }
    .tittle{
        color: white;
        font-size: 18px;
        line-height: 50px;
    }
    .ml{
        margin-left: 210px;
        buttom{
            padding: 6px 25px;
        }
    }
</style>