<template>
  <div class="tw-bg-white tw-shadow-lg tw-h-12 md:tw-h-16 lg:tw-h-20 tw-w-full">
    <div class="row tw-justify-center tw-hidden md:tw-block">
      <div class="col-12 col-md-11 col-lg-10 col-xl-8">
        <div class="tw-flex tw-mt-5">
          <div
            class="tw-text-green-700 tw-text-3xl tw-w-24 tw-text-center hover:tw-text-4xl tw-pl-6 lg:tw-pl-24"
          >
            Belzainco
          </div>
          <div class="tw-flex tw-mx-auto tw-mt-1 lg:tw-w-1/3">
            <div
              class="tw-text-green-700 tw-text-lg hover:tw-text-xl tw-w-28 lg:tw-w-1/4"
            >
              Home
            </div>
            <div
              class="tw-text-green-700 tw-text-lg hover:tw-text-xl tw-w-28 lg:tw-w-1/4"
            >
              About
            </div>
            <div
              class="tw-text-green-700 tw-text-lg hover:tw-text-xl tw-w-28 lg:tw-w-1/4"
            >
              Products
            </div>
            <div
              class="tw-text-green-700 tw-text-lg hover:tw-text-xl tw-w-28 lg:tw-w-1/4"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-flex tw-justify-between md:tw-hidden">
      <div class="tw-text-green-700 tw-text-xl tw-p-2">Belzainco</div>
      <q-btn
        flat
        dense
        round
        size="md"
        icon="menu"
        aria-label="Menu"
        class="tw-h-6 tw-mr-2 tw-mt-1 tw-text-black sm:tw-text-black hover:tw-text-gray-600"
      >
        <q-menu
          class="tw-shadow-2xl"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-list style="min-width: 150px">
            <q-item clickable>
              <q-item-section
                class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-green-700 hover:tw-text-green-800"
              >
                <a href="#home"> Home </a>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section
                class="tw-text-sm tw-cursor-pointer tw-overflow-hidden tw-uppercase tw-text-green-700 hover:tw-text-green-800"
              >
                <a href="#about"> About us </a>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section
                class="tw-text-sm tw-cursor-pointer tw-overflow-hidden tw-uppercase tw-text-green-700 hover:tw-text-green-800"
              >
                <a href="#services"> Products </a>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section
                class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-green-700 hover:tw-text-green-800"
              >
                <a href="#footer"> Contact </a>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
});
</script>
