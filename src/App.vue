<script setup>
    import { watchEffect } from 'vue'
    import axios from 'axios'
    import { store } from 'src/store'
    import UserData from 'components/UserData.vue'
    import Balance from 'components/Balance.vue'
    import EditButton from 'components/EditButton.vue'
</script>

<template>
    <div class="csrf-app-styles" >
        <UserData />
        <EditButton />
        <Balance />
    </div>
</template>

<style global>
    @import url(https://mandarincert.4px.site/_assets/web/styles/main.css?v=0.1.2);

    .csrf-app-styles {
        max-width: 900px;
        margin: 50px auto;
        padding: 0 15px;
    }

    .csrf-form-styles label {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
    }

    .csrf-form-styles span {
        margin-bottom: 6px;
        font-size: 14px;
        color: #aaa;
    }

    .csrf-form-styles input {
        outline:0;
        color: #333333;
        font-size: 14px;
        padding: 10px;
        width: 100%;
        border-radius: 3px;
        border: 1px solid #d6d6d6;
        /* background-color: #F5F5F5FF; */
    }

    .csrf-form-styles input:disabled {
        background-color: #F5F5F5FF;
    }

    .csrf-form-styles input:active, .csrf-form-styles input:focus {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #969696;
    }

    .csrf-form-btn {
        background-color:#44c767;
        border-radius: 10px;
        border:1px solid #18ab29;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size: 17px;
        padding:16px 31px;
        text-decoration:none;
        text-shadow:0px 1px 0px #2f6627;
    }

    .csrf-form-btn:hover:not(:disabled) {
        background-color:#5cbf2a;
    }

    .csrf-form-btn:disabled {
        cursor: no-drop;
        opacity: .5;
    }
</style>