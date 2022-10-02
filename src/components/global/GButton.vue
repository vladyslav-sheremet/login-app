<template>
    <button :class="['g-button', size]" :disabled="disabled">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'GButton',
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
        disabled: {
            type: Boolean
        }
    }
};
</script>

<style lang="scss" scoped>
button {
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
    font-size: $font-size-def;
    line-height: 20px;
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

    &:disabled {
        background-color: $default-color;
        cursor: not-allowed;
    }
}

// sizes

.small {
    font-weight: 400;
    font-size: $font-size-xs;
    line-height: 18px;
}

.big {
    font-weight: 500;
    font-size: $font-size-sm;
    line-height: 27px;
}
</style>