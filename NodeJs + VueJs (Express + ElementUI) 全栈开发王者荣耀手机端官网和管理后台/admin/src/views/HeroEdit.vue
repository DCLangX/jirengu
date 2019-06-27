<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item :label="id?'修改英雄':'新建英雄'" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="称号" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="categories">
                <el-select v-model="ruleForm.categories" multiple>
                    <el-option
                        v-for="item of categories"
                        :label="item.name"
                        :value="item._id"
                        :key="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="难度" prop="difficult">
                <el-rate :max="10" show-score v-model="ruleForm.scores.difficult"></el-rate>
            </el-form-item>
            <el-form-item label="技能" prop="skills">
                <el-rate :max="10" show-score v-model="ruleForm.scores.skills"></el-rate>
            </el-form-item>
            <el-form-item label="攻击" prop="attack">
                <el-rate :max="10" show-score v-model="ruleForm.scores.attack"></el-rate>
            </el-form-item>
            <el-form-item label="生存" prop="survive">
                <el-rate :max="10" show-score v-model="ruleForm.scores.survive"></el-rate>
            </el-form-item>
            <el-form-item label="顺风出装" prop="items1">
                <el-select v-model="ruleForm.items1" multiple>
                    <el-option
                        v-for="item of items"
                        :label="item.name"
                        :value="item._id"
                        :key="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="顺风出装" prop="items2">
                <el-select v-model="ruleForm.items2" multiple>
                    <el-option
                        v-for="item of items"
                        :label="item.name"
                        :value="item._id"
                        :key="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="使用技巧" prop="usageTips">
                <el-input type="textarea" v-model="ruleForm.usageTips"></el-input>
            </el-form-item>
            <el-form-item label="对抗技巧" prop="battleTips">
                <el-input type="textarea" v-model="ruleForm.battleTips"></el-input>
            </el-form-item>
            <el-form-item label="团战思路" prop="teamTips">
                <el-input type="textarea" v-model="ruleForm.teamTips"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="avatar">
                <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="uploadSuccess"
                >
                    <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
            categories: [],
            items: [],
            ruleForm: {
                name: "",
                title: "",
                categories: [],
                scores: {
                    difficult: 0,
                    skills: 0,
                    attack: 0,
                    survive: 0
                }
            },
            items1: [],
            items2: []
        };
    },
    methods: {
        async submitForm(formName) {
            let res;
            if (this.id) {
                const res = await this.$http.put(
                    `rest/hero/${this.id}`,
                    this.ruleForm
                );
            } else {
                const res = await this.$http.post("rest/hero", this.ruleForm);
            }
            this.$router.push("/hero/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/hero/${this.id}`);
            this.ruleForm = Object.assign({}, this.ruleForm, res.data);
        },
        async fetchCategories() {
            const res = await this.$http.get(`rest/categories`);
            this.categories = res.data;
        },
        async fetchItems() {
            const res = await this.$http.get(`rest/items`);
            this.items = res.data;
        },
        uploadSuccess(res, file) {
            this.$set(this.ruleForm, "avatar", res.url);
        }
    },
    created() {
        this.fetchCategories();
        this.fetchItems();
        this.id && this.fetch();
    }
};
</script>

<style scoped>
.avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader >>> .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
