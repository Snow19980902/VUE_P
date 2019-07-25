<template>
    <div class="app_container">
        <!-- header -->
        <mt-header fixed title="header">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="back" v-show="flag"></mt-button>
            </router-link>
        </mt-header>

        <!-- main -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-viljz" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-viljz" to="/menber">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-viljz" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="num-ponsition">
                        {{
                        this.$store.getters.getCarNum
                        }}
                    </span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-viljz" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false
        };
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    watch: {
        $route(now, old) {
            if (now.path == "/home") {
                this.flag = false
            } else {
                this.flag = true
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.mint-header {
    z-index: 999;
}
button:enabled:active {
    background-color: #26a2ff;
}
.app_container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

// 解决底部 tab 栏无法点击的问题
.mui-bar-tab .mui-tab-item-viljz.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-viljz {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-viljz .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-viljz .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

