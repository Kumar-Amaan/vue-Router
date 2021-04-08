<template>
    <div>
        <h1>User Component</h1>
        <h2>User Id is {{userId}}</h2>
        <!-- <p><router-link to="/user/1"> Aman</router-link></p>
        <p><router-link to="/user/2"> AmanDeep</router-link></p> -->
    </div>
</template>
<script>
export default{
    name:'User',
    data(){
        return {userId:this.$route.params.id}
    }
}
</script>