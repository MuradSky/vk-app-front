import { reactive, watchEffect } from 'vue'
import axios from 'axios'

export const store = reactive({
    userId: null,
    userData: null,
})

export const getUserData = userId => new Promise((resolve)=> {
    store.userId = userId ?? store.userId
    const callback = async ()=> {
        const res = await axios.get(import.meta.env.VITE_BACKEND_URL+'/'+store.userId)
        store.userData = res.data
        resolve()
    }
    watchEffect(()=> {
        callback()
    })
})