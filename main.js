document.addEventListener('DOMContentLoaded', async ()=> {
  const styles = await fetch('choose-card-app.css').then(r => r.text())
  const styleTag = document.createElement('style')
  styleTag.appendChild(document.createTextNode(styles))
  document.head.appendChild(styleTag)

  const app = document.createElement('div') 
  app.setAttribute('id', 'app')
  document.body.appendChild(app)
  const { createApp, defineAsyncComponent } = await import('vue')
  const App = defineAsyncComponent(()=> import('./src/App.vue'))
  createApp(App).mount(app)
})