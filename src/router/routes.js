import { routes as home } from '../views/Home/index';
import { routes as gitHub } from '../views/GitHub/index';
import { routes as favorites } from '../views/Favorites/index';

export default [
  ...home,
  ...gitHub,
  ...favorites,
]