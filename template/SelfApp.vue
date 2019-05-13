<template>
    <h1 @click="welcome">{{message}}</h1>
</template>

<script>
    export default {
        data: ()=>{
            return {
                message: "Vue quick start!!"
            }
        },
        method: {
        	welcome(){
        		alert("Welcome to WQS");
        	}
        }
    };
</script>

<style scoped>
h1{
    color:white;
}
</style>
