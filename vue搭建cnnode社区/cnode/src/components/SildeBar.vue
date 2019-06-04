<template>
    <div class="authorinfo">
        <section class="panel author-summary">
            <div class="header">
                <span>作者</span>
            </div>
            <div class="main-container">
                <router-link
                    :to="{
                            name:'user_info',
                            params:{
                                name:userinfo.loginname
                            }
                        }"
                >
                    <div class="head-img">
                        <img :src="userinfo.avatar_url">
                        <span>{{userinfo.loginname}}</span>
                    </div>
                </router-link>
            </div>
        </section>
        <section class="panel">
                <div class="header">
                    <span>回复的主题</span>
                </div>
                <div class="main-container">
                    <div class="article" v-for="item in userinfo.recent_topics" :key="item.id">
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
                    <div class="article" v-for="item in userinfo.recent_replies" :key="item.id">
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
</template>

<script>
export default {
    name: "SildeBar",
    data() {
        return {
            userinfo: {}
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
                        console.log(res);
                        this.userinfo = res.data.data;
                    }
                })
                .catch(err => {});
        }
    },
    beforeMount() {
        this.getUserInfo();
    }
};
</script>

<style scoped>
.authorinfo {
    width: 300px;
    flex-shrink: 0;
    margin-left: 20px;
}
.panel {
    margin-top: 10px;
}
</style>
