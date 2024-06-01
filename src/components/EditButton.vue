<script setup>
    import { ref } from 'vue'
    import ProfileEdit from './modals/ProfileEdit.vue'
    import EditPassword from './modals/EditPassword.vue'

    const isOpenEdit = ref(false)
    const isOpenPass = ref(false)
    const openEditModal = ()=> isOpenEdit.value = !isOpenEdit.value
    const openPassModal = ()=> isOpenPass.value = !isOpenPass.value
</script>

<template>
    <div :class="cn.edit">
        <button @click="openEditModal">
            ✏️ <span>Редактировать профиль</span>
        </button>

        <button @click="openPassModal">
            🔒 <span>Сменить пароль</span>
        </button>
    </div>

    <ProfileEdit :isOpen="isOpenEdit" @closeModal="openEditModal" />
    <EditPassword :isOpen="isOpenPass" @closeModal="openPassModal" />
</template>

<style scoped module="cn">
    .edit {
        margin-top: 32px;
    }

    .edit button {
        cursor: pointer;
        background: transparent;
        padding: 0;
        border: 0;
        color: #ff7a00;
        font-size: 14px;
        margin-left: 10px;
    }

    .edit button:not(:last-child) {
        margin-right: 15px;
    }

    .edit button span {
        margin-left: 5px;
    }

    .edit button span:hover {
        text-decoration: underline;
    }
</style>