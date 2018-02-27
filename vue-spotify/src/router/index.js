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
    //set global headers
Vue.http.headers.common['Authorization'] = 'Bearer BQCsp0-BTQDasnFcVt_cnbEfHfhhvcxi5Xym1OK9BPyhqEBnxQ9mJUwWl_QTPGzncb7LZhVvV-DHSOT2h4g59IQnawpIDSm-J_iq3ZxBtvIIPzyqyfQdAqxIcXAjCQIkpVRzH5iahnKkR8LtU30iYGw1ZXgc&refresh_token=AQC8KdZSVay1lkaY75CzkQVh3R8W-YFKI9fEQSjscn_xoeXHl5rPHxB-s1p8DfV7DSiiGlB9wDgv7ICViIsJ0qxHQJ5R4zTOhJ-XsdsTFcN11AZY-YpBZbmaVI-Yx2aupsg'

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