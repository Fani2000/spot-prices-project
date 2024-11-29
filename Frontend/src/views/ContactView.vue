<template>
  <div class="container mx-auto px-4 py-4 h-0.75">
    <!-- Google Maps Embed with Floating PrimeVue Contact Card -->
    <div class="relative pb-3/4 mb-6" style="padding-top: 56.25%;">
      <!-- Google Maps Iframe -->
      <iframe
          class="absolute inset-0 w-full h-[90%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.987897934433!2d31.058422381722995!3d-29.7201098108559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70593eb9fd011%3A0xb9e60b9201d796af!2s34%2C%2030%20Meridian%20Dr%2C%20Umhlanga%20Ridge%2C%20uMhlanga%2C%204320!5e0!3m2!1sen!2sza!4v1732866050365!5m2!1sen!2sza"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0">
      </iframe>

      <!-- Floating PrimeVue Card -->
      <Card class="absolute top-[120px] left-[10px] w-80 shadow-md">
        <template #title>
          Sharenet Information
        </template>
        <template #content>
          <p><strong>Address:</strong> 34, 30 Meridian Dr, Umhlanga Ridge, uMhlanga, 4320</p>
          <p><strong>Phone:</strong> 031 350 3607 </p>
          <p><strong>Email:</strong> info@sharenet.com</p>
          <p><strong>Email:</strong> www.staffingprojects.co.za</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';

// Register the component if using Options API
</script>

<style scoped>
.relative { position: relative; }
.absolute { position: absolute; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.top-5 { top: 1.25rem; }
.left-5 { left: 1.25rem; }
.w-80 { width: 20rem; }
</style>