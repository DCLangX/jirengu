<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/image/1.jpg" alt />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination px-3 pb-1" slot="pagination"></div>
        </swiper>
        <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm">
                <i class="sprite sprite-arrow mr-1"></i>
                <span>收起</span>
            </div>
        </div>
        <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
            <template #items="{category}">
                <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.date}}</span>
                </div>
            </template>
        </m-list-card>
        <m-card icon="menu1" title="英雄列表"></m-card>
        <m-card icon="menu1" title="精彩视频"></m-card>
        <m-card icon="menu1" title="图文攻略"></m-card>
        <m-card icon="menu1" title="英雄列表"></m-card>
        <m-card icon="menu1" title="英雄列表"></m-card>
        <m-card icon="menu1" title="英雄列表"></m-card>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {},
    data() {
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                pagination: {
                    el: ".swiper-pagination"
                }
            },
            newsCats: [
                {
                    name: "热门",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "公告",
                        title: "6月2日全服不停机更新公告",
                        date: "06/01"
                    }))
                },
                {
                    name: "新闻",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "新闻",
                        title: "6月2日全服不停机更新公告",
                        date: "06/01"
                    }))
                },
                {
                    name: "新闻",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "新闻",
                        title: "6月2日全服不停机更新公告",
                        date: "06/01"
                    }))
                },
                {
                    name: "新闻",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "新闻",
                        title: "6月2日全服不停机更新公告",
                        date: "06/01"
                    }))
                },
                {
                    name: "新闻",
                    newsList: new Array(5).fill(1).map(v => ({
                        categoryName: "新闻",
                        title: "6月2日全服不停机更新公告",
                        date: "06/01"
                    }))
                }
            ]
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables";
::v-deep .swiper-pagination {
    text-align: right;
    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors, "white");
        &.swiper-pagination-bullet-active {
            background: map-get($colors, "info");
        }
    }
}
.nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
        width: 25%;
        border-right: 1px solid $border-color;
        &:nth-child(4n) {
            border-right: none;
        }
    }
}
</style>
