document.addEventListener('DOMContentLoaded', async ()=> {
  const bingScript = document.querySelector('script[csrf-app-binding]')
  const { createApp, defineAsyncComponent } = await import('vue')
  const { getUserData } = await import('./src/store')

  const App = defineAsyncComponent(()=> import('./src/App.vue'))

  const app = appendAppContainer()
  getUserData(+bingScript.dataset.userId).then(()=> {
    createApp(App).mount(app)
  })

  function appendAppContainer() {
    const parent = bingScript.parentElement
    const app = document.createElement('div')
    app.setAttribute('id', 'app')
    parent.insertBefore(app, bingScript)
    return app
  }
})

