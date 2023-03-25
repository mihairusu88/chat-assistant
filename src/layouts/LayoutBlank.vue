<template>
    <div class="layout-blank">
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'LayoutBlank'
    };
</script>

<style lang="scss" scoped>
    .layout-blank {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>