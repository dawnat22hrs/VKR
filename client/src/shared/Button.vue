<script setup lang="ts">
</script>

<template>
    <button>
        <slot />
    </button>
</template>

<style scoped lang="scss">
button {
    background: #9489F2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    gap: 8px;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    height: 52px;
}
</style>