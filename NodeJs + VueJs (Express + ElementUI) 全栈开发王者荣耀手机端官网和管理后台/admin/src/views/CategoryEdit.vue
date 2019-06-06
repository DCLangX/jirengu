<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item label="上级分类" prop="parent">
                <el-select v-model="ruleForm.parent" placeholder="请选择">
                    <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="id?'修改分类':'新建分类'" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
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
            ruleForm: {},
            parents:[]
        };
    },
    methods: {
        async submitForm(formName) {
            let res;
            if (this.id) {
                const res = await this.$http.put(
                    `rest/categories/${this.id}`,
                    this.ruleForm
                );
            } else {
                const res = await this.$http.post("rest/categories", this.ruleForm);
            }
            this.$router.push("/categories/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/categories/${this.id}`);
            this.ruleForm = res.data;
        },
        async fetchParents() {
            const res = await this.$http.get(`rest/categories`);
            this.parents = res.data;
        }
    },
    created() {
        this.id && this.fetch();
        this.fetchParents()
    }
};
</script>

<style>
</style>
