<template>
    <div class="wrapper">
        <div>
            <g-symbol name="forgot-password" width="212" height="212"/>
            <g-title>Forgot Password</g-title>
            <form @submit.prevent>
                <g-input placeholder="example@email.com" type="email">
                    <g-symbol name="user" width="26" height="26"/>
                </g-input>
                <g-button type="submit">Reset</g-button>
            </form>
        </div>
        <g-text color="#B0B0B0">
            Already have an account?
            <router-link to="/">Login here</router-link>
        </g-text>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 344px;
    width: 100%;
    padding: 74px 15px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 686px;
    min-height: 500px;
    height: 100%;
    box-sizing: border-box;

    .g-title {
        margin: 1em 0;
    }

    .g-input {
        margin-bottom: 36px;
    }

    a {
        font-size: $font-size-def;
        line-height: 19px;
        color: $accent-color;
    }

    p {
        font-size: $font-size-def;
        line-height: 19px;
        color: $text-grey;
    }
}

@media (max-height: 780px) {
    .wrapper {
        padding: 0 15px 30px;
    }
}
</style>