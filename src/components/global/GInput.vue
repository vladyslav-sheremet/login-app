<template>
    <label class="g-input" :class="[size]">
        <span>
            <slot/>
            <input
                v-bind:value="modelValue"
                v-on:input="inputEvent"
                v-bind="$attrs"
            >
            <span/>
        </span>
    </label>
</template>

<script>
export default {
    name: 'GInput',
    inheritAttrs: false,
    props: {
        size: {
            type: String,
            default: 'large',
        },
        modelValue: { type: String },
        label: { type: String },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const inputEvent = event => emit('update:modelValue', event.target.value);

        return {
            inputEvent
        };
    }
}
</script>

<style lang="scss" scoped>
.g-input {
    padding: 0;
    border: none;
    display: block;

    &:hover {
        & > span > span {
            border-color: $accent-color;
        }
    }

    & > span {
        display: flex;
        align-items: center;
        position: relative;

        & > span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            pointer-events: none;
            box-sizing: border-box;
            transition: all 0.2s;
            border: 1px solid $default-color;
            border-radius: $radius-sm;
        }

        & > input {
            width: 100%;
            border: none;
            flex-grow: 1;
            font-size: $font-size-def;
            color: $accent-color;
            font-weight: 400;
            font-family: Roboto, sans-serif;
            padding: 0 10px;
            box-sizing: border-box;
            background-color: transparent;

            &:focus {
                outline: none;
            }

            &:-webkit-autofill {
                -webkit-box-shadow: inset 0 0 0 9999px $button-text;
                -webkit-text-fill-color: $accent-color;
            }

            &::placeholder {
                color: $placeholder-color;
                opacity: 1;
            }
        }

        & > input:focus ~ span {
            border-color: $accent-color;
        }

        &:deep(svg) {
            margin-left: 12px;
            fill: #AEAEAE;
        }

        &:focus-within:deep(svg){
            fill: $accent-color;
        }
    }

    &.large {
        & > span {
            & > input {
                height: 50px;
            }
        }
    }

    &.medium {
        & > span {
            & > input {
                height: 30px;
            }
        }
    }

    &.small {
        & > span {
            & > input {
                height: 20px;
                font-size: $font-size-xs;
                padding: 0 7px;
            }
        }
    }
}
</style>