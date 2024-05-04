import 'bootstrap';
import './index.twig';
import './index.scss';

import slide from './components/slider/slider';
import select from './components/product-select/product-select';
import clickButton from './components/button/button';
import header from './blocks/header/header';
import faq from './blocks/faq/faq';

slide();
select();
clickButton();
header();
faq();
