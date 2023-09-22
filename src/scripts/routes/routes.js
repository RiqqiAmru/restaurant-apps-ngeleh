import Home from '../views/pages/home';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '': Home,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
