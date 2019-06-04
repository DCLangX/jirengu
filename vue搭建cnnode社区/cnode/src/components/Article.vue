<template>
    <div class="article">
        <div class="loading" v-if="isLoading">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else>
            <div class="topic">
                <div class="topic-header">
                    <div class="topic-title">{{post.title}}</div>
                    <ul>
                        <li>发布于：{{post.create_at | formatDate}}</li>
                        <li>作者：{{post.author.loginname}}</li>
                        <li>{{post.visit_count}}次浏览</li>
                    </ul>
                </div>
                <div class="topic-text" v-html="post.content"></div>
            </div>
            <div class="panel">
                <div class="header">
                    <span>回复</span>
                </div>
                <div class="main-container">
                    <div class="item" v-for="(item, index) in post.replies" :key="item.id">
                        <router-link
                            :to="{
                            name:'user_info',
                            params:{
                                name:item.author.loginname
                            }
                        }"
                        >
                            <div class="head-img">
                                <img :src="item.author.avatar_url">
                            </div>
                        </router-link>
                        <div class="text">
                            <div>
                                <span>{{item.author.loginname}}</span>
                                <span>{{index+1}}楼{{item.create_at | formatDate}}</span>
                            </div>
                            <div v-html="item.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Article",
    data() {
        return {
            isLoading: false,
            post: []
        };
    },
    methods: {
        getArticleData() {
            this.$http
                .get(
                    "https://cnodejs.org/api/v1/topic/" + this.$route.params.id
                )
                .then(res => {
                    if (res.data.success === true) {
                        this.isLoading = false;
                        console.log(res);
                        this.post = res.data.data;
                    }
                })
                .catch(err => {});
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getArticleData();
    }
};
</script>

<style scoped>
@import url("../assets/markdown-github.css");
.article{
    flex-grow: 1;
}
.topic {
    background-color: white;
    border-radius: 8px 8px 0 0;
}
.topic-header {
    padding: 10px;
}
.topic-title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
}
.topic-header ul {
    display: flex;
}
.topic-header ul li {
    margin-left: 25px;
    font-size: 12px;
    color: #838383;
}
.topic-text {
    padding: 10px 20px;
    border-top: 1px solid #e5e5e5;
}
.topic-text >>> .markdown-text p {
    font-size: 15px;
    line-height: 1.7em;
    margin: 1em 0;
    color: #333;
}
.topic-text >>> .markdown-text p:first-child {
    margin-top: 0;
}
.panel {
    margin-top: 20px;
}
.item {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    display: flex;
}
.item .head-img img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
.item .text {
    margin-left: 20px;
}
</style>
