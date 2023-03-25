<template>
    <div 
        class="base-card"
        :class="[
            colorClass
        ]">
        <div v-if="$slots['title']" class="base-card__title">
            <slot name="title"></slot>
        </div>
        <div v-if="$slots['default']" class="base-card__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
    name: 'BaseCard',
    props: {
        color: {
            type: String,
            default: 'white'
        },
    },
    setup( props ) {
        const { color } = toRefs( props );
        const colorClass = computed( () => {
            return `is-${color.value}`;
        } );

        return {
            colorClass
        };
    }
};
</script>

<style lang="scss" scoped>

.base-card {
    display: block;
    position: relative;
    border: 1px solid $light;
    border-radius: 15px;
    outline: none;
    white-space: normal;
    overflow-wrap: break-word;
    text-decoration: none;
    max-width: 100%;
    transition-property: box-shadow, opacity;

    @include box-shadow($dark);

    .base-card__title {
        background: $light;
        border-bottom: 1px solid rgba( $dark, 0.15 );
        border-radius: 15px 15px 0 0;
    }
}

.base-card.is-white {
    background: $light;
}
</style>