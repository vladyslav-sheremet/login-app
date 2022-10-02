<template>
    <p class="g-text">
        <slot/>
    </p>
</template>

<script>

export default {
    name: 'GText',
    props: {
        size: {
            default: '16px'
        },
        weight: {
            default: '400'
        },
        color: {
            default: 'inherit'
        }
    }
};
</script>

<style lang="scss" scoped>
p {
    font-size: v-bind(size);
    color: v-bind(color);
    font-weight: v-bind(weight);
    line-height: 1.2;
}

@media (max-width: 992px) {
    p {
        font-size: 0.95em;
    }
}

@media (max-width: 767px) {
    p {
        font-size: 0.9em;
    }
}

@media (max-width: 600px) {
    p {
        font-size: 0.88em;
    }
}

@media (max-width: 425px) {
    p {
        font-size: 0.85em;
    }
}
</style>