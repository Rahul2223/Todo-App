<template>
  <q-page class="q-ma-md">
    <q-list 
      v-if="Object.keys(tasks).length"
      separator 
      bordered>
      <Task v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"></Task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @closed="showAddTask=false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import AddTask from '../components/Tasks/Modals/AddTask.vue'
import Task from '../components/Tasks/Task.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'PageTodo',
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task,
    AddTask
  }
}
</script>
