import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let monileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}
