<template>
    <div class="login">
        <el-row type="flex" align="middle" justify="center" class="content">
            <el-col :xs="12" :sm="12" :md="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>登录</span>
                    </div>
                    <div class="text item">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="用户名">
                                <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button
                                    type="primary"
                                    native-type="submit"
                                    @click="onSubmit"
                                    :loading="isLogin"
                                >登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: ""
            },
            isLogin: false
        };
    },
    methods: {
        onSubmit() {
            // event.preventDefault();
            this.isLogin = true;
            console.log("触发登录", this.form);
            this.login();
        },
        async login() {
            const res = await this.$http.post("login", this.form);
            this.isLogin = false;
            localStorage.token = res.data.token;
            this.$message({
                message: "登录成功",
                type: "success"
            });
            this.$router.push("/");
        }
    }
};
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.login {
    height: 100vh;
}

.content {
    height: 100%;
}
</style>
