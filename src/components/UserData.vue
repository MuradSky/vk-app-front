<script setup>
    import { store } from 'src/store'
    const { user, pharm_point: pharmPoint } = store.userData
</script>

<template>
    <div :class="cn.profile">
        <div :class="cn.row">
            <div :class="cn.label">ФИО:</div>
            <div :class="cn.val">{{ user?.surname }} {{ user?.name }} {{ user?.patronymic }}</div>
        </div>
        <div :class="cn.row">
            <div :class="cn.label">Почта:</div>
            <div :class="cn.val">{{ user?.email }}</div>
        </div>
        <div :class="cn.row">
            <div :class="cn.label">Точка:</div>
            <div :class="cn.val">
                {{ pharmPoint?.external_id }} <br>
                {{ pharmPoint?.city }} <br>
                {{ pharmPoint?.address }}
            </div>
        </div>
    </div>
</template>


<style scoped module="cn">
    .profile {

    }

    .row {
        display: flex;
    }

    .row:not(:last-child) {
        margin-bottom: 17px;
    }

    .label {
        font-size: 14px;
        flex: 0 0 55px;
        margin-right: 6px;


        color: rgba(39, 190, 15, .4);
        font-weight: 300;
    }

    .val {
        font-weight: 300;
        font-size: 14px;
        white-space: nowrap;
    }
</style>