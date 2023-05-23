import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faG, faK, faUserSecret, } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBills, faBullseye, faArrowsUpToLine, faArrowsDownToLine, faPaperPlane, faInfoCircle, faComments, faMessage, faBell, faEnvelope, faKey, faHome, faArrowRightFromBracket, faGear, faUser, faCalendarCheck, faChartLine, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(faMoneyBills, faBullseye, faArrowsUpToLine, faArrowsDownToLine, faPaperPlane, faInfoCircle, faComments, faMessage, faBell, faEnvelope, faKey, faHome, faArrowRightFromBracket, faGear, faUser, faCalendarCheck, faChartLine, faClockRotateLeft)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
