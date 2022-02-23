<template>
  <div class="row tw-justify-center">
    <div class="col-12 col-md-12 col-lg-11 col-xl-10">
      <div class="tw-text-4xl tw-text-center">Products</div>
      <div
        class="tw-text-center tw-px-3 sm:tw-px-0 tw-text-lg tw-text-gray-600 tw-pt-5 sm:tw-w-2/3 xl:tw-w-1/3 tw-mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, dicta
        unde reiciendis ratione dolorem deleniti ipsam eos velit laudantium
        nulla accusamus sit suscipit sed ab sunt nobis animi cupiditate
        pariatur.
      </div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="green-6"
        navigation
        padding
        arrows
        height="400px"
        class="tw-mx-auto tw-mt-4"
      >
        <q-carousel-slide :name="1" class="column">
          <div class="tw-flex tw-justify-center tw-flex-wrap sm:tw-mx-auto">
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-ready-made-3850652.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-castorly-stock-3682190.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-ready-made-3987286.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pepperimages.jpeg"
              />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column">
          <div class="tw-flex tw-justify-center tw-flex-wrap sm:tw-mx-auto">
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/gettyimages-175453750-612x612.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-shvets-production-7194915.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-ylanite-koppens-915016.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/gettyimages-1129883796-612x612.jpg"
              />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column">
          <div class="tw-flex tw-justify-center tw-flex-wrap sm:tw-mx-auto">
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/crayfishimages.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/gettyimages-1129883796-612x612.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/IMG_20210627_225625.jpg"
              />
            </div>
            <div class="md:tw-w-72 tw-w-64 tw-mx-2 tw-mt-3">
              <q-img
                class="tw-h-72 tw-object-contain tw-rounded-xl"
                src="~assets/img/pexels-pixabay-161556.jpg"
              />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Products",
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>
