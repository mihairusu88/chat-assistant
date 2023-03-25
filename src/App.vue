<template>
    <div class="main">
        <router-view v-slot="{ Component, route }">
            <component :is="layout">
                <component :is="Component" :key="route.path" />
            </component>
        </router-view>
    </div>
</template>

<script>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    export default {
        name: 'App',
        setup() {
            const route = useRoute();
            const layout = computed( () => {
                const layout = route.meta.layout || 'default';

                if ( layout === 'blank' ) {
                    return 'LayoutBlank';
                }
                else if ( layout === 'default' ) {
                    return 'LayoutDefault';
                }

                return 'LayoutBlank';
            } );

            return {
                layout
            };
        }
    };
</script>
