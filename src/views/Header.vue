<template>
    <div class="header">
        <div class="header-class">
            <div v-if="isLogin">
                <div class="user-header-class"></div>
            </div>
            <div v-if="!isLogin" class="login-class" @click="showLoginPage">亲,请登录</div>
            <div v-if="!isLogin" class="registry-class" @click="showRegistryPage">免费注册</div>
            <div class="car-class">购物车</div>
            <div class="contact-class">联系客服</div>
            <div class="order-class">查看订单</div>
        </div>

        <div>
            <template>
                <el-dialog width="30%"
                           v-model="loginVisible">
                    <span>
                        <el-form :model="passLogin" status-icon ref="passLogin" label-width="100px"
                                 class="demo-ruleForm">
                            <el-form-item label="用户名">
                                <el-input type="text" v-model="passLogin.username" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input type="password" v-model="passLogin.password" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                    </span>
                </el-dialog>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isLogin: false,
                loginVisible: false,
                passLogin: {
                    username: '',
                    password: ''
                }
            }
        },
        created() {

        },
        methods: {
            showLoginPage() {   // 登录操作
                this.loginVisible = true
            },
            showRegistryPage() {  // 注册操作
                this.loginVisible = true
            }
        }
    }
</script>

<style scoped>

    .header {
        background-color: #f5f5f5;
    }

    .header-class {
        width: 60%;
        height: 60px;
        border: 0;
        padding: 0;
        margin: 0 auto;
        line-height: 60px;
    }

    .header-class > div {
        float: right;
        padding-right: 30px;
    }

    .user-header-class {
        width: 170px;
        height: 60px;
    }

    .login-class {
        width: 70px;
        color: #409eff;
    }

    .login-class:hover {
        cursor: pointer;
    }

    .registry-class {
        width: 70px;
    }

    .registry-class:hover {
        cursor: pointer;
        color: #409eff;
    }

    .car-class {
        width: 70px;
    }

    .car-class:hover {
        cursor: pointer;
        color: #409eff;
    }

    .contact-class {
        width: 70px;
    }

    .contact-class:hover {
        cursor: pointer;
        color: #409eff;
    }

    .order-class {
        width: 70px;
    }

    .order-class:hover {
        cursor: pointer;
        color: #409eff;
    }

</style>