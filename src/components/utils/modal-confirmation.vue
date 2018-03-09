<template>
  <div class="modal fade in" id="basic" tabindex="-1" role="basic" aria-hidden="true" style="display: block; padding-right: 16px;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title">Confirmation</h4>
            </div>
            <div class="modal-body"> You are updating a saved selection, are you sure? </div>
            <div class="modal-footer">
                <button type="button" class="btn dark btn-outline" data-dismiss="modal" @click="$emit('close')">Close</button>
                <button type="button" class="btn green" @click="$emit('submitAccession')">Save changes</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>

</style>
