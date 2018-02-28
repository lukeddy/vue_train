import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Search from '@/components/Search'
import Artist from '@/components/Artist'
import Album from '@/components/Album'
import About from '@/components/About'
import Info from '@/components/Info'

Vue.use(vueResource)
Vue.use(Router)
// set global headers
Vue.http.headers.common['Authorization'] = 'Bearer BQBnjoZNmMCrDYhjhM2BWi_nJYO15I33WlPTvinyYvHop-swbOI9E8HhapH3mOicc_Xz5Npk5TXL2atskSNxSH3MWbQWSsw7oo3pvVyB6AFu3IE_1j8WACOxeCCRM_EQ3wPVrxR-k2wbGENOv29F_6VCHsCo&refresh_token=AQCmtenIIcmJMF4OnubYG2xVKzIVzG5KnjVo6v8Gr2Ic-ikIO1XgPYD07McPKfOee10wTbEcVh9dBEcNQWjFDj4NY3gjVWGr3gItTiSAcJEDGNvJHA9maG4cTQriYYQo-aM'

export default new Router({
  routes: [{
    path: '/',
    component: Search
  },
  { path: '/artist/:id', component: Artist },
  { path: '/album/:id', component: Album },
  { path: '/about', component: About },
  {
    path: '/info',
    component: Info
  }
  ]
})
