<template>
    <div class="contaniner">
        <div class="loading" v-if="isLoading">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else>
            <div class="title">
                <div class="type-btn">全部</div>
                <div class="type-btn">精华</div>
                <div class="type-btn">分享</div>
                <div class="type-btn">问答</div>
                <div class="type-btn">招聘</div>
                <div class="type-btn">客户端测试</div>
            </div>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <img :src="post.author.avatar_url" alt>
                    <div v-if="post.top === true" class="tag top">置顶</div>
                    <div v-else-if="post.good === true" class="tag good">精华</div>
                    <div v-else-if="post.tab === 'ask'" class="tag">问答</div>
                    <div v-else-if="post.tab === 'share'" class="tag">分享</div>
                    <div class="num">
                        <span>{{post.reply_count}}</span>
                        /{{post.visit_count}}
                    </div>
                    <router-link :to="{
                        name:'post_content',
                        params:{
                            id:post.id,
                            name:post.author.loginname
                        }
                        }">
                        <div class="text">{{post.title}}</div>
                    </router-link>
                    <div class="right">{{post.last_reply_at | formatDate}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostList",
    data() {
        return {
            isLoading: false,
            posts: []
        };
    },
    methods: {
        getData() {
            this.$http
                .get("https://cnodejs.org/api/v1/topics ", {
                    page: 1,
                    limit: 20
                })
                .then(res => {
                    this.isLoading = false;
                    this.posts = res.data.data;
                })
                .catch(err => {});
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getData();
        console.log("ttt");
    }
};
</script>

<style scoped>
.contaniner {
    background-color: white;
    border-radius: 8px;
}
ul li {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    line-height: 50px;
}
ul li img {
    width: 50px;
    height: 50px;
}
.num {
    width: 80px;
    font-size: 10px;
    text-align: right;
    color: #b4b4b4;
}
.num span {
    font-size: 14px;
    color: #9e78c0;
    line-height: inherit;
    display: inline-block;
}
.text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.right {
    margin-left: auto;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #778087;
}
.title {
    display: flex;
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
    border-radius: 8px 8px 0 0;
}
.title .type-btn {
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0 5px;
    color: #80bd01;
}
.title .type-btn.active {
    color: white;
    background-color: #80bd01;
}
</style>
