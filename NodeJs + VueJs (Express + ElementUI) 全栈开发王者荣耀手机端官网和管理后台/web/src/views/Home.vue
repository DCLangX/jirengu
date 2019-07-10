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
        <m-card icon="menu1" title="新闻资讯">
            <div class="nav d-flex jc-between">
                <div class="nav-item active">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">新闻</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">新闻</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">新闻</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">新闻</div>
                </div>
            </div>
            <div class="pt-3">
                <swiper>
                    <swiper-slide v-for="m in 5" :key="m">
                        <div class="py-2" v-for="n in 5" :key="n">
                            <span>[新闻]</span>
                            <span>|</span>
                            <span>夏日新版本“稷下星之队”即将6月上线</span>
                            <span>06/02</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </m-card>
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
            }
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
