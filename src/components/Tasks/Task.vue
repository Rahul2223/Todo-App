<template>
  <q-item 
    @click="updateTask({ id:id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-light-blue-3' :'bg-teal-3'"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox 
        :value="task.completed" 
        class="no-pointer-events"/>
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{'text-strike' : task.completed}"
      >
        {{ task.name }} 
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon 
            class="q-mr-xs"
            size="18px"
            name="event"/>
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn 
        @click.stop="promptToDelete(id)"
        flat
        round 
        dense 
        color="red-5" 
        icon="delete" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';
export default {
props: ['task', 'id'],
methods: {
  ...mapActions('tasks', ['updateTask', 'deleteTask']),
  promptToDelete(id){
    this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete the task?',
        ok:{
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
  }
},
}
</script>

<style>

</style>