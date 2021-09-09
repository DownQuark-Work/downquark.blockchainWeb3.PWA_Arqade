import { Router } from '@vaadin/router'
import { ARQADE_ROUTES } from '../utils/constants/routes'

import './app-root'

const outlet = document.getElementById('dq-arqade-app');
export const router = new Router(outlet);
router.setRoutes(ARQADE_ROUTES);
