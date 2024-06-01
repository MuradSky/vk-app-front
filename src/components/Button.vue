<script setup>
    import { defineProps, defineEmits } from 'vue'
    const props = defineProps({
        className: String,
        isDisabled: Boolean,
        isLoading: Boolean
    })
    const emit = defineEmits(['click'])
</script>

<template>
    <button
        class="csrf-form-btn"
        :class="[props.className, cn.btn]"
        :disabled="props.isDisabled || props.isLoading"
        @click="emit('click')"
    >
        <span :class="cn.lds_ellipsis" v-if="props.isLoading">
            <i>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </i>
        </span>
        <span :style="{ opacity: props.isLoading ? 0 : null }" >
            <slot></slot>
        </span>
    </button>
</template>

<style scoped module="cn">
    .btn {
        position: relative;
    }

    .btn span {
        color: inherit;
        transition: opacity .1s linear;
    }
    .opacity {
        opacity: 0;
    }

    .lds_ellipsis {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #1c4c5b;
        margin: 0;
    }

    .lds_ellipsis i {
        display: block;
        position: relative;
        width: 80px;
        height: 10px;
    }

    .lds_ellipsis,
    .lds_ellipsis span {
        box-sizing: border-box;
        
    }
    .lds_ellipsis {
        display: inline-block;
    }

    .lds_ellipsis span {
        position: absolute;
        width: 13.33333px;
        height: 13.33333px;
        border-radius: 50%;
        background: currentColor;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds_ellipsis span:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    .lds_ellipsis span:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds_ellipsis span:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds_ellipsis span:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
</style>

