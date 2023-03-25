<template>
    <router-link
        class="base-link"
        :class="{
            'flex items-center': icon
        }"
        :to="to">
        <Icon v-if="icon" class="base-link__icon mr-2" :icon="icon" :height="iconSize" />
        <span class="base-link__text">
            <slot></slot>
        </span>
    </router-link>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'BaseLink',
    components: {
        Icon
    },
    props: {
        to: {
            type: [ String, Object ],
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        iconSize: {
            type: String,
            default: null
        },
    }
};
</script>