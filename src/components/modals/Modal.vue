<script setup>
    import { Teleport, defineProps, defineEmits, watch } from 'vue'
    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['closeModal'])

    watch(()=> props.isOpen, (val)=> {
        if (val) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = null
        }
    })
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" :class="cn.modal">
            <div :class="cn.shadow"></div>
            <div :class="cn.box">
                <button @click="emit('closeModal')" :class="cn.close">×</button>
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<style scoped module="cn">
    .modal {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 3000;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close {
        border: 0;
        background-color: transparent;
        font-size: 24px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .box {
        background-color: #fff;
        padding: 32px;
        border-radius: 7px;
        width: 100%;
        max-width: 375px;
        position: relative;
    }

    .shadow {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: -1;
    }
</style>