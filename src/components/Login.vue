<template>
    <div class="wrapper">
        <g-symbol name="login" width="212" height="212"/>
        <g-title>Welcome Back!</g-title>
        <form @submit.prevent>
            <g-input placeholder="example@email.com" type="email">
                <g-symbol name="user" width="26" height="26"/>
            </g-input>
            <g-input placeholder="password" type="password">
                <g-symbol name="lock" width="26" height="26"/>
            </g-input>
            <router-link to="/forgot-password">Forgot Password?</router-link>
            <g-button type="submit" @click="submitHandler">Log In</g-button>
        </form>
        <g-text color="#B0B0B0">Or connect with social</g-text>
        <div class="buttons-wrapper">
            <g-button-link href="facebook" color="#385C8E">Facebook</g-button-link>
            <g-button-link href="google" color="#F14436">Google</g-button-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    setup () {
        function submitHandler() {
            console.log('Imitation of submit')
        }

        return  { submitHandler }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    max-width: 344px;
    width: 100%;
    padding: 30px 15px 0;
    margin: 0 auto;
    box-sizing: border-box;

    .g-title {
        margin: 1em 0;
    }

    .g-input:first-child {
        margin-bottom: 36px;
    }

    form {
        a {
            text-align: right;
            font-size: $font-size-def;
            line-height: 19px;
            color: $accent-color;
            display: block;
            margin-top: 10px;
        }

        button {
            margin-top: 50px;
        }
    }

    .g-text {
        margin: 50px 0 36px;
    }

    .buttons-wrapper {
        display: flex;
        gap: 14px;
    }
}

@media (max-height: 780px) {
    .wrapper {
        padding: 0 15px 30px;
    }
}
</style>
