<template>
    <div class="row">
          <div class="col-lg-12">
            <div class="text-center p-4">
              <p>
                © {{ currentYear }} dispatch system. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by abytech hub
              </p>
            </div>
          </div>
        </div>
</template>


<script>
const AuthFooter = () => import('@/components/AuthFooter.vue');


export default {
  components: {
    AuthFooter
  },
  name: "AuthFooter",

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  
};
</script>