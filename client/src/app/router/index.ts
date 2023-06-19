import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import RegistrationView from '@/pages/RegistrationView.vue'
import MyStickers from '@/widgets/HomeMain/Store.vue'
import AboutTeam from '@/pages/AboutTeam.vue'
import InfoView from '@/pages/InfoView.vue'
import MyInstitute from '@/pages/MyInstitute.vue'
import PastEvents from '@/pages/PastEvents.vue'
import UpComingEvents from '@/pages/UpComingEvents.vue'
import AdminPanel from '@/pages/AdminPanel.vue'
import StickersAdmin from '@/widgets/AdminPanel/StickersAdmin.vue'
import DirectorsAdmin from '@/widgets/AdminPanel/DirectorsAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/my-stickers',
      name: 'stickers',
      component: MyStickers
    },
    {
      path: '/about-team',
      name: 'team',
      component: AboutTeam
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    },
    {
      path: '/institute',
      name: 'institute',
      component: MyInstitute
    },
    {
      path: '/past-events',
      name: 'pastEvents',
      component: PastEvents
    },
    {
      path: '/upcoming-events',
      name: 'upcomingEvents',
      component: UpComingEvents
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel,
      /*meta: {
        auth: true
      },*/
      children: [
        {
          path: 'stickers',
          component: StickersAdmin
        },
        {
          path: 'directors',
          component: DirectorsAdmin
        }
      ]
    }
  ]
})


export default router
