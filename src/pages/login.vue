<template>
<div class="login">
    <el-form :model="form" label-width="120px">
        <el-form-item label="">
            <el-input v-model="form.LoginName" />
        </el-form-item>
        <el-form-item label="">
            <el-input v-model="form.Password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit()">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script setup>
import { reactive, getCurrentInstance, onMounted } from 'vue';
const form = reactive({
    LoginName: '',
    Password: '',
})
async function submit(){
    let params = form;
    let res = await getCurrentInstance()?.appContext.config.globalProperties.$interfaces.login(params);
    console.log(res);
}
onMounted(() => {
    console.log(getCurrentInstance());
    console.log(getCurrentInstance().appContext.config.globalProperties.$interfaces);
})

</script>
<style>
</style>