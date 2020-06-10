<template>
    <div id="contactUs">
        <span  class="animated " data-ani='bounceIn'>联系我们</span>
        <div  class="animated " data-ani='bounceInLeft'>铸科技之典范、行世间之风采！加油，奥利给！加油，余、周、陈！</div>
        <span  class="animated " data-ani='bounceInRight'>《用 “科技” 创造未来》</span>
        <span class="animated " data-ani='bounce'>联系</span>
    </div>
</template>
<script>
export default{
    name:'contactUs',
    data(){
        return{

        }
    },
    mounted(){

    },
    created(){

    },
    watch:{

    },
    computed:{

    }
}
</script>
<style lang="scss" scoped>
#contactUs{
    width: 100%;
    height: 10rem;
    background: #494d55 url(../../assets/img/map.png)  no-repeat center center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
#contactUs>span:nth-child(1){
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
}
#contactUs>div:nth-child(2){
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
}
#contactUs>span:nth-child(3){
    font-size: 0.3rem;
}
#contactUs>span:nth-child(4){
    width: 2rem;
    height: 1rem;
    background: rgb(58,167,170);
    font-size: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: 0.2s;
}
#contactUs>span:nth-child(4):hover{
    background: cornflowerblue;
    box-shadow: 0 0 5px 5px cornflowerblue;
}
</style>