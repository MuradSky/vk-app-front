<script setup>
    import { defineProps, defineEmits, reactive, ref, watch } from 'vue'
    import Modal from './Modal.vue'
    import Button from 'components/Button.vue'
    import { store, getUserData } from 'src/store'
    import axios from 'axios'
    
    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['closeModal'])

    const isLoading = ref(false)
    const isBtnDisabled = ref(true)
    const isSuccess = ref(false)

    const user = reactive({
        surname: store.userData.user.surname,
        name: store.userData.user.name,
        patronymic: store.userData.user.patronymic,
        email: store.userData.user.email,
    })
    
    const onChange = e => user[e.target.name] = e.target.value
    
    const onSubmit = async () => {
        isLoading.value = true
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL+`/${store.userId}/update`, {...user}, {
                headers: {
                    'Authorization': `Bearer ${store.userData.csrf_token}`
                }
            })
            await getUserData()
            isSuccess.value = true
        } catch(err) {
            console.log(err)
        } finally {
            isLoading.value = false
        }
    }

    const observerFields = ()=> {
        const { name, surname, patronymic, email } = store.userData.user
        if (user.name !== name || user.surname !== surname || user.patronymic !== patronymic || user.email !== email) {
            isBtnDisabled.value = false
        } else {
            isBtnDisabled.value = true
        }
    }

    watch(()=> store.userData, observerFields)
    watch(user, observerFields)
    watch(()=> props.isOpen, ()=> isSuccess.value = false)
</script>

<template>
    <Modal :isOpen="props.isOpen" @closeModal="emit('closeModal')">
        <div :class="cn.title" v-if="!isSuccess">Редактировать профиль</div>
        <div :class="cn.title" v-if="isSuccess">Профиль успешно обновлен</div>

        <form :class="cn.form" class="csrf-form-styles" @submit.prevent="onSubmit" v-if="!isSuccess">
            <label>
                <span>Фамилия:</span>
                <input type="text" name="surname" :value="user.surname" @input="onChange" :disabled="isLoading">
            </label>
            <label>
                <span>Имя:</span>
                <input type="text" name="name" :value="user.name" @input="onChange" :disabled="isLoading">
            </label>
            <label>
                <span>Отчество:</span>
                <input type="text" name="patronymic" :value="user.patronymic" @input="onChange" :disabled="isLoading">
            </label>
            <label>
                <span>Почта:</span>
                <input type="email" name="email" :value="user.email" @input="onChange" :disabled="isLoading">
            </label>
            <Button :class="cn.btn" :isLoading="isLoading" :isDisabled="isBtnDisabled">Сохранить</button>
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