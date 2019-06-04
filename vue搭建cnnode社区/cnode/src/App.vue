<template>
    <div id="app">
        <Header></Header>
        <div class="main">
            <router-view name="main"></router-view>
            <router-view name="sildebar"></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import PostList from "./components/PostList";
export default {
    name: "App",
    components: {
        Header,
        PostList
    }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background-color: #e1e1e1;
}
.main {
    padding: 20px 100px;
    display: flex;
}
.loading {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e1e1e1;
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
.panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #444;
    font-size: 14px;
}
.panel .main-container {
    background-color: white;
}
</style>
