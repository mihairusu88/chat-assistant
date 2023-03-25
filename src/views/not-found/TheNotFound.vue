<template>
    <div class="not-found flex flex-col flex-grow justify-center items-center">
        <h1
            class="text-6xl font-bold text-center mb-5"
            :class="[`text-${color}`]">
            Ooops!
        </h1>
        <h2 class="text-xl font-medium text-dark text-center">
            Looks like this page doesn’t exist.
        </h2>
        <TheNotFoundImage :color="color" />
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import TheNotFoundImage from './TheNotFound/TheNotFoundImage.vue';

    export default {
        name: 'TheNotFound',
        components: {
            TheNotFoundImage
        },
        setup( ) {
            const router = useRouter();
            const color = ref( 'primary' );

            const onClickButtonDo = function() {
                router.push( { name: 'TheHome' } );
            };

            return {
                onClickButtonDo,
                color
            };
        }
    };
</script>

<style lang="scss" scoped>
.not-found {
    margin: auto 0;

    .not-found__icon {
        width: 450px;
        max-width: 50%;
        max-height: 350px;
    }

    @include mobile {
        .not-found__icon {
            max-height: 200px;
        }
    }
}
</style>
