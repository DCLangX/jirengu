<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item :label="id?'修改管理员用户名':'新建管理员用户名'" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        id: ""
    },
    data() {
        return {
            ruleForm: {}
        };
    },
    methods: {
        async submitForm(formName) {
            let res;
            if (this.id) {
                res = await this.$http.put(
                    `rest/admin_users/${this.id}`,
                    this.ruleForm
                );
            } else {
                res = await this.$http.post("rest/admin_users", this.ruleForm);
            }
            this.$router.push("/admin_users/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/admin_users/${this.id}`);
            this.ruleForm = res.data;
        }
    },
    created() {
        this.id && this.fetch();
    }
};
</script>

<style>
</style>
