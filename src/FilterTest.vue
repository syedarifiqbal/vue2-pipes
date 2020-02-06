<template>
    <div>
        <h1>{{'number formats @ asdfjk' | words(1) | limit(10) }} : {{ '2020-02-04 00:00:00' | date }}</h1>
        <h1>{{'10000' | currency | ucword }}</h1>
        <h2>{{'22522' | amountInThousands }}</h2>
    </div>
</template>

<script>
/*eslint-disable no-unused-vars*/
/* eslint no-console: "error" */
import Filters from "./filters/index";
export default {
    filters: Filters
}
</script>

<style lang="scss">

</style>