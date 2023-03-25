<template>
    <div class="page-home flex flex-grow items-center justify-content-center">
        <Chat />
    </div>
</template>

<script>
    import Chat from '@components/chat/Chat.vue';

    export default {
        name: 'TheHome',
        components: {
            Chat
        }
    };
</script>
