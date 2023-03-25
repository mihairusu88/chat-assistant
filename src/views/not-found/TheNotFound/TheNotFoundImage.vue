<template>
    <NotFoundImage
        class="not-found__icon"
        :class="[colorClass]" />
</template>

<script>
    import { computed, toRefs } from 'vue';
    import { colorValidator as propUtilsColorValidator } from '@/utils/propValidators';
    import NotFoundImage from '@/assets/404.svg';

    export default {
        name: 'TheNotFoundImage',
        components: {
            NotFoundImage
        },
        props: {
            color: {
                type: String,
                default: 'default',
                validator: propUtilsColorValidator
            }
        },
        setup( props ) {
            const { color } = toRefs( props );
            const colorClass = computed( () => {
                return propUtilsColorValidator( color.value ) ? `is-${color.value}` : 'is-default';
            } );

            return {
                colorClass,
            };
        }
    };
</script>

<style lang="scss" scoped>
.not-found__icon.is-primary {
    :deep(.svg-icon) {
        fill: $primary;
    }
}
</style>
