import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes/index';

export default {
    create: ( ) => {
        const baseUrl = import.meta.env.BASE_URL;
        
        return createRouter( {
            history: createWebHistory( baseUrl ),
            routes,
            scrollBehavior( to ) {
                if ( to.hash ) {
                    return {
                        el: to.hash,
                        behavior: 'smooth',
                    };
                }
            },
        } );
    }
};
