<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
             <button class="modal-default-button" @click="$emit('close')">
                X
              </button>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
               <button class="modal-default-button" @click="$emit('close')">
                X
              </button> 
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
/* modal styles */
.modal-mask {
  position: relative;
  z-index: 9998;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  /* width: 300px; */
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.intrinsic-container {
  position: relative;
  height: 0;
  overflow: hidden;
}

/* 16x9 Aspect Ratio */
.intrinsic-container-16x9 {
  padding-bottom: 56.25%;
}

/* 4x3 Aspect Ratio */
.intrinsic-container-4x3 {
  padding-bottom: 75%;
}

.intrinsic-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>