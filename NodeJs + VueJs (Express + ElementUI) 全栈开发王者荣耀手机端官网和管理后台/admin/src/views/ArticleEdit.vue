<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item label="所属分类">
                <el-select v-model="ruleForm.categories" placeholder="请选择" multiple>
                    <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="id?'修改文章':'新建文章'">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor v-model="ruleForm.body"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
      VueEditor
    },
    props: {
        id: ""
    },
    data() {
        return {
            ruleForm: {
                categories:[]
            },
            categories:[]
        };
    },
    methods: {
        async submitForm(formName) {
            let res;
            if (this.id) {
                res = await this.$http.put(
                    `rest/articles/${this.id}`,
                    this.ruleForm
                );
            } else {
                res = await this.$http.post("rest/articles", this.ruleForm);
            }
            this.$router.push("/articles/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/articles/${this.id}`);
            this.ruleForm = res.data;
        },
        async fetchCategories() {
            const res = await this.$http.get(`rest/categories`);
            this.categories = res.data;
        }
    },
    created() {
        this.id && this.fetch();
        this.fetchCategories()
    }
};
</script>

<style>
</style>
