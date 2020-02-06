#vue3-filters

A collection Vue.js filters.

##Installation
####Direct include
Simply include vue3-filters after Vue and it will install itself automatically:

To use one of the predefined methods (such as limitBy, filterBy, find, or orderBy) in your component, you also need to add Vue3Filters.mixin to mixin list:

NPM npm
npm install vue3-filters


import Vue from 'vue'
import Vue3Filters from 'vue3-filters'
 
Vue.use(Vue3Filters)