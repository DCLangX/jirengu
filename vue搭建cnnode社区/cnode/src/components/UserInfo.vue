<template>
    <div class="userinfo">
        <div class="loading" v-if="isLoading">
            <div class="lds-hourglass"></div>
        </div>
        <div class="userinfomation" v-else>
            <section class="info">
                <div class="head">
                    <img :src="post.avatar_url" alt="">
                    <span>{{post.loginname}}</span>
                </div>
                <div>{{post.score}}积分</div>
                <div class="time">注册时间：{{post.create_at | formatDate}}</div>
            </section>
            <section class="panel">
                <div class="header">
                    <span>回复的主题</span>
                </div>
                <div class="main-container">
                    <div class="article" v-for="item in post.recent_topics" :key="item.id">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                            id:item.id,
                            name:item.author.loginnanme
                        }
                        }">
                        <p>{{item.title}}</p>
                    </router-link>
                    </div>
                </div>
            </section>
            <section class="panel">
                <div class="header">
                    <span>创建的主题</span>
                </div>
                <div class="main-container">
                    <div class="article" v-for="item in post.recent_replies" :key="item.id">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                            id:item.id,
                            name:item.author.loginnanme
                        }
                        }">
                        <p>{{item.title}}</p>
                    </router-link>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name:"UserInfo",
    data() {
        return {
            isLoading: false,
            post: []
        };
    },
    methods: {
        getUserInfo() {
            this.$http
                .get(
                    "https://cnodejs.org/api/v1/user/" + this.$route.params.name
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
        this.getUserInfo();
    }
}
</script>

<style scoped>
.info{
    background-color: white;
    padding: 10px;
}
.info .head img{
    width: 50px;
    height: 50px;
    border-radius: 4px;
}
.info .head span{
    color: #778087;
    vertical-align: top;
}
.info .time{
    color: #ababab;
    font-size: 14px;
}
.panel{
    margin-top: 10px;
}
</style>
