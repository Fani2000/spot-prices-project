import { ref, onMounted } from 'vue';
import axios from 'axios';
import SpotPricesTable from '@/components/SpotPricesTable.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const spots = ref([]);
onMounted(async () => {
    const { data } = await axios.get('https://api.sharenet.co.za/api/v1/px2/spots');
    console.log('Data: ', data.spots);
    spots.value = data.spots?.slice(0, 5);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [SpotPricesTable,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SpotPricesTable, new SpotPricesTable({ data: ((__VLS_ctx.spots)), }));
    const __VLS_1 = __VLS_0({ data: ((__VLS_ctx.spots)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ to: ("/contact"), }));
    const __VLS_7 = __VLS_6({ to: ("/contact"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_nonNullable(__VLS_10.slots).default;
    var __VLS_10;
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ to: ("/venues"), }));
    const __VLS_13 = __VLS_12({ to: ("/venues"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_nonNullable(__VLS_16.slots).default;
    var __VLS_16;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SpotPricesTable: SpotPricesTable,
            spots: spots,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
