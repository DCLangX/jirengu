<template>
    <div class="header">
        <img src="../assets/cnodejs_light.svg" alt="">
        <ul>
            <li><a href="">首页</a></li>
            <li><a href="">新手入门</a></li>
            <li><a href="">API</a></li>
            <li><a href="">关于</a></li>
            <li><a href="">注册</a></li>
            <li><a href="">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    background-color: #444;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}
img{
    height: 60%;
    width: auto;
}
ul{
    display: flex;
}
ul li{
    list-style: none;
}
li a{
    color: #ccc;
    padding: 0 20px;
    text-decoration: none;
}
li a:hover{
    color: white;
}
</style>
