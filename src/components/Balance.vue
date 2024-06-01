<script setup>
    import { ref } from 'vue'
    import BallInfo from './modals/BallInfo.vue'
    import { store } from 'src/store'
    const { balance, ball } = store.userData

    const isOpen = ref(false)
    const openModal = ()=> isOpen.value = !isOpen.value
</script>

<template>
    <div :class="cn.box">
        <div :class="cn.head">
            <div :class="cn.label">Баланс</div>
            <div :class="cn.sum">1 балл = 1 рубль</div>
        </div>

        <div :class="cn.balance">
            {{ balance }}
            <span>{{ ball }}</span>
        </div>

        <div :class="cn.info">
            <span>❓</span>
            <button @click="openModal">Как использовать и копить баллы</button>
        </div>

        <BallInfo
            :isOpen="isOpen"
            @closeModal="openModal"
        />
    </div>
</template>

<style scoped module="cn">
    .box {
        margin-top: 32px;
        background-color: #eeffe0;
        padding: 40px 30px;
        max-width: 400px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .label {
        font-size: 16px;
        color: #27be0f;
    }

    .sum {
        font-size: 16px;
        color: #27be0f;
        opacity: .3;
    }

    .balance {
        font-size: 60px;
        margin-right: 5px;
        color: #27be0f;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .balance span {
        font-size: 20px;
    }

    .info {
        color: #ff7a00;
        font-size: 14px;
    }

    .info button {
        cursor: pointer;
        background: transparent;
        padding: 0;
        border: 0;
        color: currentColor;
        margin-left: 10px;
    }

    .info button:hover {
        text-decoration: underline;
    }
</style>