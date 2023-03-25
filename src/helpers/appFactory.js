import { createApp } from 'vue';
import App from '@/App.vue';
import '@/scss/main.scss';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutBlank from '@/layouts/LayoutBlank.vue';
import { routerFactory } from './index';

export default {
    create: ( ) => {
        const router = routerFactory.create();
        const app = createApp( App );

        app.component( 'LayoutBlank', LayoutBlank );
        app.component( 'LayoutDefault', LayoutDefault );

        app.use( router );

        app.mount( '#app' );
    }
};
