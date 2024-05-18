document.addEventListener('DOMContentLoaded', async ()=> {
  const bingScript = document.querySelector('script[vk-app-binding]')
  const app = document.createElement('div') 
  app.setAttribute('id', 'app')
  document.body.insertBefore(app, bingScript)
  const { createApp, defineAsyncComponent } = await import('vue')
  const App = defineAsyncComponent(()=> import('./src/App.vue'))
  createApp(App).mount(app)
})