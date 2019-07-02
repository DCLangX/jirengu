<template>
    <div class="about">
        <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            @submit.native.prevent="submitForm"
        >
            <el-form-item :label="id?'修改广告位':'新建广告位'" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="广告图">
                <el-button
                    type="primary"
                    icon="el-icon-plus"
                    @click="ruleForm.items.push({})"
                >添加广告图</el-button>
                <el-row :gutter="30" type="flex" style="flex-wrap:wrap;">
                    <el-col :span="24" v-for="(item, key) in ruleForm.items" :key="key">
                        <el-divider content-position="right">图片{{key+1}}</el-divider>
                        <el-form-item label="图片">
                            <el-upload
                                class="avatar-uploader"
                                :action="$http.defaults.baseURL+'/upload'"
                                :show-file-list="false"
                                :on-success="res =>$set(item,'image',res.url)"
                            >
                                <img v-if="item.image" :src="item.image" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="跳转地址">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                type="danger"
                                icon="el-icon-delete"
                                @click="ruleForm.items.splice(key,1)"
                            >删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
            ruleForm: {
                items: []
            }
        };
    },
    methods: {
        async submitForm(formName) {
            let res;
            if (this.id) {
                res = await this.$http.put(
                    `rest/ads/${this.id}`,
                    this.ruleForm
                );
            } else {
                res = await this.$http.post("rest/ads", this.ruleForm);
            }
            this.$router.push("/ads/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async fetch() {
            const res = await this.$http.get(`rest/ads/${this.id}`);
            this.ruleForm = Object.assign({}, this.ruleForm, res.data);
        }
    },
    created() {
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
    min-width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    min-width: 178px;
    height: 178px;
    display: block;
}
</style>