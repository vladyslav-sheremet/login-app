<template>
    <div :class="['g-title', `h${size}`]">
        <slot/>
    </div>
</template>

<script>

export default {
    name: 'GTitle',
    props: {
        size: {
            default: '1'
        },
        weight: {
            default: '700'
        },
        color: {
            default: 'inherit'
        }
    }
};
</script>

<style lang="scss" scoped>
.h1, .h2 {
    color: v-bind(color);
    font-weight: v-bind(weight);
    line-height: 1.2;
}

.h1 {
    font-size: $font-size-md;
}

.h2 {
    font-size: 28px;
}

@media (max-width: 992px) {
    .h1 {
        font-size: 32px;
    }

    .h2 {
        font-size: 24px;
    }
}

@media (max-width: 767px) {
    .h1 {
        font-size: 30px;
    }

    .h2 {
        font-size: 22px;
    }
}

@media (max-width: 600px) {
    .h1 {
        font-size: 28px;
    }

    .h2 {
        font-size: 20px;
    }
}

@media (max-width: 425px) {
    .h1 {
        font-size: 26px;
    }

    .h2 {
        font-size: 18px;
    }
}
</style>