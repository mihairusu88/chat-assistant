<template>
    <div class="footer">
        <AssistantLogoImage />
        <span class="ml-2">Powered by ChatGPT</span>
    </div>
</template>

<script>
import AssistantLogoImage from '@/assets/assistant_logo.svg';

export default {
  name: 'LayoutFooter',
  components: {
    AssistantLogoImage
  }
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba( $dark, 0.05 );

    svg {
        width: 30px;
    }
}
</style>