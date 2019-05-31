<template>
    <div>
        <div class="loading" v-if="isLoading">
            <div class="lds-hourglass"></div>
        </div>
        <div>
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
                    <div class="text">{{post.title}}</div>
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
.loading {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.lds-hourglass {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
}
.lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
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
</style>
