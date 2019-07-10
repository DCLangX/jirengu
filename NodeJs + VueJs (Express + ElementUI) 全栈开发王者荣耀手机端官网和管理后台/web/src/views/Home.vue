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
</style>
