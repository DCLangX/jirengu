<template>
    <div>
        <div class="topbar bg-black py-2 px-4 d-flex ai-center">
            <img src="../assets/image/1.gif" alt />
            <div class="mx-3 flex-1">
                <p class="text-white">花里胡哨</p>
                <p class="text-dark-1 fs-xs">社会主义好</p>
            </div>
            <button class="down-btn btn bg-primary">立即下载</button>
        </div>
        <div class="bg-primary py-2">
            <div class="nav nav-inverse d-flex jc-around pt-1">
                <div class="nav-item active">
                    <router-link claas="nav-link" tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link claas="nav-link" tag="div" to="/">攻略中学</router-link>
                </div>
                <div class="nav-item">
                    <router-link claas="nav-link" tag="div" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar {
    position: sticky;
    top: 0;
    z-index: 99;
}
.topbar img {
    width: 5rem;
}
</style>
