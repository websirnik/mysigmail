import Vue from 'vue'
import Router from 'vue-router'
import EmailEditor from './views/email-editor/EmailEditor.vue'
import SignatureEditor from './views/signature-editor/SignatureEditor.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/signature/basic'
    },
    {
      path: '/signature',
      redirect: '/signature/basic',
      component: SignatureEditor,
      children: [
        {
          path: 'basic',
          meta: { title: 'Basic signature details' },
          component: () =>
            import(/* webpackChunkName: "basic" */ './views/signature-editor/Basic.vue')
        },
        {
          path: 'social',
          meta: { title: 'Social media links' },
          component: () =>
            import(/* webpackChunkName: "social" */ './views/signature-editor/Social.vue')
        },
        {
          path: 'options',
          meta: { title: 'Signature options' },
          component: () =>
            import(/* webpackChunkName: "options" */ './views/signature-editor/Options.vue')
        },
        {
          path: 'addons',
          meta: { title: 'Signature addons' },
          component: () =>
            import(/* webpackChunkName: "addons" */ './views/signature-editor/Addons.vue')
        },
        {
          path: 'projects',
          meta: { title: 'Projects' },
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/signature-editor/Projects.vue')
        }
      ]
    },
    {
      path: '/email',
      redirect: '/email/layout',
      component: EmailEditor,
      children: [
        {
          path: 'layout',
          meta: { title: 'Layout settings' },
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/email-editor/Layout.vue')
        }
      ]
    }
  ]
})
