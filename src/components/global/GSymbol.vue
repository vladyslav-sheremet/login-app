<template>
    <svg v-bind="$attrs">
        <use v-bind:xlink:href="require(`@/assets/images/symbol-sprite.svg`) + `#${name}`"/>
    </svg>
</template>

<script>
export default {
    name: 'GSymbol',
    props: ['name'],
};
</script>