<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item :label="id?'修改名称':'新建名称'" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="图标" prop="icon">
                <el-input v-model="ruleForm.icon"></el-input>
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
                const res = await this.$http.put(
                    `rest/items/${this.id}`,
                    this.ruleForm
                );
            } else {
                const res = await this.$http.post("rest/items", this.ruleForm);
            }
            this.$router.push("/items/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/items/${this.id}`);
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
