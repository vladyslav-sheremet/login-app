<template>
    <a :class="['g-button-link', size]" :href="href">
        <slot/>
    </a>
</template>

<script>
export default {
    name: 'GButtonLink',
    props: {
        color: {
            default: '#1A4F8B'
        },
        type: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'big'
        },
        href: {
            type: String,
            default: '#'
        }
    }
};
</script>

<style lang="scss" scoped>
a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 344px;
    width: 100%;
    height: 50px;
    border-radius: $radius-md;
    color: $button-text;
    cursor: pointer;
    font-family: inherit;
    text-transform: uppercase;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: v-bind(color);

    &:hover {
        color: v-bind(color);
        border: 1px solid v-bind(color);
        transition: all .3s ease-in-out;
        background: transparent;
    }

    &:focus {
        outline: none;
    }
}

// sizes

.small {
    font-size: $font-size-xs;
}

.big {
    font-size: $font-size-def;
}
</style>