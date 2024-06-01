<script setup>
    import { defineProps, defineEmits, reactive, ref, watch } from 'vue'
    import Modal from './Modal.vue'
    import Button from 'components/Button.vue'
    import { store } from 'src/store'
    import axios from 'axios'
    
    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['closeModal'])

    const isLoading = ref(false)
    const isSuccess = ref(false)

    const pass = reactive({
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    })
    
    const onChange = e => pass[e.target.name] = e.target.value
    
    const onSubmit = async () => {
        isLoading.value = true
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL+`/${store.userId}/change-password`, {...pass}, {
                headers: {
                    'Authorization': `Bearer ${store.userData.csrf_token}`
                }
            })
            isSuccess.value = true
        } catch(err) {
            console.log(err)
        } finally {
            isLoading.value = false
        }
    }

    watch(()=> props.isOpen, ()=> isSuccess.value = false)
</script>

<template>
    <Modal :isOpen="props.isOpen" @closeModal="emit('closeModal')">
        <div :class="cn.title" v-if="!isSuccess">Сменить пароль</div>
        <div :class="cn.title" v-if="isSuccess">Пароль успешно обновлен</div>

        <form :class="cn.form" class="csrf-form-styles" @submit.prevent="onSubmit" v-if="!isSuccess">
            <label>
                <span>Старый пароль:</span>
                <input type="password" name="old_password" :value="pass.old_password" @input="onChange" :disabled="isLoading">
            </label>
            <label>
                <span>Новый пароль:</span>
                <input type="password" name="new_password" :value="pass.new_password" @input="onChange" :disabled="isLoading">
            </label>
            <label>
                <span>Подтвердите новый пароль:</span>
                <input type="password" name="new_password_confirmation" :value="pass.new_password_confirmation" @input="onChange" :disabled="isLoading">
            </label>
            <Button :class="cn.btn" :isLoading="isLoading">Сохранить</button>
        </form>

        <Button :class="cn.btn" v-if="isSuccess" @click="emit('closeModal')">Закрыть</button>
    </Modal>
</template>

<style scoped module="cn">
    .title {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.25;
        text-align: center;
        margin-bottom: 24px;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    .btn {
        width: 100%;
        margin-top: 24px;
    }
</style>