<template>
    <div class="view">
        <forgot-password/>
    </div>
</template>
<script>
import ForgotPassword from "@/components/ForgotPassword";
export default {
    components: { ForgotPassword }
}
</script>

<style scoped lang="scss">
.view {
    height: 100%;
}

@media (min-width: 2500px) {
    .view {
        display: flex;
        align-items: center;

        &:deep(.wrapper) {
            margin-top: 0;
        }
    }
}
</style>