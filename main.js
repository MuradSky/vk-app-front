document.addEventListener('DOMContentLoaded', async ()=> {
  const { createApp, defineAsyncComponent } = await import('vue')
  const App = defineAsyncComponent(()=> import('./src/App.vue'))

  const app = appendAppContainer(app)
  createApp(App).mount(app)

  function appendAppContainer(app) {
    const bingScript = document.querySelector('script[vk-app-binding]')
    const parent = bingScript.parentElement
    const app = document.createElement('div') 
    app.setAttribute('id', 'app')
    parent.insertBefore(app, bingScript)
    return app
  }
})

