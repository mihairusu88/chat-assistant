<template>
    <div class="chat-header">
        <div class="chat-header__content">
            <Icon class="mr-2" icon="mdi:chat-outline" width="25px" height="25px" />
            <span>Live Support Chat </span>
        </div>
        <div class="chat-header__details">
            <span>You are chating with <b>Support Assistant</b></span>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'ChatHeader',
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
    .chat-header {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;

        .chat-header__content {
            display: flex;
            width: 100%;
            padding: 15px;
            background: $dark;
            color: $light;
            flex-direction: row;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .chat-header__details {
            width: 100%;
            padding: 10px 15px;
            color: var( --color--gray-light );
            font-size: 14px;
            border-bottom: 1px solid var( --color--gray-lighter );

            b {
                color: $dark;
            }
        }
    }
</style>