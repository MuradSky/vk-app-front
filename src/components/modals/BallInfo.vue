<script setup>
    import Modal from './Modal.vue'
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['closeModal'])
</script>

<template>
    <Modal :isOpen="props.isOpen" @closeModal="emit('closeModal')">
        <div :class="cn.title">Как использовать и копить баллы?</div>

        <p :class="cn.text">
            Номиналы всех активированных карт суммируются автоматически.
            Обменять эти баллы можно на один или несколько любых сертификатов,
            если на полученные сертификаты не действуют ограничения в рамках промоакции.
        </p>
    </Modal>
</template>

<style scoped module="cn">
    .title {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.25;
        text-align: center;
    }

    .text {
        margin: 25px 0;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.5;
    }
</style>