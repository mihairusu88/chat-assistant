<template>
    <div class="layout-default">
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
        <LayoutFooter />
    </div>
</template>

<script>
    import LayoutFooter from '@/layouts/components/LayoutFooter.vue';

    export default {
        name: 'LayoutDefault',
        components: {
            LayoutFooter
        }
    };
</script>

<style lang="scss" scoped>
    .layout-default {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>